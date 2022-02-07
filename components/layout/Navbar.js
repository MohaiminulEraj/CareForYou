import React, { useState } from 'react';
import { FaTimes, FaBars, FaHome, FaCaretDown } from 'react-icons/fa'
// import { ButtonLoader } from './ButtonLoader';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import '@/styles/Navbar.module.css';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { user, loading } = useSelector(state => state.loadedUser)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                {/* {user && user.role === 'doctor' && (
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <FaHome />
                    </Link>
                )} */}
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {user && user.role === 'doctor' && (
                        <li className='nav-item'>
                            <Link href='/'>
                                <a className='nav-links' onClick={closeMobileMenu}>
                                    <FaHome size={35} />
                                </a>
                            </Link>
                        </li>
                    )}

                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link>
                            <a className='nav-links'
                                onClick={closeMobileMenu}>
                                PUBLICATIONS <FaCaretDown />
                            </a>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    {/* <li className='nav-item'>
                        <Link
                            href='/me/diagnosticReports'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            DIAGNOSTIC REPORTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            href='/me/prescriptions'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            PRESCRIPTION
                        </Link>
                    </li>
                    {user && user.role === 'doctor' && (
                        <li>
                            <Link
                                href='/me/checkup'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                CHECK UP
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link
                            href='/me/consultant'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            CONSULTANT
                        </Link>
                    </li> */}
                </ul>
                {/* <ButtonLoader /> */}
            </nav>
        </>
    );
}

export default Navbar;
