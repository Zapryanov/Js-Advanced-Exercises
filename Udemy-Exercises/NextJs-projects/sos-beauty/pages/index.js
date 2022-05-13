import ServicesList from "../components/services/services-list";
// import { getAllServices } from "../dummy-data";
import Head from "next/head";
import { getMainHeadings } from "../data";

import styles from "./index.module.css";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>S.O.S Beauty - Салон за красота Пловдив</title>
        <meta name="description" content="Салон за красота. Маникюр, педикюр, ноктопластика, кола маска, козметика, почистване на лице, миглопластика" />
      </Head>
      <h1 className={styles.pageHeading}>Услуги</h1>
      <ServicesList services={props.loadedServices} />
    </div>
  )
}

export async function getServerSideProps() {
  // const allServices = await getAllServices();
  const mainHeadings = await getMainHeadings();
  return {
    props: {
      loadedServices: mainHeadings
    }
  }
}

export default HomePage
