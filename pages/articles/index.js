import Home from '@/components/Home'
import Layout from '@/components/layout/Layout'

import { getPublishedArticles } from '@/redux/actions/articleActions'

import { wrapper } from '@/redux/store'

export default function Index() {
    return (
        <Layout>
            <Home />
        </Layout>
    )
}


// export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
//     await store.dispatch(getPublishedArticles(req, query.page, query.location))
// })

// function articlePage() {
//     return (
//         <div>
//             <h1>Article Page</h1>
//         </div>
//     )
// }

