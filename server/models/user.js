import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter your fullname'],
        maxLength: [100, 'Fullname must be less than 100 characters']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        lowercase: true,
        trim: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be longer than 6 characters'],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            // required: true,
            // default: 'public_id'
        },
        url: {
            type: String,
            // required: true,
            // default: '/images/default_avatar.jpg'
        }
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'doctor',
                'admin'
            ]
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    dateofbirth: {
        type: Date,
        required: true,
        default: '12/10/1000'
    },
    gender: {
        type: String,
        required: true,
        default: 'Gender'
    },
    fatherId: String,
    mohterId: String,
    spouseId: String,
    childId: [String],
    city: {
        type: String,
        required: true,
        default: 'City'
    },
    country: {
        type: String,
        required: true,
        default: 'Country'
    },
    zip: {
        type: String,
        required: true,
        default: 'zip'
    },
    phone: {
        type: String,
        validate: [validator.isMobilePhone, 'Please enter a valid Phone Number', ['bn-BD']],
    },
    license_no: {
        type: String,
        // minLength: [5, 'Please provide a valid license number'],
        // unique: true,
        // required: [true, 'Please provide a valid license'],
        // default: '00000'
    },
    university: {
        type: String,
        // required: true,
        // default: 'Uni'
    },
    dept_doc: {
        type: String,
        // required: true,
        // default: 'dept'
    },
    reference_no: {
        type: String,
        // required: true,
        // default: '(Seperated By Comma)'
    },
    credentials: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Article'
        }
    ]

}, { timestamps: true });

// Encrypting password before saving user
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generate password reset token
UserSchema.methods.getResetPasswordToken = function () {

    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex')

    // Hash and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken;

}

// export default mongoose.model('User', UserSchema);
export default mongoose.models.User || mongoose.model('User', UserSchema);