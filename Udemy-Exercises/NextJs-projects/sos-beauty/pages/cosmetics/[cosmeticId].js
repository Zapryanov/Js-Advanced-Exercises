import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { getCosmeticServiceById, getCosmeticsIds } from "../../data";
import styles from "./[cosmeticId].module.css";

function CurrentCosmeticService(props) {

    const currentService = props.currentCosmeticService;
    const { titleBig, titleSmall, generalInfo, image, serviceDescription, price, typeOfOrigin } = currentService;

    if (!currentService) {
        return <h1>Няма намерена такава услуга!</h1>
    }

    return (
        <div>
            <Head>
                <title>{titleBig}</title>
                <meta name="description" content={`${titleBig} с френска професионална козметика в град Пловдив, Тракия.`} />
            </Head>
            <h2 className="pageHeading">{titleBig}</h2>
            <div className={styles["wrapper-current-cosmetic"]}>
                <div className={styles["wrap-headings"]}>
                    <span className={styles.center}>{typeOfOrigin}</span>
                    <h3>{titleSmall}</h3>
                </div>
                <div className={styles["wrap-image"]}>
                    <div className={styles["image-shadow"]}>
                        <Image width={450} height={300} src={image} alt={titleBig} />
                    </div>
                </div>
                <ul className={styles["ul-general-info"]}>
                    {generalInfo.map((sentence, i) => <li key={i} className={styles["li-general-info"]}>{sentence}</li>)}
                </ul>
                <ul className={styles["ul-service-description"]}>
                    {<li>Какво включва процедурата? :</li>}
                    {serviceDescription.map((sentence, i) => <li key={i}><span>&#10146;</span> {sentence}</li>)}
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