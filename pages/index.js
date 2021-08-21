import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Layout.module.css'
import Layout from '@/components/layout/Layout'
import Search from '@/components/Search'
// import { render } from 'react-dom';
// import FlashMessage from 'react-flash-message'
import AlertDoctor from '@/components/layout/AlertDoctor'
import { API_URL } from '@/config/index'
import { FaSearch } from 'react-icons/fa'
import { getArticles } from '@/redux/actions/articleActions'
import { wrapper } from '@/redux/store'

export default function Home() {
  return (
    <Layout className={styles.container}>
      <AlertDoctor />
      <div className={styles.description}>
        <Search />
      </div>
    </Layout>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
//   await store.dispatch(getArticles(req, query.page, query.location))
// })


// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/articles`)
//   const articles = await res.json()
//   return {
//     props: { articles },
//     revalidate: 1
//   }
// }
