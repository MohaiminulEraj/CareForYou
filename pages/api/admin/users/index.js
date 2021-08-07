import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { allAdminUsers } from '@/server/controllers/authControllers'

import onError from '@/server/middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '@/server/middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(allAdminUsers)

export default handler;