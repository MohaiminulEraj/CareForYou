import React, { useEffect } from 'react'
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "mdbreact/dist/css/mdb.css";
import '@/styles/globals.css'
import { wrapper } from '../redux/store'
// import dbConnect from '@/config/dbConnect'

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   dbConnect()
  // }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> */}
        {/* <script src="https://kit.fontawesome.com/c939d0e917.js"></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
