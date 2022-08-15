import AllLessonsPageComponent from "../../../components/lessons/all-lessons-page-component";
import { getAllChineseLessons } from "../../../data/getData";

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
    let cuttedLessons = [];
    const loadedLessons = await getAllChineseLessons();
    const languageType = loadedLessons.find(obj => obj.language === "Китайски") ? "китайски": null;
    try {
        cuttedLessons = loadedLessons.map(lesson => (
                {
                    id: lesson.id, 
                    language: lesson.language,
                    title: lesson.title,
                    image: lesson.image, 
                    text: `${lesson.text.substring(0, 35)} [ ..... ]`
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
            loadedLessons: cuttedLessons,
            language: languageType
        }
    }
}

export default ChineseLessonsPage;