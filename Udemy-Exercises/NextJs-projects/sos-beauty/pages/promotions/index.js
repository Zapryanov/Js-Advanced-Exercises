import Image from "next/image";
import Head from "next/head";

import DOMPurify from 'isomorphic-dompurify';

import { getPromotions } from "../../data";

import styles from "./index.module.css";

function PromotionsPage(props) {
    const arr = props.promotions;
    
    if (arr) {
        return (
            <div className={styles["wrapper-promotions"]}>
                <Head>
                    <title>Промоции на S.O.S-Beauty</title>
                    <meta name="description" content="Промоции на козметични услуги, маникюр, педикюр, кола маска, микроблейдинг, миглопластика в Пловдив, Тракия" />
                </Head>
                <h2 className="pageHeading">Промоции</h2>
                <div className={styles["text-background"]}>
                    <p>-% Промоции -%</p>
                </div>
                <section className={styles["section-promotions"]}>
                    {arr.map((eachPromotion, i) => (
                        <div className={styles["each-promotion-wrapper"]} key={i}>
                            <h3>{eachPromotion.heading}</h3>
                            <article>
                                <div className={styles["wrap-image-promotions"]}>
                                    <Image className={styles["image"]} width={330} height={220} src={eachPromotion.image} alt="image-promotions" />
                                </div>
                                <div className={styles["wrap-text-promotions"]}>
                                    <p className={styles["descriptionMain"]} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(eachPromotion.descriptionMain, {ALLOWED_TAGS: ['b', 'i', 'em', 'br', 'span', 'strong', 'ul', 'ol', 'li']})}} />
                                    <p className={styles["descriptionDiscount"]}>{eachPromotion.descriptionDiscount}</p>
                                    <p className={styles["priceRegular"]} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(eachPromotion.priceRegular, {ALLOWED_TAGS: ['b', 'i', 'em', 'br', 'span', 'strong', 'ul', 'ol', 'li']})}} />
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
                <h2 className="pageHeading">Промоции</h2>
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