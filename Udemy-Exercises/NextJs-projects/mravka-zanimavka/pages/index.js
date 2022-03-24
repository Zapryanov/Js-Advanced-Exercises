import Image from "next/image";
import BigButton from "../components/big-button";
import styles from "./index.module.css";

import { getAllChineseLessons, getAllEnglishLessons } from "../data/getData";
import Head from "next/head";

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
            <Head>
                <title>Мравка Занимавка</title>
                <meta name="description" content="Уроци по Китайски и Английски език за деца в град Пловдив" />
            </Head>
            <h1>За Мравка Занимавка</h1>
            <article className={`${styles.description} ${styles.one}`}>
                <div className={styles["wrap-img"]}>
                    <div className={styles.shadow}>
                        <Image width={1200} height={700} src="https://res.cloudinary.com/audipower/image/upload/v1647492745/learning-plan-min_tz8l5h.png" alt="concept" />
                    </div>
                </div>
                <p className={styles.text}>Заниманията са подходящи за деца на възраст 6-9 години и са с продължителност 90 минути.</p>
            </article>
            <article className={styles["gallery-wrapper"]}>
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
            </article>
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
        const allChineseLessons = await getAllChineseLessons();
        const lastThreeChineseLessons = allChineseLessons.slice(0, 3);

        const allEnglishLessons = await getAllEnglishLessons();
        const lastTwoEnglishLessons = allEnglishLessons.slice(0, 2);

        lastFive = lastThreeChineseLessons.concat(lastTwoEnglishLessons);
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