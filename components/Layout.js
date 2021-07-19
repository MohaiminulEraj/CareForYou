import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/Layout.module.css'


export default function Layout({ title, description, keywords, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <div className="container-fluid mt-4">
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Care For You',
    description: 'A website that provides verified articles to stop fake news from spreading and a platform where patients can set appointments and talk to specialists to diagnose their health problems.',
    keywords: 'health, care, online medication, care for you'
}