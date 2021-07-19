import { combineReducers } from 'redux'
import { allArticlesReducer } from './articlesReducers'
import { authReducer } from './userReducers'

const reducer = combineReducers({
    allArticles: allArticlesReducer,
    auth: authReducer,
})

export default reducer