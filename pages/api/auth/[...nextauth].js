import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import User from '@/server/models/user';
import dbConnect from '@/config/dbConnect'

export default NextAuth({
    session: {
        jwt: {
            signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
        }
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                dbConnect();

                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error('Please Enter Email or Password');
                }
                //Find user in the database
                const user = await User.findOne({ email }).select('+password');
                if (!user) {
                    throw new Error('Invalid Email or Password')
                }
                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }
                return Promise.resolve(user);
            }
        })
    ],
    callbacks: {
        jwt: async (token, user) => {
            user && (token.user = user)
            return Promise.resolve(token)
        },
        session: async (session, user) => {
            session.user = user.user
            return Promise.resolve(session)
        }
    }
})