import User from '../models/user'
import Article from '../models/article'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import cloudinary from 'cloudinary'

import ErrorHandler from '../utils/errorHandler'

// GET - all articles=> /api/articles
const allArticles = catchAsyncErrors(async (req, res) => {
    const articles = await Article.find({ visibility: "private" });
    res.status(200).json({
        success: true,
        articles,
        message: 'All Articles'
    });
})

// POST - Create a new article => /api/articles
const newArticle = catchAsyncErrors(async (req, res) => {

    const description_file = req.body.description_file;
    if (description_file) {
        let description_fileLinks = [];

        for (let i = 0; i < description_file.length; i++) {

            const result = await cloudinary.v2.uploader.upload(description_file[i], {
                folder: 'careforyou/articles/description_file',
            });

            description_fileLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }
        req.body.description_file = description_fileLinks;

    }

    const stages_file = req.body.stages_file;
    if (stages_file) {
        let stages_fileLinks = [];

        for (let i = 0; i < stages_file.length; i++) {

            const result = await cloudinary.v2.uploader.upload(stages_file[i], {
                folder: 'careforyou/articles/stages_file',
            });

            stages_fileLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })

        }
        req.body.stages_file = stages_fileLinks;

    }
    const remedies_file = req.body.remedies_file;
    if (remedies_file) {

        let remedies_fileLinks = [];

        for (let i = 0; i < remedies_file.length; i++) {

            const result = await cloudinary.v2.uploader.upload(remedies_file[i], {
                folder: 'careforyou/articles/remedies_file',
            });

            remedies_fileLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })

        }
        req.body.remedies_file = remedies_fileLinks;
    }
    req.body.author = req.user._id
    req.body.diagnosis = req.body.diagnosis.split(',');
    req.body.symptoms = req.body.symptoms.split(',');
    for (var i = 0; i < req.body.diagnosis.length; i++) {
        req.body.diagnosis[i] = req.body.diagnosis[i].trim();
    }
    for (var i = 0; i < req.body.symptoms.length; i++) {
        req.body.symptoms[i] = req.body.symptoms[i].trim();
    }
    const article = await Article.create(req.body);
    const user = await User.findById(req.user._id).populate({
        path: 'articles',
        select: 'title department'
    }).sort({ "createdAt": -1 }).populate({
        path: 'author',
        select: 'username'
    });
    user.articles.push(article)
    await user.save();
    res.status(200).json({
        success: true,
        article,
        message: 'Article created successfully!'
    })
})

export {
    allArticles,
    newArticle
}