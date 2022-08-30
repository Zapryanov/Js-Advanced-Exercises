import { getManicure } from "../../data";
import PricesList from "../../components/prices/prices-list";
import Head from "next/head";

function Manicure(props) {
    const { manicure } = props;

    return (
        <div>
            <Head>
                <title>Маникюр | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Маникюр, гел лак, ноктопластика Nika Nagel, Termish в Пловдив, Тракия до Акваленд" />
            </Head>
            <h2 className="pageHeading">Маникюр</h2>
            <article className="wrap-price-list">
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