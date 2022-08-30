import Head from "next/head";
import PricesList from "../../components/prices/prices-list";
import { getHairdressing } from "../../data";

function Hairdressing(props) {
    const { hairdressing } = props;

    return (
        <div>
            <Head>
                <title>Фризьорство | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Фризьорство, подстригване (мъжко, дамско, детско), прически в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h2 className="pageHeading">Фризьорство</h2>
            <article className="wrap-price-list">
                <PricesList prices={hairdressing} />
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const hairdressing = await getHairdressing();

    return {
        props: {
            hairdressing
        }
    }
}

export default Hairdressing;