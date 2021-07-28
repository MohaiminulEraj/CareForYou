import { combineReducers } from 'redux'
import { allArticlesReducer } from './articlesReducers'
import { authReducer, userReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    auth: authReducer,
    user: userReducer,
})

export default reducer