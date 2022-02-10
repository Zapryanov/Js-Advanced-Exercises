import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import UserContext from '../store/user-context'
import { useEffect, useState } from 'react'
import { useAuth } from '../firebase/initFirebase';

function MyApp({ Component, pageProps }) {
  const currentUser = useAuth();
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    if (user) {
    setLoggedIn(true)
    setUser(user)
  }
}

  const logOut = () => {
    setLoggedIn(false)
    setUser(null)
  }

  useEffect(()=> {
    if (currentUser) {
      const { uid, email, accessToken} = currentUser;
      setLoggedIn(true)
      setUser({ uid, email, accessToken})
    }
  }, [currentUser])
   
  return (
    <Layout>
      <UserContext.Provider value={{
                loggedIn,
                user,
                logIn,
                logOut
            }}>

      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  )
}

export default MyApp
