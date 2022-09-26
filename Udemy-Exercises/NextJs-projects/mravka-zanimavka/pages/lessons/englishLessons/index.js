import dynamic from "next/dynamic";
import ServerError from "../../../components/error";
import { getAllEnglishLessons } from "../../../data/getData";

const AllLessonsPageComponent = dynamic(() => import("../../../components/lessons/all-lessons-page-component"));

function EnglishLessonsPage(props) {
    try {
        return (
            <article>
                <AllLessonsPageComponent 
                    language={props.language} 
                    lessons={props.loadedLessons} 
                />
            </article>
        )
    } catch (error) {
        return (
            <ServerError />
        )
    }
}

export async function getStaticProps() {
    const loadedLessons = await getAllEnglishLessons();

    if (!loadedLessons || loadedLessons.length === 0) {
        return {
            redirect: {
                destination: "/"
            }
        }
    }

    const languageType = loadedLessons[0].language.toLowerCase();
    const cuttedLessons = loadedLessons.map(({ text, ...rest })=> (
            {
                ...rest,
                text: `${text.substring(0, 30)} [ ..... ]`
            }
        ))


    if (loadedLessons.length === 0) {
        return { notFound: true }
    }

    return { 
        props: { 
            loadedLessons: cuttedLessons,
            language: languageType
        },
        revalidate: 1800
    }
    
}

export default EnglishLessonsPage;