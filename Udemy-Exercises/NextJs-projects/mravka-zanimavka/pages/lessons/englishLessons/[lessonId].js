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

export async function getStaticProps({params}) {
    const currentLesson = await getCurrentEnglishLesson(params.lessonId);

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