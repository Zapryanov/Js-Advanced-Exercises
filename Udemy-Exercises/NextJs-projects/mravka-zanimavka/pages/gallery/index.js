import Image from "next/image";
import BigButton from "../../components/big-button";
import { getAllLessons } from "../../data/getData";
import styles from "./index.module.css";

function GalleryPage(props) {
    const { lastFiveLessons } = props;

    function smallOrBig(i) {
        if (i < 3) {
            return "small-image";
        } else {
            return "big-image";
        }
    }

    return (
        <>
            <h1>Gallery Page</h1>
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
            <section className={`${styles.description} ${styles.three}`}>
                <BigButton />
            </section>
        </>
    )
}

export async function getServerSideProps() {
    let lastFive = [];
    try {
        const allLessons = await getAllLessons();
        lastFive = allLessons.filter((lesson, i) => {
        if (i < 5) {
            return lesson;
        }
    })
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            lastFiveLessons: lastFive
        }
    }
}

export default GalleryPage;