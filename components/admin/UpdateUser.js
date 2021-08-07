import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { updateUser, getUserDetails, clearErrors } from '@/redux/actions/userActions'
import { UPDATE_USER_RESET } from '@/redux/constants/userConstants'

const UpdateUser = () => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [university, setUniversity] = useState('')
    const [license_no, setLicense_no] = useState('')
    const [dept_doc, setDept_doc] = useState('')
    const [reference_no, setReference_no] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()

    const { error, isUpdated } = useSelector(state => state.user)
    const { user, loading } = useSelector(state => state.userDetails)

    const userId = router.query.id;
    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setFullname(user.fullname)
            setUsername(user.username)
            setEmail(user.email)
            setRole(user.role)
            setDateofbirth(user.dateofbirth)
            setGender(user.gender)
            setCity(user.city)
            setCountry(user.country)
            setZip(user.zip)
            setPhone(user.phone)
            setLicense_no(user.license_no)
            setUniversity(user.university)
            setDept_doc(user.dept_doc)
            setReference_no(user.reference_no)

        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/admin/users')
            dispatch({ type: UPDATE_USER_RESET })
        }

    }, [dispatch, isUpdated, userId, user, error])

    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            fullname, email, username, role, dateofbirth, gender, city, country, zip, phone, license_no, university, dept_doc, reference_no
        }

        dispatch(updateUser(user._id, userData))
    }

    return (
        <>
            {loading ? <Loader /> :
                <form className="container" style={{ marginTop: 40 }} onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <h3 style={{ textAlign: 'center' }}>Update User Info:</h3>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="UserName">Username: </label>
                            <input type="text" id="UserName" className="form-control" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        </div>
                        <div className="col">
                            <label htmlFor="emailId">Email: </label>
                            <input type="text" id="emailId" className="form-control" placeholder="Email" name="email"
                                onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="fName">Full Name: </label>
                            <input id="fName" type="text" className="form-control" placeholder="firstname" name="fullname"
                                onChange={(e) => setFullname(e.target.value)} value={fullname} />
                        </div>
                        <div className="col">
                            <label htmlFor="userRole">Role: </label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control" name="role" id="userRole">
                                <option value="user">User</option>
                                <option value="doctor">Doctor</option>
                                <option value="admin">Admin</option>
                            </select>
                            {/* <div className='form-group'>
                                <label htmlFor='avatar_upload'>Profile Photo</label>
                                <div className='d-flex'>
                                    <div>
                                        <figure className='avatar mr-3 item-rtl'>
                                            <img
                                                width="50" height="50"
                                                src={avatarPreview}
                                                className='rounded-circle'
                                                alt='image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='custom-file mt-2'>
                                        <input
                                            type='file'
                                            name='avatar'
                                            className='custom-file-input'
                                            id='customFile'
                                            accept='images/*'
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="gender">Gender: </label>
                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" name="gender" id="gender">
                                <option value="Gender" disabled></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="dob">Date Of Birth:</label>
                            <input id="dob" type="date" className="form-control" placeholder="Date of Birth" name="dateofbirth"
                                onChange={(e) => setDateofbirth(e.target.value)} value={JSON.stringify(dateofbirth).substr(1, 10) !== '1000-12-09' ? JSON.stringify(dateofbirth).substr(1, 10) : ''}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="countryInfo">Country:</label>
                            <input id="countryInfo" type="text" className="form-control" name="country" placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)} value={country !== 'Country' ? country : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="cityInfo">City:</label>
                            <input id="cityInfo" type="text" className="form-control" name="city" placeholder="City"
                                onChange={(e) => setCity(e.target.value)} value={city !== 'City' ? city : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="zipId">Zip:</label>
                            <input id="zipId" type="text" className="form-control" name="zip" placeholder="Zip"
                                onChange={(e) => setZip(e.target.value)} value={zip !== 'zip' ? zip : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="phone_number">Phone Number:</label>
                            <input id="phone_number" type="number" className="form-control" name="phone" placeholder="Phone Number"
                                onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                    </div>
                    <h6>Please Fill up rest of the fields if you are a Doctor:</h6>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="lcNo">License No:</label>
                            <input id="lcNo" type="text" className="form-control" placeholder="License No" name="license_no"
                                onChange={(e) => setLicense_no(e.target.value)} value={license_no} />
                        </div>
                        <div className="col">
                            <label htmlFor="uni">Graduating University:</label>
                            <input id="uni" type="text" className="form-control" name="university" placeholder="Graduating University"
                                onChange={(e) => setUniversity(e.target.value)} value={university !== 'Uni' ? university : ''} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="refNo">Reference ID:</label>
                            <input id="refNo" type="text" className="form-control" placeholder="Applicable if you want to register as a doctor" name="reference_no"
                                onChange={(e) => setReference_no(e.target.value)} value={reference_no !== '(Separated by comma)' ? reference_no : ''}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="dept_doc">Medical Department:</label>
                            <input id="dept_doc" type="text" className="form-control" name="dept_doc"
                                onChange={(e) => setDept_doc(e.target.value)} value={dept_doc !== 'dept' ? dept_doc : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="fileUpload">Credentials/Certificates:</label>
                            <input id="fileUpload" name="credential" type="file" className="form-control" multiple />
                        </div>
                    </div>

                    <button type="submit" style={{ width: '100%' }} className="btn btn-danger">UPDATE</button>
                </form>
            }
        </>
    )
}

export default UpdateUser
