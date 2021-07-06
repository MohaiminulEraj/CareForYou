import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Layout.module.css'
import Layout from '@/components/Layout'
import Search from '@/components/Search'

export default function Home() {
  return (
    <Layout className={styles.container}>
      {/* <h2>Care For You</h2> */}
      <div className={styles.description}>
        <Search />
      </div>
    </Layout>

    /* <div className="container">
      <form action="" method="GET" autoComplete="on">
        <div className="input-group col-12">
          <input maxLength="2048" id="" className="form-control searchForm" type="text" placeholder="Search by Disease" aria-label="Search" name="disease" />
          <div className="input-group-append">
            <button className="input-group-text" id="basic-text1" type="submit">
              <i className="fas fa-search text-grey" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
      <form action="" method="GET" autoComplete="on">
        <div className="input-group col-12" >
          <input id="" className="form-control searchForm" type="text" placeholder="Search by Symptoms" aria-label="Search" name="symptoms" />
          <div className="input-group-append">
            <button className="input-group-text" id="basic-text2" type="submit">
              <i className="fas fa-search text-grey" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div> */

  )
}
