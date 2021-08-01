import Article from '../models/article'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import cloudinary from 'cloudinary'

import ErrorHandler from '../utils/errorHandler'
const allArticles = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All Articles'
    });
}

// Create a new article => /api/articles
const newArticle = catchAsyncErrors(async (req, res) => {
    const description_file = req.body.description_file;
    if (description_file) {
        let description_fileLinks = [];

        for (let i = 0; i < description_file.length; i++) {

            const result = await cloudinary.v2.uploader.upload(description_file[i], {
                folder: 'bookit/articles/description_file',
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
                folder: 'bookit/articles/stages_file',
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
                folder: 'bookit/articles/remedies_file',
            });

            remedies_fileLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })

        }
        req.body.remedies_file = remedies_fileLinks;
    }
    req.body.author = req.user._id

    const article = await Article.create(req.body);
    console.log(article);

    console.log(req.user._id)
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