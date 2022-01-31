import { useRouter } from "next/router";

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
            <div>
                Image
            </div>
            <p>{lesson.text}</p>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;

    const lessonId = params.lessonId;

    // Fetch data from external API
    const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
    const data = await res.json()
  
    // Transform the data from Firebase
    const loadedLessons = [];
    
    for (const key in data) {
        loadedLessons.push({
            id: key, 
            ...data[key]
        })
    }

    // Retrieve the searched lesson
    const currentLesson = loadedLessons.find(lesson => lesson.id === lessonId);

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