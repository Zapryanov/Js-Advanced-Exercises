import PricesItem from "./prices-item";
import styles from "./prices-list.module.css";

function PricesList(props) {
    const { prices } = props;
    const data = Object.entries(prices);

    console.log("Prices --- ", prices)
    data.map((human, id) => console.log("human: ", human, " / id: ", id))

    return (
        <ul className={styles["wrap-women-ul"]}>
            { data.map((human, id) => (
                <PricesItem 
                    id={id}
                    key={id}
                    part={human[0]}
                    price={human[1]}
                />
                )) }
        </ul>
    )
}

export default PricesList;