import Image from "next/image";
import { getPromotions } from "../../data";

import styles from "./index.module.css";

function PromotionsPage(props) {
    if (props.promotions) {
        const { descriptionMain, descriptionDiscount, image, priceDiscounted, priceRegular } = props.promotions;
        return (
            <div className={styles["wrapper-promotions"]}>
                <h1 className="pageHeading">Промоции</h1>
                <div className={styles["text-background"]}>
                    <p>-% Промоции -%</p>
                </div>
                <section className={styles["section-promotions"]}>
                    <h3>Гел лак</h3>
                    <article>
                        <div className={styles["wrap-image-promotions"]}>
                            <Image className={styles["image"]} width={330} height={220} src={image} alt="image-promotions" />
                        </div>
                        <div className={styles["wrap-text-promotions"]}>
                            <p className={styles["descriptionMain"]}>{descriptionMain}</p>
                            <p className={styles["descriptionDiscount"]}>{descriptionDiscount}</p>
                            <p className={styles["priceRegular"]}>{priceRegular}</p>
                            <span className={styles["priceDiscounted"]}>{priceDiscounted}</span>
                        </div>
                    </article>
                </section>
            </div>
        )
    } else {
        return (
            <div className={styles["wrapper-promotions"]}>
                <h1 className="pageHeading">Промоции</h1>
                <div className={styles["text-background"]}>
                    <p>-% Промоции -%</p>
                </div>
                <section className={styles["section-promotions"]}>
                    <h3>Няма активна промоция!!!</h3>
                </section>
            </div>
        )
    }
}

export async function getServerSideProps() {
    const promotionsObject = await getPromotions();
     return {
         props: {
             promotions: promotionsObject
         }
     }
}

export default PromotionsPage;