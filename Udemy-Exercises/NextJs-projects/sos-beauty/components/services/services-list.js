import ServiceItem from "./service-item";

function ServiceList(props) {
    const { services } = props;
    
    return (
        <ul>
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