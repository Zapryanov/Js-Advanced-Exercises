import Image from "next/image";

import { getCosmeticsAboutUs, getEyelashesAboutUs, getManicureAboutUs, getMicrobladingAboutUs, getWaxingAboutUs } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const manicureImages = props.manicurePictures;
    const waxingImages = props.waxingPictures;
    const cosmeticsImages = props.cosmeticsPictures;
    const eyelashesImages = props.eyelashesPictures;
    const microbladingImages = props.microbladingPictures;

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
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {eyelashesImages.map((image, i) => 
                                <li className={styles["current-image"]} key={i}>
                                    <Image className="img" width={200} height={150} src={image} alt="nails" />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles["wrap-text"]}>
                        <h4>Миглопластика</h4>
                        <p>
                            Класическото удължаване на миглите включва прилагане на 1 отделна кашмирена мигла върху всяка отделна естествена мигла. 
                            Това създава вид на фина добавена дължина и обем. Класическите мигли са идеални, ако предпочитате леки естествено изглеждащи мигли.
                            При руския обем изкуствените мигли са ултра фини, меки и пухкави, те са супер леки и осигуряват пълен обемен вид, 
                            нанесени по няколко на всяка отделна естествена мигла. Могат да се направят да изглеждат естествени или в пълен блясък, 
                            в зависимост от естествените ви мигли и вида, който искате да създадете. За класическите мигли, времето което отнема за поставянето
                            е около час и половина, а за руския обем около 2 часа. Така че, може да си поспите съвсем спокойно докато трае процедурата :) .
                            Трайността на положените мигли е около 2-3 седмици, понеже толкова е жизнения цикъл на естествените ви мигли и съответно, когато
                            падне една такава естествена, с нея пада и залепената изкуствена. Препоръката е на 2-3 седмици да се прави поддръжка по запълване на падналите мигли.
                        </p>
                    </div>
                </article>
                <article className={styles["wrap-text-and-images"]}>
                    <div className={styles["wrap-text"]}>
                        <h4>Микроблейдинг</h4>
                        <p>
                            Всеки, който е запълвал веждите си със сенки и моливи, знае болката от сутрешния ритуал преди излизане. Микропигментацията може да промени
                            изцяло тази загуба на време. След навлизане на микроблейдинга хората могат да имат така желаните вежди, които не са имали по рождение. 
                            Процедурата трае около час-два, но си заслужава. След 4 до 6 седмици е нужно да се направи ретуш и ще имате перфектните вежди за следващата 
                            година и половина до две, в зависимост от кожата ви, понеже това е индивидуално при всеки тип кожа и пигментация.
                        </p>
                    </div>
                    <div className={styles["wrap-images"]}>
                        <ul className={styles["remove-space"]}>
                            {microbladingImages.map((image, i) => 
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
    const eyelashes = await getEyelashesAboutUs();
    const microblading = await getMicrobladingAboutUs();

    return {
        props: {
            manicurePictures: manicure,
            waxingPictures: waxing,
            cosmeticsPictures: cosmetics,
            eyelashesPictures: eyelashes,
            microbladingPictures: microblading
        }
    }
}

export default About;