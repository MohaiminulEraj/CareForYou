import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonLoader from '../layout/ButtonLoader'
import styles from '@/styles/AuthForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '@/redux/actions/userActions'
import Link from 'next/link'
// import Image from 'next/image'

const Register = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [user, setUser] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
    })
    const { fullname, username, email, password } = user
    // const [avatar, setAvatar] = useState('/images/default_avatar.jpg');
    // const [avatarPrevew, setAvatarPrevew] = useState('/images/default_avatar.jpg');
    const { success, error, loading } = useSelector(state => state.auth)

    useEffect(() => {

        if (success) {
            router.push('/account/login')
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, success, error])

    // const [fullname, setFullname] = useState('')
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // setLoading(true);
        if (password !== passwordConfirm) {
            toast.error('Password do not match!')
            return;
        }
        const userData = {
            fullname, username, email, password
        }
        dispatch(registerUser(userData))
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> Register
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname" >Full name</label>
                    <input type="text" id="fullname" name="fullname" value={fullname} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="username" >Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" id="email" name="email" value={email} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="passwordConfirm" > Confirm Password</label>
                    <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-danger btn-block" disabled={loading ? true : false} >{loading ? <ButtonLoader /> : 'REGISTER'} </button>
            </form>
            <p className='mt-2'>
                Already have an account? <Link href="/account/login">Login</Link>
            </p>
        </div>
    )
}

export default Register
