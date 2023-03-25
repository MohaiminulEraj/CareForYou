import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { getUserDetails, updateUser, deleteUser } from '@/server/controllers/authControllers'

import onError from '@/server/middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '@/server/middlewares/auth'

const handler = nc({ onError });

dbConnect();

// handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getUserDetails)
handler.get(getUserDetails)
handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateUser)
handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteUser)

export default handler;