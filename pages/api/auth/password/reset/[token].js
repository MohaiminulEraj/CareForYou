import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { resetPassword } from '@/server/controllers/authControllers'

import onError from '@/server/middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.put(resetPassword)

export default handler;