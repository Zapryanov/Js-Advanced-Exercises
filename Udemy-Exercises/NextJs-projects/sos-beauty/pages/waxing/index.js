import Head from "next/head";
import PricesList from "../../components/prices/prices-list";
import { getWaxing } from "../../data";

import styles from "./index.module.css";

function WaxingPage(props) {
    const { men, women } = props.prices;
    console.log(props.prices)

    return (
        <div>
            <Head>
                <title>Кола Маска | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Кола маска ръце, кола маска крака, кола маска мишници в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h1 className="pageHeading">Кола Маска</h1>
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

export async function getStaticProps() {
    const manAndWomenPrices = await getWaxing();

    if (!manAndWomenPrices) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            prices: manAndWomenPrices
        },
        revalidate: 1800
    }
}

export default WaxingPage;