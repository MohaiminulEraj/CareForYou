const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        maxLength: [100, 'Title cannot exceed 100 characters']
    },
    department: {
        type: String,
        required: [true, 'Please enter a department name']
    },
    description: {
        type: String,
        required: [true, 'Please enter article description']
    },
    description_file: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    causes: {
        type: String,
        required: true
    },
    stages: {
        type: String,
        required: true,
    },
    stages_file: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    consequences: {
        type: String,
        required: true
    },
    remediesAndTreatments: {
        type: String,
        required: true
    },
    remedies_file: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    faq: {
        type: String,
        required: true
    },
    prevention: {
        type: String,
        required: true
    },
    adverse: {
        type: String,
        required: true
    },
    sideEffect: {
        type: String,
        required: true
    },
    diagnosis: {
        type: [String],
        trim: true,
        required: true
    },
    symptoms: {
        type: [String],
        trim: true,
        required: true
    },
    docId: {
        type: String,
        trim: true,
        required: true
    },
    refLink: {
        type: String,
        required: true
    },
    thumbnail: String,
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        defualt: 0
    },
    docFeedBack: String,
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                // required: true
            },
            name: {
                type: String,
                // required: true
            },
            // rating: {
            //     type: Number,
            // },
            comment: {
                type: String,
                // required: true
            }
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    authorUserId: {
        type: String,
        required: true,
    },
    visibility: {
        type: String,
        enum: ["public", "private", "protected"],
        default: "private"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true });


// const Article = mongoose.model('Article', ArticleSchema);
// module.exports = Article;

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);