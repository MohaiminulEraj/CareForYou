import React from 'react'
import MyProfile from '@/components/user/MyProfile'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const myProfilePage = () => {
    return (
        <ProfileLayout title="Prescriptions">
            <h2>Prescriptions</h2>
        </ProfileLayout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: "/account/login",
                permanent: false
            }
        }
    }
    return {
        props: { session }
    }
}

export default myProfilePage
