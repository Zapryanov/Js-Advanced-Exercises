import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import { getAllEnglishLessons, getCurrentEnglishLesson } from "../../../data/getData";
import UserContext from "../../../store/user-context";

import sanitizeHtml from 'sanitize-html';

import styles from "./[lessonId].module.css";

function CurrentLesson(props) {
    const userContext = useContext(UserContext)
    const { loggedIn, user } = userContext
    const router = useRouter();
    const { lesson } = props;

    function goBack() {
        router.push("/lessons/englishLessons")
    }
    
    const idToDelete = lesson.id;
    
    function deleteLesson() {
        fetch(`${process.env.databaseURL}/${process.env.currentDatabase}/${process.env.currentEnglishDatabase}/${idToDelete}.json?auth=${user?.accessToken}`, {
                method: "DELETE"
            })
            .then(response =>{ 
                console.log(response);
                if (!response.ok) {
                    throw new error('Error')
                }
                response.json()})
            .then(data => {
                router.push("/lessons/englishLessons");
            })
            .catch(error => console.error(error))
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
                <meta name="description" content={`Урок по английски за деца в Пловдив. ${lesson.text}`} />
            </Head>
            <div className={styles["wrap-current-lesson"]}>
                <h3 className={styles["width-line"]}>{lesson.title}</h3>
                <div className={`${styles["width-line"]} ${styles["wrap-image"]}`}>
                    <Image className={`${styles["image-lesson"]} ${styles["box-shadow"]}`} width={1200} height={750} src={lesson.image} alt={lesson.title}/>
                </div>
                <p className={`${styles["width-line"]} ${styles.text}`} dangerouslySetInnerHTML={{__html: clean}}></p>
                <div className={styles["wrap-buttons"]}>
                    <button className={styles["btn-lesson"]} onClick={goBack}>Go back</button>
                    {loggedIn && <button className={`${styles["btn-lesson"]} ${styles.delete}`} onClick={deleteLesson}>Delete</button>}
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