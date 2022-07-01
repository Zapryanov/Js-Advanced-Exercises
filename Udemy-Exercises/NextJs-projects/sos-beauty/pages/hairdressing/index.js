import PricesList from "../../components/prices/prices-list";
import { getHairdressing } from "../../data";

function Hairdressing(props) {
    const { hairdressing } = props;
    console.log(hairdressing)
    return (
        <div>
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