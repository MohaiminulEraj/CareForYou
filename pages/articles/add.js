import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/client'
import AddNewArticle from '@/components/article/AddNewArticle'

export default function AddArticlePage() {

    return (
        <Layout title='Create New Article'>
            <AddNewArticle />
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