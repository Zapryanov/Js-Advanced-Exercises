import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEnglishLessons, getCurrentEnglishLesson } from "../../../data/getData";

import sanitizeHtml from 'sanitize-html';

import CurrentLessonComponent from "../../../components/lessons/current-lesson-component";


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
            <CurrentLessonComponent 
                language={lesson.language} 
                title={lesson.title} 
                image={lesson.image} 
                cleanText={clean} 
                goBackFunc={goBack} 
            />
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