import ServicesList from "../components/services/services-list"
import { getAllServices } from "../dummy-data"

function HomePage(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <ServicesList services={props.loadedServices} />
    </div>
  )
}

export async function getServerSideProps() {
  const allServices = await getAllServices();

  return {
    props: {
      loadedServices: allServices
    }
  }
}

export default HomePage
