import { useRouter } from "next/router";
import { getCurrentLesson } from "../../data/getData";

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
    return {
        paths: [
            { params: { lessonId: "-Msdiga337qQ9LruZGKQ" } },
            { params: { lessonId: "-Mse90PRarcejkqEh-HC" } },
            { params: { lessonId: "-Mt2PeaBhBjJr4XygjKg" } }
        ],
        fallback: true
    }
}

export default CurrentLesson;