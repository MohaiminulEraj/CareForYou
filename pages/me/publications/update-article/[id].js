import React from 'react'
import { getSession } from 'next-auth/client'

import UpdateArticle from '@/components/article/UpdateArticle'
import Layout from '@/components/layout/Layout'

const UpdateArticlePage = () => {
    return (
        <Layout title='Update Article'>
            <UpdateArticle />
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

export default UpdateArticlePage
