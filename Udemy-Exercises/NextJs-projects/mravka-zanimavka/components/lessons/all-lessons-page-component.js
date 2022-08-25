import Head from "next/head";
import LessonList from "./lesson-list";
import BigButton from "../big-button";

function AllLessonsPageComponent({ language, lessons, url }) {
    return (
        <>
            <Head>
                <title>Уроци-{language}</title>
                <meta name="description" content={`уроци по ${language} за деца с мравка занимавка в град Пловдив`} />
            </Head>
            <h1>Учим {language}</h1>
            <LessonList lessons={lessons} />
            <BigButton />
        </>
    )
}

export default AllLessonsPageComponent;