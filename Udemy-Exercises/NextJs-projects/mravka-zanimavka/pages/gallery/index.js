import { getAllLessons } from "../../data/getData";
import styles from "./index.module.css";

function GalleryPage(props) {
    const { lastFiveLessons } = props;
    console.log(lastFiveLessons)
    return (
        <>
            <h1>Gallery Page</h1>
            <section>
                <div className={styles["wrapper-gallery-images"]}>

                </div>
                <div></div>
            </section>
            <section>
                <div></div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const allLessons = await getAllLessons();
    const lastFive = allLessons.filter((lesson, i) => {
        if (i < 5) {
            return lesson;
        }
    })

    console.log(lastFive)

    return {
        props: {
            lastFiveLessons: lastFive
        }
    }
}

export default GalleryPage;