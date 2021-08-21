import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, clearErrors } from '@/redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from '@/redux/constants/userConstants'
import Link from 'next/link'
// import Image from 'next/image'

const EditProfile = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [user, setUser] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        dateofbirth: '',
        gender: '',
        city: '',
        country: '',
        zip: '',
        phone: '',
        university: '',
        license_no: '',
        dept_doc: '',
        reference_no: ''
    })
    const { fullname, username, email, password, dateofbirth, gender, city, country, zip, phone, university, license_no, dept_doc, reference_no } = user
    const [credential, setCredential] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');
    const { user: loadedUser, loading } = useSelector(state => state.loadedUser)
    const { error, isUpdated, loading: updateLoading } = useSelector(state => state.user)
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {

        if (loadedUser) {
            setUser({
                fullname: loadedUser.fullname,
                username: loadedUser.username,
                email: loadedUser.email,
                dateofbirth: loadedUser.dateofbirth,
                gender: loadedUser.gender,
                city: loadedUser.city,
                country: loadedUser.country,
                zip: loadedUser.zip,
                phone: loadedUser.phone,
                license_no: loadedUser.license_no,
                university: loadedUser.university,
                dept_doc: loadedUser.dept_doc,
                reference_no: loadedUser.reference_no,
            })
            setAvatarPreview(avatarPreview)
        }
        if (isUpdated) {
            router.push('/')
            dispatch({ type: UPDATE_PROFILE_RESET })
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, isUpdated, error, loadedUser])


    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            fullname, email, password, avatar, dateofbirth, gender, city, country, zip, phone, license_no, university, dept_doc, reference_no
        }

        dispatch(updateProfile(userData))
    }

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        else if (e.target.name === 'credential') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCredential(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
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
                            <input type="text" id="UserName" className="form-control" placeholder="Username" value={username}
                                disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="emailId">Email: </label>
                            <input type="text" id="emailId" className="form-control" placeholder="Email" name="email"
                                onChange={onChange} value={email} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="fName">Full Name: </label>
                            <input id="fName" type="text" className="form-control" placeholder="firstname" name="fullname"
                                onChange={onChange} value={fullname} />
                        </div>
                        <div className="col">
                            <div className='form-group'>
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
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="gender">Gender: </label>
                            <select value={gender} onChange={onChange} className="form-control" name="gender" id="gender">
                                <option value="Gender" disabled></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="dob">Date Of Birth:</label>
                            <input id="dob" type="date" className="form-control" placeholder="Date of Birth" name="dateofbirth"
                                onChange={onChange} value={JSON.stringify(dateofbirth).substr(1, 10) !== '1000-12-09' ? JSON.stringify(dateofbirth).substr(1, 10) : ''}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="countryInfo">Country:</label>
                            <input id="countryInfo" type="text" className="form-control" name="country" placeholder="Country"
                                onChange={onChange} value={country !== 'Country' ? country : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="cityInfo">City:</label>
                            <input id="cityInfo" type="text" className="form-control" name="city" placeholder="City"
                                onChange={onChange} value={city !== 'City' ? city : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="zipId">Zip:</label>
                            <input id="zipId" type="text" className="form-control" name="zip" placeholder="Zip"
                                onChange={onChange} value={zip !== 'zip' ? zip : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="phone_number">Phone Number:</label>
                            <input id="phone_number" type="number" className="form-control" name="phone" placeholder="Phone Number"
                                onChange={onChange} value={phone} />
                        </div>
                    </div>
                    <h6>Please Fill up rest of the fields if you are a Doctor:</h6>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="lcNo">License No:</label>
                            <input id="lcNo" type="text" className="form-control" placeholder="License No" name="license_no"
                                onChange={onChange} value={license_no} />
                        </div>
                        <div className="col">
                            <label htmlFor="uni">Graduating University:</label>
                            <input id="uni" type="text" className="form-control" name="university" placeholder="Graduating University"
                                onChange={onChange} value={university !== 'Uni' ? university : ''} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="refNo">Reference ID:</label>
                            <input id="refNo" type="text" className="form-control" placeholder="Applicable if you want to register as a doctor" name="reference_no"
                                onChange={onChange} value={reference_no}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="dept_doc">Medical Department:</label>
                            <input id="dept_doc" type="text" className="form-control" name="dept_doc"
                                onChange={onChange} value={dept_doc !== 'dept' ? dept_doc : ''} />
                        </div>
                        <div className="col">
                            <label htmlFor="fileUpload">Credentials/Certificates:</label>
                            <input id="fileUpload" name="credential" type="file" className="form-control" multiple />
                        </div>
                    </div>

                    <button type="submit" style={{ width: '100%' }} className="btn btn-danger" disabled={updateLoading ? true : false} >{updateLoading ? <ButtonLoader /> : 'UPDATE'} </button>
                </form>
            }
        </>
    )
}

export default EditProfile
