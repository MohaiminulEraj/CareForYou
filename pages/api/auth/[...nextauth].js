import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import User from '@/server/models/user';
import dbConnect from '@/config/dbConnect'

export default NextAuth({
    session: {
        jwt: true,
        maxAge: 7 * 24 * 60 * 60
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
                const isPasswordMatched = await user.comparePassword(password);

                if (!user || !isPasswordMatched) {
                    throw new Error('Invalid Email or Password!');
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
        session: async (session, token) => {
            session.user = user.user
            return Promise.resolve(session)
        }
    }
})