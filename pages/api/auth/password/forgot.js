import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { forgotPassword } from '@/server/controllers/authControllers'

import onError from '@/server/middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.post(forgotPassword)

export default handler;