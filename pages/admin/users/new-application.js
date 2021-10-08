import React from 'react'
import { getSession } from 'next-auth/client'

import Application from '@/components/admin/Application'
import Layout from '@/components/layout/Layout'

const AllUsersPage = () => {
    return (
        <Layout title='Profile Upgradation Request'>
            <Application />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session || session.user.role !== 'admin') {
        return {
            redirect: {
                destination: '/account/login',
                permanent: false
            }
        }
    }

    return {
        props: { }
    }

}

export default AllUsersPage
