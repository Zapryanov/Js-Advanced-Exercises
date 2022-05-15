import PricesList from "../../components/prices/prices-list";
import { getWaxing } from "../../data";

function WaxingPage(props) {
    const { men, women } = props.prices;

    return (
        <div>
            <h1>Кола Маска</h1>
            <article>
                <section>
                    <h2>Жени</h2>
                    <PricesList prices={women}/>
                </section>
                <section>
                    <h2>Мъже</h2>
                    <PricesList prices={men} />
                </section>
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    const manAndWomenPrices = await getWaxing();

    return {
        props: {
            prices: manAndWomenPrices
        }
    }
}

export default WaxingPage;