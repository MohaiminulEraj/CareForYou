import { combineReducers } from 'redux'
import { allArticlesReducer, newArticleReducer, articleReducer, articleDetailsReducer, newReviewReducer } from './articleReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

const reducer = combineReducers({
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