import { combineReducers } from 'redux'
import { allPublishedArticlesReducer, allArticlesReducer, newArticleReducer, articleReducer, articleDetailsReducer, newReviewReducer } from './articleReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

const reducer = combineReducers({
    allPublishedArticles: allPublishedArticlesReducer,
    allArticles: allArticlesReducer,
    article: articleReducer,
    articleDetails: articleDetailsReducer,
    newArticle: newArticleReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
    newReview: newReviewReducer,
})

export default reducer