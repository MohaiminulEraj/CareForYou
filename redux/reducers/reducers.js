import { combineReducers } from 'redux'
import { allArticlesReducer, newArticleReducer } from './articleReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    newArticle: newArticleReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
})

export default reducer