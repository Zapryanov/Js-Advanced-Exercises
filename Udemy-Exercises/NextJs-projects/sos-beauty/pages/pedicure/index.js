import PricesList from "../../components/prices/prices-list";
import { getPedicure } from "../../data";

import styles from "./index.module.css";

function Pedicure(props) {
    const { pedicure } = props;
    return (
        <div>
            <h1 className={styles.pageHeading}>Педикюр</h1>
            <article className={styles["wrap-price-list"]}>
                <PricesList prices={pedicure}/>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const pedicure = await getPedicure();

    return {
        props: {
            pedicure
        }
    }
}

export default Pedicure;