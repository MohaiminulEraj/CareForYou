import React from 'react'
import MyProfile from '@/components/user/MyProfile'
import Publications from '@/components/article/Publications'
import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/client'

const myProfilePage = () => {
    return (
        <Layout title="Publications">
            <MyProfile />
            <Publications />
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

export default myProfilePage
