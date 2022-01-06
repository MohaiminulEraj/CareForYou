import React from 'react'
import MyProfile from '@/components/user/MyProfile'
import DraftArticles from '@/components/article/publications/DraftArticles'
import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/client'

const draftArticles = () => {
    return (
        <Layout title="Draft Articles">
            <MyProfile />
            <DraftArticles />
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

export default draftArticles
