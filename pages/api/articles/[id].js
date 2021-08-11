import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { getSingleArticle, updateArticle, deleteArticle } from '@/server/controllers/articleControllers'

import onError from '@/server/middlewares/errors'
import { isAuthenticatedUser } from '@/server/middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.get(getSingleArticle)

handler.use(isAuthenticatedUser).put(updateArticle)

handler.use(isAuthenticatedUser).delete(deleteArticle)

export default handler;