import ServiceItem from "./service-item";

import styles from "./services-list.module.css";

function ServiceList(props) {
    const { services } = props;
    
    return (
        <ul className={styles["wrap-all-services"]}>
            { services.map((service, id) => (
                <ServiceItem 
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

export default ServiceList;