import { useRouter } from "next/router";
import { getAllLessons, getCurrentLesson } from "../../data/getData";

function CurrentLesson(props) {
    const router = useRouter();

    const { lesson } = props;

    function goBack() {
        router.push("/lessons")
    }

    if (!lesson) {
        return (
            <h1>Loading current Lesson...</h1>
        )
    }

    return (
        <div>
            <h1>{lesson.title}</h1>
            <div>Image</div>
            <p>{lesson.text}</p>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const lessonId = params.lessonId;

    const currentLesson = await getCurrentLesson(lessonId);

    return {
        props: {
            lesson: currentLesson
        }
    }
}

export async function getStaticPaths() {
    const data = await getAllLessons();
    const ids = data.map(lesson => lesson.id);
    const pathsWithParams = ids.map(id => ({ params: { lessonId: id } }))

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export default CurrentLesson;