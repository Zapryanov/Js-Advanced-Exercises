import AllLessonsPageComponent from "../../../components/lessons/all-lessons-page-component";
import { getAllEnglishLessons, getImagesMainPage } from "../../../data/getData";

function EnglishLessonsPage(props) {
    
    return (
        <article>
            <AllLessonsPageComponent 
                language={props.language} 
                lessons={props.loadedLessons} 
                url={props.mainPageImages.bigButton} 
            />
        </article>
    )
}

export async function getServerSideProps() {
    let cuttedLessons = [];
    const imagesMainPage = await getImagesMainPage();
    const loadedLessons = await getAllEnglishLessons();
    const languageType = loadedLessons.find(obj => obj.language === "Английски") ? "английски": null;
    try {
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
            loadedLessons: cuttedLessons,
            mainPageImages: imagesMainPage,
            language: languageType
        }
    }
}

export default EnglishLessonsPage;