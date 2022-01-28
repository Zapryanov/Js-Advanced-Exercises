import { useRouter } from "next/router";

function CurrentLesson() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>Current Lesson</h1>
        </div>
    )
}

export default CurrentLesson;