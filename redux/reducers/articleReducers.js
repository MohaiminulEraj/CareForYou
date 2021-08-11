import {
    ALL_ARTICLES_REQUEST,
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,

    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    NEW_ARTICLE_RESET,
    NEW_ARTICLE_FAIL,

    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_RESET,
    UPDATE_ARTICLE_FAIL,

    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_RESET,
    DELETE_ARTICLE_FAIL,

    CLEAR_ERRORS
} from '../constants/articleConstants'

// All articles reducer
export const allArticlesReducer = (state = { articles: [] }, action) => {
    switch (action.type) {

        case ALL_ARTICLES_REQUEST:
            return {
                loading: true,
            }

        case ALL_ARTICLES_SUCCESS:
            return {
                // articlesCount: action.payload.articlesCount,
                // resPerPage: action.payload.resPerPage,
                // filteredArticlesCount: action.payload.filteredArticlesCount,
                // articles: action.payload.articles
                loading: false,
                articles: action.payload
            }
        case ALL_ARTICLES_FAIL:
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

export const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE_REQUEST:
        case DELETE_ARTICLE_REQUEST:
            return {
                loading: true
            }

        case UPDATE_ARTICLE_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_ARTICLE_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ARTICLE_RESET:
            return {
                loading: false,
                isUpdated: false
            }

        case DELETE_ARTICLE_RESET:
            return {
                loading: false,
                isDeleted: false
            }

        case UPDATE_ARTICLE_FAIL:
        case DELETE_ARTICLE_FAIL:
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