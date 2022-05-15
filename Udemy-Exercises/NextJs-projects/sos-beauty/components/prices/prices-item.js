function PricesItem(props) {
    const { id, part, price } = props;

    return (
        <li key={id}>
            <span>{part}</span>
            <span>{price}</span>
        </li>
    )
}

export default PricesItem;