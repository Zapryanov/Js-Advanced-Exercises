import Image from "next/image";
import styles from "./index.module.css";

import PricesList from "../../components/prices/prices-list";
import { getMicroblading } from "../../data";
import Head from "next/head";

function Microblading(props) {
    const microblading = props.microblading;

    return (
        <div>
            <Head>
                <title>Микроблейдинг | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Микроблейдинг за красиви вежди в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h1 className="pageHeading">Микроблейдинг</h1>
            <article className={styles["wrap-microblading"]}>
                <section className={styles["image-section"]}>
                    <div className={styles["wrap-image"]}>
                        <div className={styles["box-shadow-image"]}>
                            <Image className={styles["microblading-image"]} width={430} height={300} src={microblading.image} alt="microblading" />
                        </div>
                    </div>
                </section>
                <section className={styles["text-section"]}>
                    <h2>Описание</h2>
                    <p className={styles["wrap-text"]}>
                        {microblading.description}
                    </p>
                </section>
                <section className="wrap-price-list">
                    <PricesList prices={microblading.prices}/>
                </section>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const microbladingInfo = await getMicroblading();

    return {
        props: {
            microblading: microbladingInfo
        }
    }
}

export default Microblading;