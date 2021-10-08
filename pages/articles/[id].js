import React from 'react'
import { getSession } from 'next-auth/client'

import ViewArticle from '@/components/article/ViewArticle'
import Layout from '@/components/layout/Layout'

const ViewArticlePage = () => {
    return (
        <Layout title='View Article'>
            <ViewArticle />
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

export default ViewArticlePage
