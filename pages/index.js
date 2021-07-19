import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Layout.module.css'
import Layout from '@/components/Layout'
import Search from '@/components/Search'
import { API_URL } from '@/config/index'
import { FaSearch } from 'react-icons/fa'

export default function Home({ articles }) {
  return (
    <Layout className={styles.container}>
      {/* <h2>Care For You</h2> */}
      <div className={styles.description}>
        <Search />
      </div>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/articles`)
//   const articles = await res.json()
//   return {
//     props: { articles },
//     revalidate: 1
//   }
// }
