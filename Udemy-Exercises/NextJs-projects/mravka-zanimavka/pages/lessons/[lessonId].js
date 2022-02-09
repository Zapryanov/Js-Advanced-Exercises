import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllLessons, getCurrentLesson } from "../../data/getData";

function CurrentLesson(props) {
    const router = useRouter();

    // Getting the data (details current lesson) 
    // from getStaticProps in combination with getStaticPaths
    // and the were retrieved here with the props object
    const { lesson } = props;

    function goBack() {
        router.push("/lessons")
    }
    
    const idToDelete = lesson.id;
    
    function deleteLesson() {
        fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons/${idToDelete}.json`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => console.log(data))

        router.push("/lessons")
    }

    if (!lesson) {
        return (
            <h1>Loading current Lesson...</h1>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>{lesson.title}</title>
                <meta name="description" content={lesson.text} />
            </Head>
            <h1>{lesson.title}</h1>
            <div>
                <Image width={1200} height={750} src={lesson.image} alt={lesson.title}/>
            </div>
            <p>{lesson.text}</p>
            <button onClick={goBack}>Go back</button>
            <button onClick={deleteLesson}>Delete</button>
        </Fragment>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const lessonId = params.lessonId;

    const currentLesson = await getCurrentLesson(lessonId);

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
    const data = await getAllLessons();
    const ids = data.map(lesson => lesson.id);

    const pathsWithParams = ids.map(id => ({ params: { lessonId: id } }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default CurrentLesson;