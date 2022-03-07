import Head from "next/head";
import { useEffect, useState } from "react";
import BigButton from "../../../components/big-button";

import LessonList from "../../../components/lessons/lesson-list";
import { getAllEnglishLessons } from "../../../data/getData";

function LessonsPage(props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    
    return (
        mounted && <div>
                <Head>
                    <title>Уроци-Английски</title>
                    <meta name="description" content="уроци по китайски с мравка занимавка в град пловдив" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <h1>Уроци - Английски</h1>
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

    // Pass data to the page via props
    return { 
        props: { 
            loadedLessons: cuttedLessons 
        }
    }
}

export default LessonsPage;