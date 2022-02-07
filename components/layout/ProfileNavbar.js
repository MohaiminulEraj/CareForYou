import React from 'react'
import { FaHome } from 'react-icons/fa'
// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
// import { loadUser } from '@/redux/actions/userActions'
// import { signOut } from 'next-auth/client'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const ProfileNavbar = () => {
    // const dispatch = useDispatch()
    const { user, loading } = useSelector(state => state.loadedUser)

    // useEffect(() => {
    //     dispatch(loadUser())
    // }, [dispatch])

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {/* <Nav className="me-auto" activeKey={location.pathname}>
                                {user && user.role === 'doctor' && (
                                    <Nav.Link href="/me"><FaHome /></Nav.Link>)
                                }
                                <NavDropdown title="PUBLICATIONS" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/me/publications/pending-articles">Pending Articles</NavDropdown.Item>
                                    <NavDropdown.Item href="/me/publications/approved-articles">Approved Articles</NavDropdown.Item>
                                    <NavDropdown.Item href="/me/publications/revised-articles">Revised Articles</NavDropdown.Item>

                                </NavDropdown>
                                <Nav.Link href="/me/diagnosticReports">
                                    <a>DIAGNOSTIC REPORTS</a>
                                </Nav.Link>
                                <Nav.Link href="/me/prescriptions">PRESCRIPTION</Nav.Link>
                                {user && user.role === 'doctor' && (
                                    <Nav.Link href="/me/checkup">CHECK UP</Nav.Link>)
                                }
                                <Nav.Link href="/me/consultant">CONSULTANT</Nav.Link>
                            </Nav> */}

                            <Nav className="me-auto" activeKey={location.pathname}>
                                {user && user.role === 'doctor' && (
                                    <Link href='/me/'>
                                        <a className="mt-1">
                                            <FaHome size={30} />
                                        </a>
                                    </Link>
                                )}
                                <NavDropdown title="PUBLICATIONS" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link href='/me/publications/pending-articles'>
                                            <a>
                                                PENDING ARTICLE
                                            </a>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link href='/me/publications/approved-articles'>
                                            <a>
                                                APPROVED ARTICLE
                                            </a>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link href='/me/publications/revised-articles'>
                                            <a>
                                                REVISE ARTICLE
                                            </a>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link href='/me/publications/draft-articles'>
                                            <a>
                                                DRAFT ARTICLE
                                            </a>
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {user && user.role === 'doctor' && (
                                    <Link href="/me/checkup">
                                        <a className="mt-2">CHECK UP</a>
                                    </Link>)
                                }
                                {/* <Link href="/me/diagnosticReports">
                                    <a className="mt-2">DIAGNOSTIC REPORTS</a>
                                </Link>
                                <Link href="/me/prescriptions">
                                    <a className="mt-2">PRESCRIPTION</a>
                                </Link> 
                                <Link href='/me/consultant'>
                                    <a>
                                        MEET DOCTOR
                                    </a>
                                </Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </>

    )
}

export default ProfileNavbar