import PricesList from "../../components/prices/prices-list";
import { getEyelashes } from "../../data";

import styles from "./index.module.css";

function Pedicure(props) {
    const { eyelashes } = props;
    return (
        <div>
            <h1 className={styles.pageHeading}>Миглопластика</h1>
            <article className={styles["wrap-price-list"]}>
                <PricesList prices={eyelashes}/>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const eyelashes = await getEyelashes();

    return {
        props: {
            eyelashes
        }
    }
}

export default Pedicure;