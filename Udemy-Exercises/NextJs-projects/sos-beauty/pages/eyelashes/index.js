import Head from "next/head";
import dynamic from "next/dynamic";

import { getEyelashes } from "../../data";

const DynamicPriceList = dynamic(() => import("../../components/prices/prices-list"));

function Eyelashes(props) {
    const { eyelashes } = props;
    return (
        <article>
            <Head>
                <title>Миглопластика | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Миглопластика - поставяне на мигли в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h2 className="pageHeading">Миглопластика</h2>
            <section className="wrap-price-list">
                <DynamicPriceList prices={eyelashes}/>
            </section>
        </article>
    )
}

export async function getStaticProps() {
    const eyelashes = await getEyelashes();

    if (!eyelashes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            eyelashes
        },
        revalidate: 1800
    }
}

export default Eyelashes;