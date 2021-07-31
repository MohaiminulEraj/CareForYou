import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonLoader from '../layout/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearErrors } from '@/redux/actions/userActions'
import styles from '@/styles/AuthForm.module.css'

const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();
    const router = useRouter();

    const { error, loading, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            router.push('/account/login')
        }

    }, [dispatch, success, error])


    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password do not match!')
            return;
        }
        const passwords = {
            password, confirmPassword
        }

        dispatch(resetPassword(router.query.token, passwords))

    }


    return (
        <div className={styles.auth}>
            <h1>
                New Password
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" >Confirm Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit"
                    className="btn btn-danger"
                    disabled={loading ? true : false}>{loading ? <ButtonLoader /> : 'Set Password'}
                </button>
            </form>
        </div>
    )
}

export default NewPassword
