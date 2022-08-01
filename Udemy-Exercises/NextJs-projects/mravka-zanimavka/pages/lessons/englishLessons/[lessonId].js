import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEnglishLessons, getCurrentEnglishLesson } from "../../../data/getData";

import sanitizeHtml from 'sanitize-html';

import styles from "../index.module.css";

function CurrentLesson(props) {
    const router = useRouter();
    const { lesson } = props;

    function goBack() {
        router.push("/lessons/englishLessons")
    }

    if (!lesson) {
        return (
            <h1>Loading current Lesson...</h1>
        )
    }

    const clean = sanitizeHtml(lesson.text, {
        allowedTags: [ 'br', 'b', 'i', 'em', 'span', 'strong', 'a', 'p', 'div', 'h1', 'h2', 'h3', 'ul', 'li' ],
        allowedAttributes: {
          'a': [ 'href' ]
        },
        selfClosing: [ 'br', 'hr', 'link' ]
    });

    return (
        <Fragment>
            <Head>
                <title>{lesson.title}</title>
                <meta name="description" content={`Урок по английски за деца в Пловдив, на тема - ${lesson.title}`} />
            </Head>
            <div className={styles["wrap-current-lesson"]}>
                <h3 className={styles["width-line"]}>{lesson.title}</h3>
                <div className={`${styles["width-line"]} ${styles["wrap-image"]}`}>
                    <Image className={`${styles["image-lesson"]} ${styles["box-shadow"]}`} width={1200} height={800} src={lesson.image} alt={lesson.title}/>
                </div>
                <div className={`${styles["width-line"]} ${styles.text}`} dangerouslySetInnerHTML={{__html: clean}} />
                <div className={styles["wrap-buttons"]}>
                    <button className={styles["btn-lesson"]} onClick={goBack}>Go back</button>
                </div>
            </div>
        </Fragment>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const lessonId = params.lessonId;

    const currentLesson = await getCurrentEnglishLesson(lessonId);

    if (!currentLesson) {
        return { notFound: true }
    }

    return {
        props: {
            lesson: currentLesson
        },
        revalidate: 1800
    }
}

export async function getStaticPaths() {
    const data = await getAllEnglishLessons();
    const ids = data.map(lesson => lesson.id);

    const pathsWithParams = ids.map(id => ({ params: { lessonId: id } }))

    return {
        paths: pathsWithParams,
        fallback: "blocking"
    }
}

export default CurrentLesson;