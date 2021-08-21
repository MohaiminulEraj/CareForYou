import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { createArticleReview } from '@/server/controllers/articleControllers'

import onError from '@/server/middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '@/server/middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles('doctor')).put(createArticleReview)
