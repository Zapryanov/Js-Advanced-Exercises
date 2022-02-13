import Head from "next/head";
import BigButton from "../../components/big-button";

import LessonList from "../../components/lessons/lesson-list";
import { getAllLessons } from "../../data/getData";

function LessonsPage(props) {
    
    return (
        <div>
            <Head>
                <title>Уроци</title>
                <meta name="description" content="уроци по китайски с мравка занимавка в град пловдив" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Lessons Page</h1>
            <LessonList lessons={props.loadedLessons} />
            <BigButton />
        </div>
    )
}

export async function getServerSideProps() {
    const loadedLessons = await getAllLessons();
    const cuttedLessons = loadedLessons.map(lesson => (
            {
                id: lesson.id, 
                title: lesson.title,
                image: lesson.image, 
                text: `${lesson.text.substring(0, 50)}..........`
            }
        ))

    if (!loadedLessons) {
        return {
            redirect: {
                destination: "/"
            }
        }
    }

    if (loadedLessons.length === 0) {
        return { notFound: true }
    }

    // Pass data to the page via props
    return { 
        props: { 
            loadedLessons: cuttedLessons 
        }
    }
}

export default LessonsPage;