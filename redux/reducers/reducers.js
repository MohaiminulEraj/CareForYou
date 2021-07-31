import { combineReducers } from 'redux'
import { allArticlesReducer } from './articlesReducers'
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
})

export default reducer