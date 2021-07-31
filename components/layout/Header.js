import React, { useEffect } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaHome } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/actions/userActions'
import { signOut } from 'next-auth/client'
import { Nav, Button } from 'react-bootstrap'

const Header = () => {
    const checkLogin = () => {
        toast.error('User needs to have a varified account to create articles');
    }
    const dispatch = useDispatch()
    const { user, loading } = useSelector(state => state.loadedUser)

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const logoutHandler = () => {
        signOut();
    }
    return (
        <>
            <ToastContainer />
            <header className={styles.header}>
                <div className={styles.logo}>
                    {/* <Link href='/'>
                    <a>CARE FOR YOU</a>
                </Link> */}
                    <Link href='/'>
                        <a>
                            <FaHome />
                        </a>
                    </Link>
                    {user ? (
                        <Link href='/articles/add'>
                            <a>
                                CREATE NEW ARTICLE
                            </a>
                        </Link>
                    ) : (
                        <Link href=''>
                            <a onClick={checkLogin}>
                                CREATE NEW ARTICLE
                            </a>
                        </Link>
                    )}
                    {/* <Link href='/'>
                        <a>
                            SUPPORT
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            REVIEW
                        </a>
                    </Link> */}
                </div>

                <nav className="navbar navbar-expand-md">
                    {user ? (
                        <div className="ml-4 dropdown d-line">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link href='/me'>
                                        <a
                                            className="nav-link cursor-pointer justify-content-evenly">
                                            <img width="45" height="45" style={{ marginRight: 8, border: "1px solid black" }} src={user.avatar ? user.avatar.url : "/images/default_avatar.jpg"} alt={user && user.name} className="rounded-circle" />
                                            {user && user.fullname.toUpperCase()}
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/'>
                                        <a style={{ color: 'whitesmoke' }} className="nav-link btn-dark btn-icon" onClick={logoutHandler}>
                                            <FaSignOutAlt /> LOGOUT
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) :
                        !loading && <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href='/account/register'>
                                    <a className="nav-link">
                                        REGISTER
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/account/login'>
                                    <a style={{ color: 'whitesmoke' }} className="nav-link btn-dark btn-icon">
                                        <FaSignInAlt /> LOGIN
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    }
                </nav>
            </header >
        </>

    )
}

export default Header