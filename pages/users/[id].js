import React from 'react'
import { getSession } from 'next-auth/client'

import ViewProfile from '@/components/user/ViewProfile'
import Layout from '@/components/layout/Layout'

const ViewProfilePage = () => {
    return (
        <Layout title='View User'>
            <ViewProfile />
        </Layout>
    )
}

// export async function getServerSideProps(context) {
//     const session = await getSession({ req: context.req });
//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/account/login",
//                 permanent: false
//             }
//         }
//     }
//     return {
//         props: { session }
//     }
// }

export default ViewProfilePage
