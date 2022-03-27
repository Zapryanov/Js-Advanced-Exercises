import ServiceItem from "./service-item";

import styles from "./services-list.module.css";

function ServiceList(props) {
    const { services } = props;
    
    return (
        <ul className={styles["wrap-all-services"]}>
            { services.map((service) => (
                <ServiceItem 
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

export default ServiceList;