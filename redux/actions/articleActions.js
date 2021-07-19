import axios from 'axios';
import absoluteUrl from 'next-absolute-url'
import {
    ALL_ARTICLES_SUCCESS,
    ALL_ARTICLES_FAIL,
    CLEAR_ERRORS
} from '../constants/articleConstants'

//Get all articles
export const getArticles = (req) => async (dispatch) => {
    try {
        const { origin } = absoluteUrl(req);
        const { data } = await axios.get(`${origin}/api/articles`)
        dispatch({
            type: ALL_ARTICLES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_ARTICLES_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}