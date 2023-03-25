import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { getUserDetails, clearErrors } from '@/redux/actions/userActions'
import Image from 'next/image';

const ViewProfile = () => {
    
    const router = useRouter()
    const userId = router.query.id;

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [university, setUniversity] = useState('')
    const [license_no, setLicense_no] = useState('')
    const [dept_doc, setDept_doc] = useState('')
    const [reference_no, setReference_no] = useState('')

    const dispatch = useDispatch()

    const { error } = useSelector(state => state.user)
    const { user, loading } = useSelector(state => state.userDetails)
    
    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setFullname(user?.fullname)
            setUsername(user?.username)
            setEmail(user?.email)
            setRole(user?.role)
            setGender(user?.gender)
            setPhone(user?.phone)
            setLicense_no(user?.license_no)
            setUniversity(user?.university)
            setDept_doc(user?.dept_doc)
            setReference_no(user?.reference_no)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, userId, user, error])

    return (
        <>
            {loading ? <Loader /> :
                <form className="container" style={{ marginTop: 40 }}>
                    {user?.role === 'doctor' ? (
                        <>
                    <div className="row mb-3">
                        <div className="col">
                            <h3 style={{ textAlign: 'center' }}>View {role?.charAt(0)?.toUpperCase() + role?.slice(1)} Info:</h3>
                        </div>
                    </div>
                    <figure className='avatar mr-3 item-rtl'>
                            <div
                                className="rounded-circle"
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            >
                                <Image
                                    width={150} height={150}
                                    src={user?.avatar?.url || "/images/default_avatar.jpg"}
                                    className='rounded-circle'
                                    alt='Profile Photo'
                                />
                            </div>

                    </figure>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="UserName">Username: </label>
                            <input type="text" id="UserName" className="form-control" name="username" value={username} readOnly disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="emailId">Email: </label>
                            <input type="text" id="emailId" className="form-control" name="email"
                                value={email} readOnly disabled />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="fName">Full Name: </label>
                            <input id="fName" type="text" className="form-control" name="fullname" value={fullname} readOnly disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="userRole">Role: </label>
                            <input id="role" type="text" className="form-control" name="role" value={role} readOnly disabled />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="gender">Gender: </label>
                            <input id="gender" type="text" className="form-control" name="gender" value={gender !== 'Gender' ? gender : ''} readOnly />
                        </div>
                        <div className="col">
                            <label htmlFor="phone_number">Phone Number:</label>
                            <input id="phone_number" type="number" className="form-control" name="phone" value={phone} readOnly disabled />
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="lcNo">License No:</label>
                            <input id="lcNo" type="text" className="form-control" name="license_no"
                                value={license_no} readOnly disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="uni">Graduating University:</label>
                            <input id="uni" type="text" className="form-control" name="university" value={university !== 'Uni' ? university : ''} readOnly disabled />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="refNo">Reference ID:</label>
                            <input id="refNo" type="text" className="form-control" name="reference_no"
                                value={reference_no !== '(Separated by comma)' ? reference_no : ''}
                            readOnly disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="dept_doc">Medical Department:</label>
                            <input id="dept_doc" type="text" className="form-control" name="dept_doc"
                                value={dept_doc !== 'dept' ? dept_doc : ''} readOnly disabled />
                        </div>
                        {/* <div className="col">
                            <label htmlFor="fileUpload">Credentials/Certificates:</label>
                            <input id="fileUpload" name="credential" type="file" className="form-control" multiple />
                        </div> */}
                    </div>
                    </>
                    ) :
                        <h3 style={{ textAlign: 'center', color: 'red' }}>You are not authorized to see other users Info!</h3>
                    }
                    {/* <button type="submit" style={{ width: '100%' }} className="btn btn-danger">UPDATE</button> */}
                </form>
            }
        </>
    )
}

export default ViewProfile
