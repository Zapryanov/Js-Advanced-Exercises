import Image from "next/image";

import { getAboutUsInfo } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const mainInfo = props.aboutUsMainInfo;
    const brandsLogos = props.brands;
    const topCenterText = props.mainText;

    const objEntriesBrands = Object.entries(brandsLogos);
    const objEntriesMainInfo = Object.entries(mainInfo);

    return (
        <div>
            <h2 className="pageHeading">За нас</h2>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <div className={styles["main-description"]}>
                        <p>{topCenterText}</p>
                    </div>
                    <div className={styles["wrap-images-brands"]}>
                        {objEntriesBrands.map((eachBrand, i) => (
                            <div key={i}>
                                <Image width={eachBrand[1].width} height={eachBrand[1].height} src={eachBrand[1].image} alt={eachBrand[1].alt} />
                            </div>
                        ))}
                    </div>
                </article>
                {objEntriesMainInfo.map((eachService, i) => {
                    if (i % 2 === 0) {
                        return (
                            <article key={i} className={styles["wrap-text-and-images"]}>
                                <div className={styles["wrap-text"]}>
                                    <h4>{eachService[1].heading}</h4>
                                    <p>{eachService[1].description}</p>
                                </div>
                                <div className={styles["wrap-images"]}>
                                    <ul className={styles["remove-space"]}>
                                        {eachService[1].images.map((image, index) => 
                                            <li className={styles["current-image"]} key={index}>
                                                <Image className="img" width={200} height={150} src={image} alt="nails" />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </article>
                        )
                    } else {
                        return (
                            <article key={i} className={styles["wrap-text-and-images"]}>
                                <div className={styles["wrap-images"]}>
                                    <ul className={styles["remove-space"]}>
                                        {eachService[1].images.map((image, index) => 
                                            <li className={styles["current-image"]} key={index}>
                                                <Image className={styles.img} width={200} height={150} src={image} alt="nails" />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className={styles["wrap-text"]}>
                                    <h4>{eachService[1].heading}</h4>
                                    <p>{eachService[1].description}</p>
                                </div>
                            </article>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    const aboutUsInfo = await getAboutUsInfo();

    const infoMainServices = aboutUsInfo.infoServices;
    const brandsImages = aboutUsInfo.brands;
    const topText = aboutUsInfo.topText;

    return {
        props: {
            aboutUsMainInfo: infoMainServices,
            brands: brandsImages,
            mainText: topText
        }
    }
}

export default About;