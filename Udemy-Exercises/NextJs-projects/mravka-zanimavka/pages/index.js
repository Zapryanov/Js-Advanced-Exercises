import Image from "next/image";
import Link from "next/link";
import BigButton from "../components/big-button";
import styles from "./index.module.css";

import { getAllChineseLessons } from "../data/getData";

function HomePage(props) {
    const { lastFiveLessons } = props;

    function smallOrBig(i) {
        if (i < 3) {
            return "small-image";
        } else {
            return "big-image";
        }
    }

    return (
        <div className={styles["wrap-home-page"]}>
            <h1>За Мравка Занимавка</h1>
            <article className={`${styles.description} ${styles.one}`}>
                <p className={styles.text}>С Мравка Занимавка децата се докосват до китайския език и култура.</p>
                <div className={styles["wrap-img"]}>
                    <div className={styles.shadow}>
                        <Image width={1200} height={700} src="https://res.cloudinary.com/audipower/image/upload/v1643362851/learning-plan_dmilxo.png" alt="concept" />
                    </div>
                </div>
                <p className={styles.text}>Заниманията са подходящи за деца на възраст 6-9 години и са с продължителност 90 минути.</p>
            </article>
            <section className={styles["gallery-wrapper"]}>
                <div className={styles["wrap-gallery-images"]}>
                    <ul>
                        {lastFiveLessons.map((lesson, i) => (
                            <li key={lesson.id} className={styles[smallOrBig(i)]}>
                                <Image width={450} height={300} src={lesson.image} alt="gallery-image" />    
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles["gallery-text-container"]}>
                    <p className={styles.text}>
                        <span className={styles.bold}>Ученето чрез творчество</span> използва детското 
                        <span className={styles.bold}> въображение</span>, което от своя страна:
                    </p>
                    <ul>
                        <li>
                            <div>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644776882/red-heart_emcwxg.png" alt="heart" />
                            </div>
                            <p>
                                Подобрява <span className={styles.bold}>концентрацията</span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644776882/red-heart_emcwxg.png" alt="heart" />
                            </div>
                            <p>
                                Улеснява създаването на <span className={styles.bold}>причинно-следствените връзки</span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644776882/red-heart_emcwxg.png" alt="heart" />
                            </div>
                            <p>
                                <span className={styles.bold}>Стимулира запаметяването</span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <Image width={20} height={20} src="https://res.cloudinary.com/audipower/image/upload/v1644776882/red-heart_emcwxg.png" alt="heart" />
                            </div>
                            <p>
                                <span className={styles.bold}>Развива старанието и упоритостта</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <article className={`${styles.description} ${styles.two}`}>
                <div className={styles["wrap-img"]}>
                    <div className={styles.shadow}>
                        <Image width={660} height={430} src="https://res.cloudinary.com/audipower/image/upload/v1643362513/chinese-letters-min_gl1xz2.png" alt="write" />
                    </div>
                </div>
                <div className={styles["wrap-text"]}>
                    <p>
                        Успоредно с изучаването на йероглифи и правилното произношение 
                        на новите думи, творческите дейности
                        свързани със сензорната памет са силно застъпени тук.
                    </p>
                    <p>Те играят важна роля в детското обучение и подпомагат паметта и концентрацията.</p>
                </div>
            </article>
            <article className={`${styles.description} ${styles.three}`}>
                <BigButton />
            </article>
        </div>
    )
}

export async function getServerSideProps() {
    let lastFive = [];
    try {
        const allLessons = await getAllChineseLessons();
        lastFive = allLessons.slice(allLessons.length-1 - 5);
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            lastFiveLessons: lastFive
        }
    }
}

export default HomePage;