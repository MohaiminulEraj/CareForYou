import catchAsyncErrors from './catchAsyncErrors'
import ErrorHandler from '../utils/errorHandler'
import { getSessions } from 'next-auth/client'

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const session = await getSessions({ req });
    if (!session) {
        return next(new ErrorHandler('Login first to access this resource', 401));
    }
    req.user = session.user;
    next();
})

export {
    isAuthenticatedUser,
}