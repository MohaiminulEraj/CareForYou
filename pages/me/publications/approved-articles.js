import React from 'react'
// import MyProfile from '@/components/user/MyProfile'
import ApprovedArticle from '@/components/article/publications/ApprovedArticle'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const approvedArticles = () => {
    return (
        <ProfileLayout title="Approved Articles">
            {/* <MyProfile /> */}
            <ApprovedArticle />
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

export default approvedArticles
