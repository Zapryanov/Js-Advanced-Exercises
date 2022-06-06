import { getManicure } from "../../data";
import PricesList from "../../components/prices/prices-list";

import styles from "./index.module.css";

function Manicure(props) {
    const { manicure } = props;
    console.log(manicure);
    return (
        <div>
            <h2 className="pageHeading">Маникюр</h2>
            <article className="wrap-price-list">
                <PricesList prices={manicure}/>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const manicure = await getManicure();

    return {
        props: {
            manicure
        }
    }
}

export default Manicure;