import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import { allArticles, newArticle } from '@/server/controllers/articleController'
import onError from '@/server/middlewares/errors'
const handler = nc({ onError });
dbConnect();
handler.get(allArticles);
handler.post(newArticle);

export default handler;