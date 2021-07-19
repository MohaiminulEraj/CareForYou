import {
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,
    CLEAR_ERRORS
} from '../constants/articleConstants'

// All articles reducer
export const allArticlesReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ALL_ARTICLES_SUCCESS:
            return {
                articlesCount: action.payload.articlesCount,
                resPerPage: action.payload.resPerPage,
                filteredArticlesCount: action.payload.filteredArticlesCount,
                articles: action.payload.articles
            }
        case ALL_ARTICLES_FAIL:
            return {
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }i
}