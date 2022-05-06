import CosmeticItem from "./cosmetics-item";

import styles from ".//cosmetics-list.module.css";

function CosmeticsList(props) {
    const { services } = props;
    
    return (
        <ul className={styles["wrap-all-cosmetics"]}>
            { services.map((service, id) => (
                <CosmeticItem 
                    key={id}
                    id={id}
                    titleBig={service.titleBig}
                    titleSmall={service.titleSmall}
                    image={service.image}
                    price={service.price}
                    generalInfo={service.generalInfo}
                    serviceDescription={service.serviceDescription}
                />
            )) }
        </ul>
    )
}

export default CosmeticsList;