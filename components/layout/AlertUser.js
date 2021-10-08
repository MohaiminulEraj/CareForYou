import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '@/redux/actions/articleActions'

const AlertDoctor = () => {
    const dispatch = useDispatch()
    const { error, articles } = useSelector(state => state.allArticles)
    const { user } = useSelector(state => state.loadedUser)
    let message = '';
    let count = 0;

    useEffect(() => {

        dispatch(getArticles())

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch]);

    user?.role == 'user' && articles?.forEach(article => {
        if (user._id === article.author && article.visibility === 'protected') {
            count++;
            console.log(user._id, article.author, count)
        }
        message = `Hello ${user.fullname}! you have ${count} article for revision!`
    })


    if (user?.role == 'user' && articles && count > 0)
        return (
            <Alert className="container" variant="info">
                <Alert.Heading className="text-center">{message}</Alert.Heading>
            </Alert>
        )
    return ('')
}

export default AlertDoctor