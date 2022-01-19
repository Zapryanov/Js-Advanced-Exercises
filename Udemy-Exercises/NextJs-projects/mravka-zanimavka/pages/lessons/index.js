import React, { useEffect, useState } from "react";
import useSWR from "swr";

import LessonList from "../../components/lessons/LessonList";
import { getAllLessons } from "../../helpers/api-utils";

function LessonsPage(props) {
    const [ loadedLessons, setLoadedLessons ] = useState(props.lessons);

    const {data, error} = useSWR("https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json");

    useEffect(() => {
        if (data) {
            const transformedLessons = [];

            for(let key in data) {
                transformedLessons.push({ 
                    id: key, 
                    image: data[key].image, 
                    text: data[key].text, 
                    title: data[key].title 
                });
            }

            setLoadedLessons(transformedLessons);
        }
    }, [data]);

    if (error) {
        return  <h1>Failed to load!!!</h1>
    }

    if (!data && !loadedLessons) {
        return  <h1>Loading...</h1>
    }

    return (
        <div className="wrap-all-lessons">
            <h1>Lessons Page</h1>
            <div>
                <LessonList lessons={loadedLessons} />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const allLessons = await getAllLessons();

    return {
        props: {
            lessons: allLessons
        }
    }
}

export default LessonsPage;