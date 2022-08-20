import { useRouter } from "next/router";
import { getAllChineseLessons, getCurrentChineseLesson } from "../../../data/getData";


import CurrentLessonComponent from "../../../components/lessons/current-lesson-component";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("../../../components/test"));

function CurrentChineseLesson(props) {

    const router = useRouter();
    const { lesson } = props;

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
            cleanText={<DynamicComponent text={lesson.text}/>} 
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