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
    const { user, loading } = useSelector(state => state.auth)

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
                    <Link href='/'>
                        <a>
                            SUPPORT
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            REVIEW
                        </a>
                    </Link>
                </div>

                <nav className="navbar navbar-expand-md">
                    {user ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href='#'>
                                    <a className="nav-link cursor-pointer justify-content-evenly" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img width="45" height="45" style={{ marginRight: 8, border: "1px solid black" }} src={user.avatar ? user.avatar.url : "/images/default_avatar.jpg"} alt={user && user.name} className="rounded-circle" />
                                        {user && user.fullname.toUpperCase()}
                                    </a>
                                </Link>
                                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="dropdown-item">Action</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a className="dropdown-item">Another action</a>
                                            </Link>
                                        </li>
                                        <div className="dropdown-divider"></div>
                                        <li>
                                            <Link href="#">
                                                <a className="dropdown-item">Something else here</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <ul className="dropdown-menu">
                                    <li>
                                        <Link href="#">
                                            <a className="dropdown-item" href="#">My Profile</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="dropdown-item" href="#"> Edit Profile</a>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link href='/account/register'>
                                    <a className="nav-link">
                                        {user && user.fullname.toUpperCase()}
                                    </a>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link href='/'>
                                    <a style={{ color: 'whitesmoke' }} className="nav-link btn-dark btn-icon" onClick={logoutHandler}>
                                        <FaSignOutAlt /> LOGOUT
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        // <div className="ml-4 dropdown d-line">
                        //     <a className="btn dropdown-toggle mr-4" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        //         <figure className="avatar mr-3 item-rtl">
                        //             <img width="40" height="40" src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded-circle" />
                        //         </figure>
                        //         <span>{user && user.fullname}</span>
                        //     </a>
                        // </div>
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
                    {/* <ul className="navbar-nav mr-auto">
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
                    </ul> */}

                    {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div>
                                <Link href="/about">
                                    <a className="nav-link">About</a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div> */}

                </nav>
            </header >
        </>
        // <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         {/* <Link href="/">
        //             <a className="navbar-brand">GyanBlog</a>
        //         </Link> */}
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon">dropdown</span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarsExample07XL">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <Link href="/">
        //                         <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link href="/articles">
        //                         <a className="nav-link">Articles</a>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link href="/write">
        //                         <a className="nav-link">Write</a>
        //                     </Link>
        //                 </li>
        //             </ul>
        //             <ul className="navbar-nav px-3">
        //                 <li className="nav-item text-nowrap">
        //                     <Button className="nav-link">
        //                         Signup
        //                     </Button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </Nav>
    )
}

export default Header