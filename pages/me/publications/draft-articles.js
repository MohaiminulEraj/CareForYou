import React from 'react'
// import MyProfile from '@/components/user/MyProfile'
import DraftArticles from '@/components/article/publications/DraftArticles'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const draftArticles = () => {
    return (
        <ProfileLayout title="Draft Articles">
            {/* <MyProfile /> */}
            <DraftArticles />
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

export default draftArticles
