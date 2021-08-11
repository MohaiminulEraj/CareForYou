import { combineReducers } from 'redux'
import { allArticlesReducer, newArticleReducer, articleReducer } from './articleReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    article: articleReducer,
    newArticle: newArticleReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
})

export default reducer