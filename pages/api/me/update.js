import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import { updateProfile } from '@/server/controllers/authController'
import { isAuthenticatedUser } from '@/server/middlewares/auth'
import onError from '@/server/middlewares/errors'
const handler = nc({ onError });
dbConnect();
handler
    .use(isAuthenticatedUser)
    .put(updateProfile)


export default handler;