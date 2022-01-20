import LessonList from '../../components/lessons/LessonList';
import { getAllLessons, getLessonById } from '../../helpers/api-utils';

function CurrentLessonId(props) {
    const lesson = props.selectedLesson;

    if (!lesson) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>Current Lesson Id</h1>
            <h2>{lesson.lessonId}</h2>
            <LessonList lessons={lesson} />
        </div>
    )
}

export async function getStaticProps(context) {
    const lessonId = context.params.lessonId;

    const lesson = await getLessonById(lessonId);

    return {
        props: {
            selectedLesson: lesson
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const lessons = await getAllLessons();
    const pathsId = lessons.map(lesson => ({ params: { lessonId: lesson.id } }))

    return {
        paths: pathsId,
        fallback: true
    }
}

export default CurrentLessonId;