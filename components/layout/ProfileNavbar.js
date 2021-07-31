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
                    {/* <Link href='/'>
                        <a>
                            <FaHome />
                        </a>
                    </Link> */}
                    <Link href='#'>
                        <a>
                            PUBLICATIONS
                        </a>
                    </Link>
                    <Link href='#'>
                        <a>
                            DIAGNOSTIC REPORTS
                        </a>
                    </Link>
                    <Link href='#'>
                        <a>
                            PRESCRIPTION
                        </a>
                    </Link>
                    <Link href='#'>
                        <a>
                            CONSULTANT
                        </a>
                    </Link>
                </div>
            </header >
        </>

    )
}

export default ProfileNavbar