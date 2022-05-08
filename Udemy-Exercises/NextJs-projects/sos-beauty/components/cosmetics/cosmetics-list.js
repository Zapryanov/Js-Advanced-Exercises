import CosmeticItem from "./cosmetics-item";

import styles from ".//cosmetics-list.module.css";

function CosmeticsList(props) {
    const { services } = props;
    
    return (
        <ul className={styles["wrap-all-cosmetics"]}>
            { services.map((service) => (
                <CosmeticItem 
                    key={service.id}
                    id={service.id}
                    titleBig={service.titleBig}
                    titleSmall={service.titleSmall}
                    image={service.image}
                />
            )) }
        </ul>
    )
}

export default CosmeticsList;