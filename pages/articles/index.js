import Home from '@/components/Home'
import Layout from '@/components/layout/Layout'

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


