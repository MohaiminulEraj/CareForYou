import React from 'react'
import Layout from './Layout'
import MyProfile from '@/components/user/MyProfile'

const ProfileLayout = ({ title, children }) => {
    return (
        <Layout title={title}>
            <MyProfile />
            <div className="container-fluid mt-4">
                {children}
            </div>
        </Layout>
    )
}

export default ProfileLayout