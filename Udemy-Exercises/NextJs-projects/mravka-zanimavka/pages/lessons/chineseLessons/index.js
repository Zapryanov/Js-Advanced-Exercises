import Head from "next/head";
import { useEffect, useState } from "react";
import BigButton from "../../../components/big-button";

import LessonList from "../../../components/lessons/lesson-list";
import { getAllChineseLessons } from "../../../data/getData";

function LessonsPage(props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    
    return (
        mounted && <div>
                <Head>
                    <title>Уроци-Китайски</title>
                    <meta name="description" content="уроци по китайски за деца с мравка занимавка в град пловдив" />
                </Head>
                <h1>Уроци - Китайски</h1>
                <LessonList lessons={props.loadedLessons} />
                <BigButton />
            </div>
    )
}

export async function getServerSideProps() {
    let cuttedLessons = [];
    try {
        const loadedLessons = await getAllChineseLessons()
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

    // Pass data to the page via props
    return { 
        props: { 
            loadedLessons: cuttedLessons 
        }
    }
}

export default LessonsPage;