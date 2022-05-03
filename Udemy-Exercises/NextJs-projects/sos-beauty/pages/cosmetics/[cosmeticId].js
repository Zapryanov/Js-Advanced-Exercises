import { useRouter } from "next/router";
import { getServiceById } from "../../data";

function TypeOfCosmeticService() {
    const router = useRouter();
    const serviceId = router.query.cosmeticId;
    const pathName = router.pathname;
    console.log(`The name of the url - ${serviceId}`);
    console.log(`The pathName: ${pathName}`);

    const currentEvent = getServiceById(serviceId);
    console.log(currentEvent);

    console.log("Id --- ", serviceId)

    // if (!currentEvent) {
    //     return <h1>Няма намерена такава услуга!</h1>
    // }

    return (
        <div>
            <h1>Заглавие: {serviceId}</h1>
        </div>
    )
}

export default TypeOfCosmeticService;