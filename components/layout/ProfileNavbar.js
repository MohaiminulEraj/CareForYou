import React, { useEffect } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaHome, FaBell } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/actions/userActions'
import { signOut } from 'next-auth/client'
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
                            <Nav className="me-auto" activeKey={location.pathname}>
                                {user && user.role === 'doctor' && (
                                    <Nav.Link href="/me"><FaHome /></Nav.Link>)
                                }
                                <NavDropdown title="PUBLICATIONS" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/me/publications/pending-articles">Pending Articles</NavDropdown.Item>
                                    <NavDropdown.Item href="/me/publications/approved-articles">Approved Articles</NavDropdown.Item>
                                    <NavDropdown.Item href="/me/publications/revised-articles">Revised Articles</NavDropdown.Item>
                                    {/* <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                                <Nav.Link href="/me/diagnosticReports">
                                    <a>DIAGNOSTIC REPORTS</a>
                                </Nav.Link>
                                <Nav.Link href="/me/prescriptions">PRESCRIPTION</Nav.Link>
                                {user && user.role === 'doctor' && (
                                    <Nav.Link href="/me/checkup">CHECK UP</Nav.Link>)
                                }
                                <Nav.Link href="/me/consultant">CONSULTANT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        {/* <Link href='/me/'>
                            <a>
                                <FaHome />
                            </a>
                        </Link>
                        <Link href='/me/publications'>
                            <a>
                                PUBLICATIONS
                            </a>
                        </Link>
                        <Link href='/me/diagnosticReports'>
                            <a>
                                DIAGNOSTIC REPORTS
                            </a>
                        </Link>
                        <Link href='/me/prescriptions'>
                            <a>
                                PRESCRIPTION
                            </a>
                        </Link>
                        <Link href='/me/consultant'>
                            <a>
                                CONSULTANT
                            </a>
                        </Link> */}
                    </Navbar>
                </div>
            </header>
        </>

    )
}

export default ProfileNavbar