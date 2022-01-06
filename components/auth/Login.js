import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { signIn } from 'next-auth/client'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import ButtonLoader from '../layout/ButtonLoader'
import styles from '@/styles/AuthForm.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        setLoading(false);
        if (result.error) {
            toast.error(result.error);
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> LOGIN
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link href="/account/password/forgot" className="float-right mb-4">Forgot Password?</Link>
                <button type="submit" className="btn btn-danger" disabled={loading ? true : false}>{loading ? <ButtonLoader /> : 'Login'} </button>

            </form>
            <p className="mt-2">
                Don`t have an account? <Link href="/account/register">Register</Link>
            </p>
        </div>
    )
}

export default Login;
