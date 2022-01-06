import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../layout/Loader'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import ProfileNavbar from '../layout/ProfileNavbar'
import Image from 'next/image';

const MyProfile = () => {
    const { user, loading } = useSelector(state => state.loadedUser)


    return (
        <>
            {loading ? <Loader /> :
                <div className="row">
                    <div className="col-md-2">
                        <figure className='avatar mr-3 item-rtl'>
                            <div className="rounded-circle">
                                <Image
                                    width={150} height={150}
                                    src={user?.avatar?.url || "/images/default_avatar.jpg"}
                                    className='rounded-circle'
                                    alt='Profile Photo'
                                />
                            </div>

                        </figure>
                        <h6 className="mx-4">{user && user.fullname}</h6>
                        <Link href='/me/update'>
                            <button className="btn btn-warning mx-4 mb-2">Edit Profile</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <fieldset>About</fieldset>
                    </div>
                    <div className="col-md-5">
                        <fieldset>Advises</fieldset>
                    </div>
                    <ProfileNavbar />
                </div>
            }
        </>
    )
}

export default MyProfile
