import styles from "./prices-item.module.css";

function PricesItem(props) {
    const { id, part, price } = props;

    return (
        <li key={id} className={styles["li-price-item"]}>
            <span className={styles.part}>{part}</span>
            <span className={styles.price}>{price} лв</span>
        </li>
    )
}

export default PricesItem;