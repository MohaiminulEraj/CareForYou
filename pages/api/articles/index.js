import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import { allPublishedArticles, allArticles, newArticle } from '@/server/controllers/articleControllers'
import { isAuthenticatedUser } from '@/server/middlewares/auth'
import onError from '@/server/middlewares/errors'
const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).get(allArticles); // TODO: add authorization
handler.get(allPublishedArticles);
handler.use(isAuthenticatedUser).post(newArticle);

export default handler;