import PricesList from "../../components/prices/prices-list";
import { getWaxing } from "../../data";

import styles from "./index.module.css";

function WaxingPage(props) {
    const { men, women } = props.prices;

    return (
        <div>
            <h1 className={styles.pageHeading}>Кола Маска</h1>
            <article className={styles["wrap-women-and-men"]}>
                <section className={styles["section-human"]}>
                    <h2 className={styles["h2-waxing"]}>Жени</h2>
                    <PricesList prices={women}/>
                </section>
                <section className={styles["section-human"]}>
                    <h2 className={styles["h2-waxing"]}>Мъже</h2>
                    <PricesList prices={men} />
                </section>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const manAndWomenPrices = await getWaxing();

    return {
        props: {
            prices: manAndWomenPrices
        }
    }
}

export default WaxingPage;