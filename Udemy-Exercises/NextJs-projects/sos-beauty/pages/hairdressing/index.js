import Head from "next/head";
import PricesList from "../../components/prices/prices-list";
import { getHairdressing } from "../../data";

function Hairdressing(props) {
    const { hairdressing } = props;

    return (
        <article>
            <Head>
                <title>Фризьорство | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Фризьорство, подстригване (мъжко, дамско, детско), прически в Пловдив, Тракия, до Акваленд" />
            </Head>
            <h2 className="pageHeading">Фризьорство</h2>
            <section className="wrap-price-list">
                <PricesList prices={hairdressing} />
            </section>
        </article>
    )
}

export async function getServerSideProps() {
    const hairdressing = await getHairdressing();

    if (!hairdressing) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            hairdressing
        }
    }
}

export default Hairdressing;