import dynamic from "next/dynamic";
import { getAllChineseLessons } from "../../../data/getData";

const AllLessonsPageComponent = dynamic(() => import("../../../components/lessons/all-lessons-page-component"));

function ChineseLessonsPage(props) {
    
    return (
        <article>
            <AllLessonsPageComponent 
                language={props.language} 
                lessons={props.loadedLessons} 
            />
        </article>
    )
}

export async function getServerSideProps() {
    try {
        const loadedLessons = await getAllChineseLessons();
        const languageType = loadedLessons[0].language.toLowerCase();
        const cuttedLessons = loadedLessons.map(({text, ...rest}) => (
                {
                    ...rest,
                    text: `${text.substring(0, 35)} [ ..... ]`
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

        return { 
            props: { 
                loadedLessons: cuttedLessons,
                language: languageType
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default ChineseLessonsPage;