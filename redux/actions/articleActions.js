import axios from 'axios';
import absoluteUrl from 'next-absolute-url'
import {
    ALL_ARTICLES_REQUEST,
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,

    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    NEW_ARTICLE_FAIL,

    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAIL,

    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,

    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAIL,

    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAIL,

    CLEAR_ERRORS
} from '../constants/articleConstants'

export const getPublishedArticles = (req, currentPage = 1, location = '') => async (dispatch) => {
    try {
        dispatch({ type: ALL_ARTICLES_REQUEST });
        const { data } = await axios.get(`/api/articles/published?page=${currentPage}&location=${location}`)

        // const { origin } = absoluteUrl(req);

        // let link = `${origin}/api/articles/published?page=${currentPage}&location=${location}`
        // const { data } = await axios.get(link)

        dispatch({
            type: ALL_ARTICLES_SUCCESS,
            payload: data.articles
        })

    } catch (error) {
        dispatch({
            type: ALL_ARTICLES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getArticles = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ARTICLES_REQUEST });
        const { data } = await axios.get(`/api/articles`)

        dispatch({
            type: ALL_ARTICLES_SUCCESS,
            payload: data.articles
        })

    } catch (error) {
        dispatch({
            type: ALL_ARTICLES_FAIL,
            payload: error.response.data.message
        })
    }
}


// //Get all articles
// export const getArticles = (req, currentPage = 1, location = '') => async (dispatch) => {
//     try {
//         // dispatch({ type: ALL_ARTICLES_REQUEST });
//         // const { data } = await axios.get(`/api/articles`)
//         const { origin } = absoluteUrl(req);
//         let link = `${origin}/api/articles?page=${currentPage}&location=${location}`

//         const { data } = await axios.get(link)

//         dispatch({
//             type: ALL_ARTICLES_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: ALL_ARTICLES_FAIL,
//             payload: error.response.data.message,
//         })
//     }
// }

// // Get article details
// export const getArticleDetails = (req, id) => async (dispatch) => {
//     try {

//         const { origin } = absoluteUrl(req);

//         let url;

//         if (req) {
//             url = `${origin}/api/articles/${id}`
//         } else {
//             url = `/api/articles/${id}`
//         }

//         const { data } = await axios.get(url)

//         dispatch({
//             type: ARTICLE_DETAILS_SUCCESS,
//             payload: data.article
//         })

//     } catch (error) {
//         dispatch({
//             type: ARTICLE_DETAILS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// Get article details
export const getArticleDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ARTICLE_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/articles/${id}`)

        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data.article
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newArticle = (articleData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_ARTICLE_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/articles`, articleData, config)
        dispatch({
            type: NEW_ARTICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateArticle = (id, articleData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ARTICLE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/articles/${id}`, articleData, config)

        dispatch({
            type: UPDATE_ARTICLE_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        dispatch({
            type: UPDATE_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteArticle = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_ARTICLE_REQUEST });

        const { data } = await axios.delete(`/api/articles/${id}`)

        dispatch({
            type: DELETE_ARTICLE_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        dispatch({
            type: DELETE_ARTICLE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newReview = (id, reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        // const { data } = await axios.put(`/api/reviews`, reviewData, config)
        const { data } = await axios.put(`/api/articles/review/${id}`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}