import User from '../models/user'
import cloudinary from 'cloudinary'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'

// Setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Register User => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
    // const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: 'careforyou/avatars',
    //     width: '150',
    //     crop: 'scale'
    // })
    const { fullname, username, email, password } = req.body;
    const user = await User.create({
        fullname,
        username,
        email,
        password,
        // avatar: {
        //     public_id: result.public_id,
        //     url: result.secure_url
        // }
    });
    res.status(200).json({
        success: true,
        message: 'Account Registered successfully.'
    })
})

export {
    registerUser
}