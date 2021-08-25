import React from 'react'
import { getSession } from 'next-auth/client'

import ReviseArticle from '@/components/article/ReviseArticle'
import Layout from '@/components/layout/Layout'

const ReviseArticlePage = () => {
    return (
        <Layout title='View Article'>
            <ReviseArticle />
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

export default ReviseArticlePage
