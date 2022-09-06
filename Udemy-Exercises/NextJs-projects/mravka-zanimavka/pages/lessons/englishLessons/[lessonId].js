import { useRouter } from "next/router";

import loadable from "@loadable/component";

import { getAllEnglishLessons, getCurrentEnglishLesson } from "../../../data/getData";
import CurrentLessonComponent from "../../../components/lessons/current-lesson-component";

const LoadableComponent = loadable(() => import("../../../components/loadable-sanitize"));

function CurrentEnglishLesson(props) {
    const { lesson } = props;
    const router = useRouter();

    function goBack() {
        router.push("/lessons/englishLessons")
    }

    if (!lesson) {
        return (
            <h1>Loading current Lesson...</h1>
        )
    }

    return (
        <CurrentLessonComponent 
            language={lesson.language} 
            title={lesson.title} 
            image={lesson.image} 
            cleanText={<LoadableComponent text={lesson.text}/>} 
            goBackFunc={goBack} 
        />
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

export default CurrentEnglishLesson;