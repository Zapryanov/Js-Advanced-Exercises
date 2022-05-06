import CosmeticItem from "./cosmetics-item";

import styles from "../services/services-list.module.css";

function CosmeticsList(props) {
    const { services } = props;
    
    return (
        <ul className={styles["wrap-all-services"]}>
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