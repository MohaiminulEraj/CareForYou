import Artilce from '../models/artilce'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import ErrorHandler from '../utils/errorHandler'
const allArticles = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All Articles'
    });
}

// Create a new article => /api/articles
const newArticle = catchAsyncErrors(async (req, res) => {
    const article = await Artilce.create(req.body);
    res.status(200).json({
        success: true,
        article
    })
})

export {
    allArticles,
    newArticle
}