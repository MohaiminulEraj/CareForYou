import React from 'react'
// import MyProfile from '@/components/user/MyProfile'
import PendingArticles from '@/components/article/publications/PendingArticles'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const pendingArticles = () => {
    return (
        <ProfileLayout title="Pending Articles">
            {/* <MyProfile /> */}
            <PendingArticles />
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

export default pendingArticles
