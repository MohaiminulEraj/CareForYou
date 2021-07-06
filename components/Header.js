import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>CARE FOR YOU</a>
                </Link>
            </div>

            <navbar className="navbar navbar-expand-md">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href='/articles/add'>
                            <a className="nav-link">
                                CREATE NEW ARTICLE
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/account/register'>
                            <a className="nav-link">
                                REGISTER
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/account/login'>
                            <a className="nav-link btn-secondary btn-icon">
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
            </navbar>
        </header>
    )
}
