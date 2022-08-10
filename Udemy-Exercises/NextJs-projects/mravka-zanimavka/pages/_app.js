import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { useState } from 'react';
import { Router } from 'next/router';
import Loading from '../components/loading';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  })

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  })
   
  return (
    <Layout logos={pageProps.mainPageImages}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {loading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
