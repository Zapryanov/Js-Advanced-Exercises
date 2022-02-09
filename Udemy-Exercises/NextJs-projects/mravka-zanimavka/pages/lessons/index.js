import Head from "next/head";

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
        </div>
    )
}

export async function getServerSideProps() {
    const loadedLessons = await getAllLessons();

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
            loadedLessons 
        }
    }
}

export default LessonsPage;