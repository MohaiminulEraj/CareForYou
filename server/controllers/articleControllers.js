import User from '../models/user'
import Article from '../models/article'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import cloudinary from 'cloudinary'
import APIFeatures from '../utils/apiFeatures'
import ErrorHandler from '../utils/errorHandler'


// GET - all published articles=> /api/articles/published
const allPublishedArticles = catchAsyncErrors(async (req, res) => {
    // const resPerPage = 4;

    // const articlesCount = await Article.countDocuments({ visibility: 'public' });

    const apiFeatures = new APIFeatures(Article.find({ visibility: 'public' }), req.query).search()

    let articles = await apiFeatures.query;
    // let filteredarticlesCount = articles.length;
    // apiFeatures.pagination(resPerPage)

    res.status(200).json({
        success: true,
        articles,
        message: 'All published Articles'
    });
})


// GET - all articles=> /api/articles
const allArticles = catchAsyncErrors(async (req, res) => {
    const articles = await Article.find();
    res.status(200).json({
        success: true,
        articles,
        message: 'All Articles'
    });
})

// POST - Create a new article => /api/articles
const newArticle = catchAsyncErrors(async (req, res, next) => {
    const checkUser = await User.find({ username: req.body.docId, role: "doctor" });
    // console.log(checkUser[0].username);
    if (checkUser.length > 0 && req.user.username !== req.body.docId || req.body.draftArticle === true) {
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
        // req.body.diagnosis = req.body.diagnosis.split(',');
        // req.body.symptoms = req.body.symptoms.split(',');
        // for (var i = 0; i < req.body.diagnosis.length; i++) {
        //     req.body.diagnosis[i] = req.body.diagnosis[i].trim();
        // }
        // for (var i = 0; i < req.body.symptoms.length; i++) {
        //     req.body.symptoms[i] = req.body.symptoms[i].trim();
        // }
        const article = await Article.create(req.body);
        const user = await User.findById(req.user._id).populate({
            path: 'articles',
            select: 'title department'
        })
        // .populate({
        //     path: 'author',
        //     select: 'username'
        // });
        user.articles.push(article)
        await user.save();
        res.status(200).json({
            success: true,
            article,
            message: 'Article created successfully!'
        })
    } else {
        return next(new ErrorHandler(`Sorry! There is no Doctor by this Username: ${req.body.docId}`, 404))
    }
})

const getSingleArticle = catchAsyncErrors(async (req, res, next) => {

    const article = await Article.findById(req.query.id);
    // console.log(article)
    if (!article) {
        return next(new ErrorHandler('Article not found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        article
    })
})


// Update Article details   =>   /api/articles/:id
const updateArticle = catchAsyncErrors(async (req, res, next) => {


    // const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    //     runValidators: true 
    // });
    let article = await Article.findById(req.query.id);

    if (!article) {
        return next(new ErrorHandler('Article not found with this ID', 404))
    }
    const checkUser = await User.find({ username: req.body.docId, role: "doctor" });
    console.log(checkUser[0].username);
    if (checkUser.length > 0 && req.user.username !== req.body.docId || req.body.draftArticle === true) {


        const description_file = req.body.description_file;
        if (description_file) {

            // Delete description file associated with the article
            for (let i = 0; i < article.description_file.length; i++) {
                await cloudinary.v2.uploader.destroy(article.description_file[i].public_id)
            }

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

            // Delete stages file associated with the article
            for (let i = 0; i < article.stages_file.length; i++) {
                await cloudinary.v2.uploader.destroy(article.stages_file[i].public_id)
            }

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

            // Delete remedies file associated with the article
            for (let i = 0; i < article.remedies_file.length; i++) {
                await cloudinary.v2.uploader.destroy(article.remedies_file[i].public_id)
            }

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
        // console.log(article.visibility)
        // console.log(req.body.visibility)
        if (article.visibility === 'protected') {
            req.body.visibility = 'private';
        }
        // req.body.visibility = 'private';

        // if (req.body.diagnosis) {
        //     req.body.diagnosis = req.body.diagnosis.split(',');
        //     for (var i = 0; i < req.body.diagnosis.length; i++) {
        //         req.body.diagnosis[i] = req.body.diagnosis[i].trim();
        //     }
        // }
        // if (req.body.symptoms) {
        //     req.body.symptoms = req.body.symptoms.split(',');
        //     for (var i = 0; i < req.body.symptoms.length; i++) {
        //         req.body.symptoms[i] = req.body.symptoms[i].trim();
        //     }
        // }

        article = await Article.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            article
        })

    } else {
        console.log('update article route')
        return next(new ErrorHandler(`Sorry! There is no Doctor by this Username: ${req.body.docId}`, 404))
    }
})


// Delete Article   =>   /api/articles/:id
const deleteArticle = catchAsyncErrors(async (req, res) => {

    const article = await Article.findById(req.query.id);
    if (!article) {
        return next(new ErrorHandler('Article not found with this ID', 404))
    }

    // Delete description file associated with the article
    if (article.description_file.length > 0)
        for (let i = 0; i < article.description_file.length; i++) {
            await cloudinary.v2.uploader.destroy(article.description_file[i].public_id)
        }

    // Delete stages file associated with the article
    if (article.stages_file.length > 0)
        for (let i = 0; i < article.stages_file.length; i++) {
            await cloudinary.v2.uploader.destroy(article.stages_file[i].public_id)
        }

    // Delete remedies file associated with the article
    if (article.remedies_file.length > 0) {
        for (let i = 0; i < article.remedies_file.length; i++) {
            await cloudinary.v2.uploader.destroy(article.remedies_file[i].public_id)
        }
    }
    const user = await User.findById(req.user._id).populate({
        path: 'articles',
        select: 'title department'
    });

    for (let i = 0; i < user.articles.length; i++) {
        if (user.articles[i]._id.equals(req.query.id)) {
            user.articles.splice(i, 1)
        }
    }
    await user.save();
    await article.remove();

    res.status(200).json({
        success: true,
        message: 'article is deleted.'
    })

})

// Create a new review   =>   /api/reviews
const createArticleReview = catchAsyncErrors(async (req, res) => {

    const { comment, visibility, articleId } = req.body;
    // console.log(articleId);
    const review = {
        user: req.user._id,
        name: req.user.name,
        comment
    }

    const article = await Article.findById(articleId);

    // const isReviewed = article.reviews.find(
    //     r => r.user.toString() === req.user._id.toString()
    // )

    // if (isReviewed) {

    //     article.reviews.forEach(review => {
    //         if (review.user.toString() === req.user._id.toString()) {
    //             review.comment = comment;
    //         }
    //     })

    // } else {
    //     article.reviews.push(review);
    //     article.numOfReviews = article.reviews.length
    //     article.visibility = visibility
    // }
    article.reviews.push(review);
    article.numOfReviews = article.reviews.length
    article.visibility = visibility
    // article = await Article.findByIdAndUpdate(req.query.id, req.body, {
    //     new: true,
    //     runValidators: true,
    //     useFindAndModify: false
    // })
    await article.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        article
    })

})

const approveArticle = catchAsyncErrors(async (req, res, next) => {


    // const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    //     runValidators: true 
    // });
    let article = await Article.findById(req.query.id);

    if (!article) {
        return next(new ErrorHandler('Article not found with this ID', 404))
    }

    article = await Article.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        article
    })

})

export {
    allPublishedArticles,
    allArticles,
    newArticle,
    getSingleArticle,
    updateArticle,
    deleteArticle,
    approveArticle,
    createArticleReview,
}