import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearErrors } from '@/redux/actions/userActions'

import styles from '@/styles/AuthForm.module.css'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (message) {
            toast.success(message)
        }

    }, [dispatch, message, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            email
        }

        dispatch(forgotPassword(userData))

    }


    return (
        <div className={styles.auth}>
            <h1>
                Forgot Password
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email" >Enter Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-danger" disabled={loading ? true : false}>{loading ? <ButtonLoader /> : 'Send Email'} </button>

            </form>
        </div>
    )
}

export default ForgotPassword
