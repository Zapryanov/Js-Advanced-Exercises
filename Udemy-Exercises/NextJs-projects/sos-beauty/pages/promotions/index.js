import Image from "next/image";
import { getPromotions } from "../../data";

import styles from "./index.module.css";

function PromotionsPage(props) {
    const arr = props.promotions;
    console.log(arr)
    if (arr) {
        // const { descriptionMain, descriptionDiscount, heading, image, priceDiscounted, priceRegular } = props.promotions;
        return (
            <div className={styles["wrapper-promotions"]}>
                <h1 className="pageHeading">Промоции</h1>
                <div className={styles["text-background"]}>
                    <p>-% Промоции -%</p>
                </div>
                <section className={styles["section-promotions"]}>
                    {arr.map((eachPromotion, i) => (
                        <div key={i}>
                            <h3>{eachPromotion.heading}</h3>
                            <article>
                                <div className={styles["wrap-image-promotions"]}>
                                    <Image className={styles["image"]} width={330} height={220} src={eachPromotion.image} alt="image-promotions" />
                                </div>
                                <div className={styles["wrap-text-promotions"]}>
                                    <p className={styles["descriptionMain"]}>{eachPromotion.descriptionMain}</p>
                                    <p className={styles["descriptionDiscount"]}>{eachPromotion.descriptionDiscount}</p>
                                    <p className={styles["priceRegular"]}>{eachPromotion.priceRegular}</p>
                                    <span className={styles["priceDiscounted"]}>{eachPromotion.priceDiscounted}</span>
                                </div>
                            </article>
                        </div>
                    ))}
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
                    <h3>Няма активна промоция!</h3>
                    <p>Очаквайте скоро интересни предложения!</p>
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