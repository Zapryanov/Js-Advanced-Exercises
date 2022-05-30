import Image from "next/image";

import { getAboutUsInfo } from "../../data";
import styles from "./index.module.css";

function About(props) {
    const mainObj = props.aboutUs;

    const objEntries = Object.entries(mainObj);

    return (
        <div>
            <h1 className="pageHeading">За нас</h1>
            <section className={styles["wrapper"]}>
                <article className={styles["top-center"]}>
                    <p>
                        Всяка жена е перфектна такава, каквато е. Салон за красота &rdquo;S.0.S Beauty&rdquo; е тук, за да ви помогнем да 
                        подобрите естествената си красота и увереност. Салонът е специализиран в изкуството на маникюр, педикюр, ноктопластика, 
                        кола маска, козметични процедури за лице, миглопластика и микроблейдинг. Работим само с качествени професионални
                        продукти. Насладете са на вълшебството на красотата в стилна обстановка, приветлива атмосфера и професионализъм.
                    </p>
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
                                                <Image className="img" width={200} height={150} src={image} alt="nails" />
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