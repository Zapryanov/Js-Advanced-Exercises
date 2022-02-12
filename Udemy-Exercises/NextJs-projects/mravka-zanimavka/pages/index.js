import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

function HomePage() {
    return (
        <div>
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
            <article className={`${styles.description} ${styles.two}`}>
                <div className={styles["wrap-img"]}>
                    <div className={styles.shadow}>
                        <Image width={600} height={400} src="https://res.cloudinary.com/audipower/image/upload/v1643362513/chinese-letters-min_gl1xz2.png" alt="write" />
                    </div>
                </div>
                <div className={styles["wrap-text"]}>
                    <p>
                        Успоредно с изучаването на йероглифи и правилното произношение на новите думи, 
                        <Link href="/gallery">
                            <a  className={styles["link-gallery"]}>
                                творческите дейности
                            </a>
                        </Link>, 
                        свързани със сензорната памет са силно застъпени тук.
                    </p>
                    <p>Те играят важна роля в детското обучение и подпомагат паметта и концентрацията.</p>
                </div>
            </article>
            <article className={`${styles.description} ${styles.three}`}>
                <div>
                    <a href="https://www.facebook.com/MravkaZanimavka">
                        <Image width={1200} height={200} src="https://res.cloudinary.com/audipower/image/upload/v1643362891/save-lesson_izgw4s.png" alt="link-facebook" />
                    </a>
                </div>
            </article>
        </div>
    )
}

export default HomePage;