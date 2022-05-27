import Image from "next/image";

import { getCosmeticsAboutUs, getManicureAboutUs, getWaxingAboutUs } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const manicureImages = props.manicurePictures;
    const waxingImages = props.waxingPictures;
    const cosmeticsImages = props.cosmeticsPictures;

    return (
        <div>
            <h1 className="pageHeading">За нас</h1>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <p>
                        Всяка жена е перфектна такава, каквато е. Салон за красота &rdquo;S.0.S Beauty&rdquo; е тук, 
                        за да ви помогнем да подобрите естествената си красота и увереност. Салонът е специализиран в изкуството 
                        на маникюр, педикюр, ноктопластика, кола маска, козметични процедури за лице, и миглопластика.
                    </p>
                </article>
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-text"]}>
                        <h4>Маникюр, Педикюр, Ноктопластика</h4>
                        <p>
                            &rdquo;S.O.S Beauty&rdquo; е вдъхновяващ салон за красота, където може да се поглезите. Едни от услугите в които 
                            сме специализирани са ноктопластика, поставяне на гел лак, педикюр. Изберете от широк спектър, от ярки и живи цветове за нокти, 
                            които ще блестят и ще се открояват от тълпата. Ако искате да отделите малко време за себе си в комбинация с 
                            професионално обслужване и топла атмосфера, тук е вашето място за разкрасяване, заповядайте!
                        </p>
                    </div>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {manicureImages.map((image, i) => 
                                <li className={styles["current-image"]} key={i}>
                                    <Image className="img" width={200} height={150} src={image} alt="nails" />
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {waxingImages.map((image, i) => 
                                <li className={styles["current-image"]} key={i}>
                                    <Image className="img" width={200} height={150} src={image} alt="nails" />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles["wrap-text"]}>
                        <h4>Кола Маска</h4>
                        <p>
                            Кола маската е сравнително достъпен и средно дълготраен метод за епилация. Ефекта на гладката кожа остава за
                            около 2-3 седмици. При редовни процедури космите стават по-редки, по-меки и по-светли на цвят, 
                            следователно по-малко забележими между процедурите.
                        </p>
                    </div>
                </article>
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-text"]}>
                        <h4>Козметика</h4>
                        <p>
                            DR Renaud e френска професионална козметика, създадена от д-р Луи Реймънд Рьоно през 1946г. 
                            Козметичната марка Dr Renaud е пионер в натуралната козметика. 
                            Внимателно селектирани растения, научни изследвания на свойствата им и ценни патенти за биотехнологични 
                            разработки водят до създаване на високоефективни козметични продукти с натурални съставки. Основните активни 
                            съставки на всяка серия са със сертифициран органичен произход.
                        </p>
                    </div>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {cosmeticsImages.map((image, i) => 
                                <li className={styles["current-image"]} key={i}>
                                    <Image className={`${styles["about-us-image"]} img`} width={200} height={150} src={image} alt="nails" />
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    const manicure = await getManicureAboutUs();
    const waxing = await getWaxingAboutUs();
    const cosmetics = await getCosmeticsAboutUs();

    return {
        props: {
            manicurePictures: manicure,
            waxingPictures: waxing,
            cosmeticsPictures: cosmetics
        }
    }
}

export default About;