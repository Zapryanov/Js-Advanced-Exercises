import Link from "next/link";
import Image from "next/image";
import { getCosmeticServiceById, getCosmeticsIds } from "../../data";
import styles from "./[cosmeticId].module.css";

function CurrentCosmeticService(props) {

    const currentService = props.currentCosmeticService;
    const { titleBig, titleSmall, generalInfo, image, serviceDescription, price } = currentService;

    if (!currentService) {
        return <h1>Няма намерена такава услуга!</h1>
    }

    return (
        <div className={styles["wrapper-current-cosmetic"]}>
            <h2>Заглавие: {titleBig}</h2>
            <ul className={styles["ul-service-description"]}>
                {serviceDescription.map((sentence, i) => <li key={i}>{sentence}</li>)}
            </ul>
            <div className={styles["wrap-image"]}>
                <Image width={600} height={400} src={image} alt={titleBig} />
            </div>
            <ul className={styles["ul-general-info"]}>
                {generalInfo.map((sentence, i) => <li key={i} className={styles["li-general-info"]}>{sentence}</li>)}
            </ul>
            <div className={styles["wrap-price"]}>
                <span className={styles.price}>Цена: {price}лв</span>
            </div>
            <div className={styles["wrap-btn-cosmeticId"]}>
                <Link href={`/cosmetics`}>
                    <a className={styles["btn-cosmeticId"]}>Назад</a>
                </Link>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const cosmeticId = params.cosmeticId;

    const currentCosmeticService = await getCosmeticServiceById(cosmeticId);

    return {
        props: {
            currentCosmeticService
        },
        revalidate: 1800
    }
}

export async function getStaticPaths() {
    const ids = await getCosmeticsIds();
    const pathsWithParams = ids.map(id => ({ params: { cosmeticId: id } }));

    return {
        paths: pathsWithParams,
        fallback: "blocking"
    }
}

export default CurrentCosmeticService;