import Head from "next/head";
import BigButton from "../../../components/big-button";

import LessonList from "../../../components/lessons/lesson-list";
import { getAllEnglishLessons } from "../../../data/getData";

function LessonsPage(props) {
    
    return (
        <div>
            <Head>
                <title>Уроци-Английски</title>
                <meta name="description" content="уроци по английски за деца с мравка занимавка в град Пловдив" />
            </Head>
            <h1>Учим английски</h1>
            <LessonList lessons={props.loadedLessons} />
            <BigButton />
        </div>
    )
}

export async function getServerSideProps() {
    let cuttedLessons = [];
    try {
        const loadedLessons = await getAllEnglishLessons()
        cuttedLessons = loadedLessons.map(lesson => (
                {
                    id: lesson.id, 
                    language: lesson.language,
                    title: lesson.title,
                    image: lesson.image, 
                    text: `${lesson.text.substring(0, 30)} [ ..... ]`
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
    } catch (error) {
        console.log(error);
    }

    return { 
        props: { 
            loadedLessons: cuttedLessons 
        }
    }
}

export default LessonsPage;