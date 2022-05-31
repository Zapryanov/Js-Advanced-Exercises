import Image from "next/image";

import styles from "./index.module.css";

function PromotionsPage() {
    return (
        <div className={styles["wrapper-promotions"]}>
            <h1 className="pageHeading">Промоции</h1>
            <div className={styles["text-background"]}>
                <p>-% Промоции -%</p>
            </div>
            <section className={styles["section-promotions"]}>
                <article>
                    <div className={styles["wrap-image-promotions"]}>
                        {/* <Image width={450} height={300} src={} alt="image-promotions" /> */}
                    </div>
                    <div className={styles["wrap-text-promotions"]}>
                        <p>
                            Уважаеми клиенти, тази седмица от 30.05 до 05.06 включително, предлагаме на промоция с намаление поставяне на гел лак. 
                            Материалите са на немската марка Nika Nagel. Nika Nagel е вече много години еталон за високо качество 
                            и безопастност за здравето на естествените нокти.
                        </p>
                        <p>28% отстъпка</p>
                        <p>При редовна цена от 35лв, сега може да се възползвате само за <span>25лв</span>!</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default PromotionsPage;