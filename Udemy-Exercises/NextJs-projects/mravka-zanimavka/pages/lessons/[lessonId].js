import { useRouter } from 'next/router';

function CurrentLessonId() {
    const router = useRouter();

    console.log("router pathname - ", router.pathname);
    console.log("router query - ", router.query);

    // Send request to some backend server to fetch 
    // the piece of data with an ID of router.query.lessonId

    return (
        <div>
            <h1>Current Lesson Id</h1>
        </div>
    )
}

export default CurrentLessonId;