import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

import loadable from "@loadable/component";

import { getAllChineseLessons, getCurrentChineseLesson } from "../../../data/getData";
import CurrentLessonComponent from "../../../components/lessons/current-lesson-component";

// const DynamicSanitizeComponent = dynamic(() => import("../../../components/dynamic-sanitize"));

const LoadableComponent = loadable(() => import("../../../components/loadable-sanitize"));

function CurrentChineseLesson(props) {
    const { lesson } = props;
    const router = useRouter();

    function goBack() {
        router.push("/lessons/chineseLessons")
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

    const currentLesson = await getCurrentChineseLesson(lessonId);

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
    const data = await getAllChineseLessons();
    const ids = data.map(lesson => lesson.id);

    const pathsWithParams = ids.map(id => ({ params: { lessonId: id } }))

    return {
        paths: pathsWithParams,
        fallback: "blocking"
    }
}

export default CurrentChineseLesson;