import Head from "next/head";

import CosmeticsList from "../../components/cosmetics/cosmetics-list";
import { getCosmeticService } from "../../data";

function CosmeticsPage(props) {
    return (
        <div>
            <Head>
                <title>S.O.S Beauty - Козметика</title>
                <meta name="description" content="Козметика за лице на френската професионална козметика DR-Renaud и на IROHA" />
            </Head>
            <h2 className="pageHeading">Козметика</h2>
            <CosmeticsList services={props.cosmetics} />
        </div>
    )
}

export async function getStaticProps() {
    const cosmeticsArray = await getCosmeticService();

    return {
        props: {
            cosmetics: cosmeticsArray
        },
        revalidate: 1800
    }
}

export default CosmeticsPage;