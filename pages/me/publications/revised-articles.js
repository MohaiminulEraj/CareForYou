import React from 'react'
import MyProfile from '@/components/user/MyProfile'
import RevisedArticle from '@/components/article/publications/RevisedArticle'
import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/client'

const revisedArticles = () => {
    return (
        <Layout title="Revised Articles">
            <MyProfile />
            <RevisedArticle />
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

export default revisedArticles
