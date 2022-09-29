import ServicesList from "../components/services/services-list";
import Head from "next/head";
import { getMainHeadings } from "../data";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>S.O.S Beauty - Салон за красота Пловдив</title>
        <meta name="description" content="Салон за красота. Маникюр, педикюр, ноктопластика, кола маска, козметика, почистване на лице, миглопластика" />
      </Head>
      <h1 className="pageHeading">Услуги</h1>
      <ServicesList services={props.loadedServices} />
    </div>
  )
}

export async function getStaticProps() {
  const mainHeadings = await getMainHeadings();
  return {
    props: {
      loadedServices: mainHeadings
    },
    revalidate: 1800
  }
}

export default HomePage
