import { useRouter } from "next/router";

function TypeOfCosmeticService() {
    const router = useRouter();
    const urlName = router.query.cosmeticId;
    const pathName = router.pathname;
    console.log(`The name of the url - ${urlName}`);
    console.log(`The pathName: ${pathName}`);

    return (
        <div>
            <h1>Заглавие: {urlName}</h1>
        </div>
    )
}

export default TypeOfCosmeticService;