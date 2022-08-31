import Head from "next/head";
import Image from "next/image";

import { getAboutUsInfo } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const mainInfo = props.aboutUsMainInfo;
    const brandsLogos = props.brands;
    const topCenterText = props.mainText;

    const realCosmetics = props.realCosmetics;
    const realCosmeticsArr = [];

    for (let key in realCosmetics) {
        const innerObject = realCosmetics[key];
        for (let key2 in innerObject) {
            realCosmeticsArr.push(innerObject[key2]);
        }
    }


    const objEntriesBrands = Object.entries(brandsLogos);
    const objEntriesMainInfo = Object.entries(mainInfo);

    return (
        <div>
            <Head>
                <title>За нас | салон за красота S.O.S-Beauty</title>
                <meta name="description" content="Маникюр, педикюр, ноктопластика, гел лак, кола маска, микроблейдинг, почистване и терапии за лице Пловдив, Тракия, до Акваленд" />
            </Head>
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
                    <div className={styles["wrap-images-of-products"]}>
                        {realCosmeticsArr.map((obj, i) => (
                            <div key={i} style={{margin: obj.margin}}>
                                <Image className={styles["image-of-product"]} src={obj.image} width={obj.width} height={obj.height} alt={obj.alt} />
                            </div>
                        ))}
                    </div>

                </article>
                {objEntriesMainInfo.map((eachService, i) => {
                    if (i % 2 === 0) {
                        return (
                            <article key={i} className={styles["wrap-text-and-images"]}>
                                <div className={styles["wrap-text"]}>
                                    <h2>{eachService[1].heading}</h2>
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
                                    <h2>{eachService[1].heading}</h2>
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
    const cosmeticsFromTheBrand = aboutUsInfo.cosmeticsFromTheBrand;

    return {
        props: {
            aboutUsMainInfo: infoMainServices,
            brands: brandsImages,
            mainText: topText,
            realCosmetics: cosmeticsFromTheBrand
        }
    }
}

export default About;