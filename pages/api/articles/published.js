import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import { allPublishedArticles } from '@/server/controllers/articleControllers'
import { isAuthenticatedUser } from '@/server/middlewares/auth'
import onError from '@/server/middlewares/errors'
const handler = nc({ onError });
dbConnect();

handler.get(allPublishedArticles);


export default handler;