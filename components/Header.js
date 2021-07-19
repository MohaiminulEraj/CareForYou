import { FaSignInAlt, FaSignOutAlt, FaHome } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
    const checkLogin = () => {
        toast.error('User needs to have a varified account to create an article');
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
                    <Link href='/articles/add'>
                        <a onClick={checkLogin}>
                            CREATE NEW ARTICLE
                        </a>
                    </Link>
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

                    <ul className="navbar-nav mr-auto">
                        {/*  <li className="nav-item">
                        <Link href='/articles/add'>
                            <a className="nav-link">
                                CREATE NEW ARTICLE
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link">
                                SUPPORT
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link">
                                REVIEW
                            </a>
                        </Link>
                    </li> */}
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

                    {/* <ul>
                    <li>
                        <Link href='/'>Create an Article</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='/'>Login</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='/'>Sign Up</Link>
                    </li>
                </ul> */}
                </nav>
            </header >
        </>
    )
}
