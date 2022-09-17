import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "./current-lesson-component.module.css";

function CurrentLessonComponent({language, title, image, cleanText, goBackFunc}) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`Урок по ${language} за деца в град Пловдив, на тема - ${title}`} />
            </Head>
            <article className={styles["wrap-current-lesson"]}>
                <h3 className={styles["width-line"]}>{title}</h3>
                <div className={`${styles["width-line"]} ${styles["wrap-image"]}`}>
                    <Image className={`${styles["image-lesson"]} ${styles["box-shadow"]}`} width={1200} height={800} src={image} alt={title}/>
                </div>
                <div className={`${styles["width-line"]} ${styles.text}`} dangerouslySetInnerHTML={{__html: cleanText.props.text}} />
                <div className={styles["wrap-buttons"]}>
                    <button className={styles["btn-lesson"]} onClick={goBackFunc}>Назад</button>
                </div>
            </article>
        </Fragment>
    )
}

export default CurrentLessonComponent;