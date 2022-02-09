import React from 'react'
// import MyProfile from '@/components/user/MyProfile'
import RevisedArticle from '@/components/article/publications/RevisedArticle'
import ProfileLayout from '@/components/layout/ProfileLayout'
import { getSession } from 'next-auth/client'

const revisedArticles = () => {
    return (
        <ProfileLayout title="Revised Articles">
            {/* <MyProfile /> */}
            <RevisedArticle />
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

export default revisedArticles
