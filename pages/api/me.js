import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import { currentUserProfile } from '@/server/controllers/authController'
import { isAuthenticatedUser } from '@/server/middlewares/auth'
import onError from '@/server/middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile)

export default handler;