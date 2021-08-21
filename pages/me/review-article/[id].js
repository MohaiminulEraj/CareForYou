import React from 'react'
import { getSession } from 'next-auth/client'

import ReviewArticle from '@/components/article/ReviewArticle'
import Layout from '@/components/layout/Layout'

const ReviewArticlePage = () => {
    return (
        <Layout title='Review Article'>
            <ReviewArticle />
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

export default ReviewArticlePage
