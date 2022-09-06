import Head from 'next/head';

import { useState } from 'react';
import { Router } from 'next/router';

import '../styles/globals.css';

import Layout from '../components/layout/layout';
import Loading from '../components/loading';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  })

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  })
   
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {loading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
