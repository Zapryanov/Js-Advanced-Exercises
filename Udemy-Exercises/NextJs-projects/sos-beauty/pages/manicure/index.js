import { getManicure } from "../../data";
import PricesList from "../../components/prices/prices-list";
import Head from "next/head";

function Manicure(props) {
    const { manicure } = props;

    return (
        <article>
            <Head>
                <title>Маникюр | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Маникюр, гел лак, ноктопластика Nika Nagel, Termish в Пловдив, Тракия до Акваленд" />
            </Head>
            <h2 className="pageHeading">Маникюр</h2>
            <section className="wrap-price-list">
                <PricesList prices={manicure}/>
            </section>
        </article>
    )
}

export async function getStaticProps() {
    const manicure = await getManicure();

    if (!manicure) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            manicure
        },
        revalidate: 1800
    }
}

export default Manicure;