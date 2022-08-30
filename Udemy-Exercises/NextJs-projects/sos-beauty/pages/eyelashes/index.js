import Head from "next/head";

import PricesList from "../../components/prices/prices-list";
import { getEyelashes } from "../../data";

function Pedicure(props) {
    const { eyelashes } = props;
    return (
        <div>
            <Head>
                <title>Миглопластика | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Миглопластика - поставяне на мигли в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h2 className="pageHeading">Миглопластика</h2>
            <article className="wrap-price-list">
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