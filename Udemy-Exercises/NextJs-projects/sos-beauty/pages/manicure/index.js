import { getManicure } from "../../data";
import PricesList from "../../components/prices/prices-list";

import styles from "./index.module.css";

function Manicure(props) {
    const { manicure } = props;
    console.log(manicure);
    return (
        <div>
            <h1 className={styles.pageHeading}>Маникюр</h1>
            <article className={styles["wrap-price-list"]}>
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