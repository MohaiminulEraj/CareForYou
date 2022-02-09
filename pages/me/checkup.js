import React from 'react'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const checkup = () => {
    return (
        <ProfileLayout title="My Profile">
            <h2>Working on Checkup</h2>
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

export default checkup