import Link from "next/link";
import { getCosmeticServiceById, getCosmeticsIds } from "../../data";
import styles from "./[cosmeticId].module.css";

function CurrentCosmeticService(props) {

    const currentService = props.currentCosmeticService;

    if (!currentService) {
        return <h1>Няма намерена такава услуга!</h1>
    }

    return (
        <div>
            <h1>Заглавие: {currentService.titleBig}</h1>
            <div>Main Description</div>
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
        }
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