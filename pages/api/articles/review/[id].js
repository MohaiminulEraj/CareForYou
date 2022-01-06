import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { approveArticle } from '@/server/controllers/articleControllers'

import onError from '@/server/middlewares/errors'
import { isAuthenticatedUser } from '@/server/middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(approveArticle)

export default handler;