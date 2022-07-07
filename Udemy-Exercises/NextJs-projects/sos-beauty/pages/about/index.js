import Image from "next/image";

import { getAboutUsInfo } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const mainObj = props.aboutUs;

    const objEntries = Object.entries(mainObj);

    return (
        <div>
            <h2 className="pageHeading">За нас</h2>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <div className={styles["main-description"]}>
                        <p>
                            Всяка жена е перфектна такава, каквато е. Салон за красота &rdquo;S.0.S Beauty&rdquo; е тук, за да ви помогнем да 
                            подобрите естествената си красота и увереност. Салонът е специализиран в изкуството на маникюр, педикюр, ноктопластика, 
                            кола маска, козметични процедури за лице, миглопластика и микроблейдинг. Работим само с качествени професионални
                            продукти. Насладете са на вълшебството на красотата в стилна обстановка, приветлива атмосфера и професионализъм.
                        </p>
                    </div>
                    <div className={styles["wrap-images-brands"]}>
                        <div>
                            <Image width={100} height={100} src="https://res.cloudinary.com/audipower/image/upload/v1657142705/nika-nagel-logo-original_qhptoi.png" alt="nika-nagel-logo" />
                        </div>
                        <div>
                            <Image width={300} height={100} src="https://res.cloudinary.com/audipower/image/upload/v1657143061/iroha-logo-min_pfwpfc.png" alt="iroha-logo" />
                        </div>
                        <div>
                            <Image width={240} height={100} src="https://res.cloudinary.com/audipower/image/upload/v1657204745/dr-renaud-rectangle-logo-min_jsyxsz.png" alt="iroha-logo" />
                        </div>
                        {/* <div className={styles["wrapper-dr-renaud-logo"]}>
                            <div className={styles["dr-renaud-logo"]}>
                                <div className={styles["blue-circle"]}>DR</div>
                                <div className={styles["name"]}>Renaud</div>
                            </div>
                        </div> */}
                        <div>
                            <Image width={150} height={100} src="https://res.cloudinary.com/audipower/image/upload/v1657142097/termish-logo-min_nwvvit.png" alt="termish-logo" />
                        </div>
                    </div>
                </article>
                {objEntries.map((eachService, i) => {
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

    return {
        props: {
            aboutUs: aboutUsInfo
        }
    }
}

export default About;