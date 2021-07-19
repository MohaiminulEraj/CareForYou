const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
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
    file1: [
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
    file1: [
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
    remedies: {
        type: String,
        required: true
    },
    file1: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    question: {
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
        required: true
    },
    symptoms: {
        type: [String],
        required: true
    },
    docId: {
        type: [String],
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
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true });


const Article = mongoose.model('Article', ArticleSchema);

export default mongoose.model.Article || mongoose.model('Article', ArticleSchema);
module.exports = Article;