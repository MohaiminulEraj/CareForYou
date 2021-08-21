import React from 'react'
import MyProfile from '@/components/user/MyProfile'
import ApprovedArticle from '@/components/article/publications/ApprovedArticle'
import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/client'

const approvedArticles = () => {
    return (
        <Layout title="Approved Articles">
            <MyProfile />
            <ApprovedArticle />
        </Layout>
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
