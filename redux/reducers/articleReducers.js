import {
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,

    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    NEW_ARTICLE_RESET,
    NEW_ARTICLE_FAIL,

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
    }
}

// export const newArticleReducer = (state = { article: null }, action) => {
//     switch (action.type) {
//         case NEW_ARTICLE_REQUEST:
//             return {
//                 loading: true
//             }

//         case NEW_ARTICLE_SUCCESS:
//             return {
//                 loading: false,
//                 success: true,
//                 // article: action.payload.article
//             }

//         case NEW_ARTICLE_RESET:
//             return {
//                 success: false
//             }

//         case NEW_ARTICLE_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload
//             }

//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null
//             }

//         default:
//             return state
//     }
// }


export const newArticleReducer = (state = { article: {} }, action) => {
    switch (action.type) {
        case NEW_ARTICLE_REQUEST:
            return {
                loading: true
            }

        case NEW_ARTICLE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                article: action.payload.article
            }

        case NEW_ARTICLE_RESET:
            return {
                success: false
            }

        case NEW_ARTICLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
