import Head from "next/head";

import PricesList from "../../components/prices/prices-list";
import { getPedicure } from "../../data";

function Pedicure(props) {
    const { pedicure } = props;
    return (
        <article>
            <Head>
                <title>Педикюр | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Педикюр с лак или гел лак в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h2 className="pageHeading">Педикюр</h2>
            <section className="wrap-price-list">
                <PricesList prices={pedicure}/>
            </section>
        </article>
    )
}

export async function getStaticProps() {
    const pedicure = await getPedicure();

    if (!pedicure) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            pedicure
        },
        revalidate: 1800
    }
}

export default Pedicure;