import { combineReducers } from 'redux'
import { allArticlesReducer, newArticleReducer } from './articleReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    newArticle: newArticleReducer,
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
})

export default reducer