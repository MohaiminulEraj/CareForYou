import React, { useEffect } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaHome, FaBell } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/actions/userActions'
import { signOut } from 'next-auth/client'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Image from 'next/image';

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
                    <Nav className="navbar navbar-expand-md">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href='/'>
                                    <a style={{ "fontSize": "2rem;" }}>
                                        <FaHome />
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {user && user.role !== 'admin' ? (
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
                                {user?.role === 'admin' && (
                                    <Link href='/admin/users/new-application'>
                                        <a>
                                            APPLICATION
                                        </a>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </Nav>

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

                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="navbar navbar-expand-md">
                            {user ? (
                                <div className="ml-4 dropdown d-line">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link href={user?.role === 'user' ? '/me/publications/pending-articles' : '/me'}>
                                                {/* <a
                                            className="nav-link dropdown-toggle cursor-pointer justify-content-evenly"
                                            id="navbarDropdownMenuLink"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        > */}

                                                <a className={styles.logo}>
                                                    {/* <img width="45" height="45" style={{ marginRight: 8, border: "1px solid black" }} src={user?.avatar?.url || "/images/default_avatar.jpg"} alt={user?.name} className="rounded-circle" /> */}
                                                    {/* <div className="rounded-circle"> */}
                                                    <Image width={45} height={45} style={{ marginRight: 8, border: "1px solid black" }} src={user?.avatar?.url || "/images/default_avatar.jpg"} alt={user?.name} className="rounded-circle" />

                                                    {/* </div> */}
                                                </a>

                                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul> */}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={user?.role === 'user' ? '/me/publications/pending-articles' : '/me'}>
                                                <a className={styles.logo}>
                                                    {user?.fullname.toUpperCase()}
                                                </a>
                                            </Link>
                                        </li>
                                        {/* {user && user.role == 'doctor' && (
                                    <li className="nav-item">
                                        <Link href='/me'>
                                            <a className={styles.logo}>
                                                <FaBell />
                                            </a>
                                        </Link>
                                    </li>)
                                } */}
                                        {user && user.role == 'admin' && (

                                            <li className="nav-item">
                                                <Link href='/admin/users'>
                                                    <a>
                                                        USERS
                                                    </a>
                                                </Link>
                                            </li>
                                        )}
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
                                            <a style={{ color: 'whitesmoke' }} className="nav-link btn-secondary btn-icon px-1 my-1">
                                                REGISTER
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='/account/login'>
                                            <a style={{ color: 'whitesmoke' }} className="nav-link btn-dark btn-icon px-2 my-1">
                                                <FaSignInAlt /> LOGIN
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header >
        </>

    )
}

export default Header