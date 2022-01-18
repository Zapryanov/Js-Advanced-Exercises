import { useEffect, useState } from "react";
import useSWR from "swr";

function LastLessonsPage(props) {
    const [lessons, setLessons] = useState(props.lessons);
    // const [isLoading, setIsLoading] = useState(false);

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

            setLessons(transformedLessons);
        }
    }, [data]);

    // --------------------------------------------------------------------------

    // useEffect(() => {
    //     setIsLoading(true);

    //     fetch(
    //         "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json"
    //     ).then(response => response.json())
    //     .then(data => {
    //         const transformedLessons = [];

    //         for(let key in data) {
    //             transformedLessons.push({ 
    //                 id: key, 
    //                 image: data[key].image, 
    //                 text: data[key].text, 
    //                 title: data[key].title 
    //             });
    //         }

    //         setLessons(transformedLessons);
    //         setIsLoading(false);
    //     })
    // }, []);

    // if(isLoading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    // if (!lessons) {
    //     return (
    //         <h1>No lessons yet!</h1>
    //     )
    // }

    // ----------------------------------------------------------

    if (error) {
        return  <h1>Failed to load!!!</h1>
    }

    if (!data && !lessons) {
        return  <h1>Loading...</h1>
    }

    return (
        <ul>
            {lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}: {lesson.text}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const response = await fetch(
        "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json"
    )
    const data = await response.json();
        const transformedLessons = [];

        for(let key in data) {
            transformedLessons.push({ 
                id: key, 
                image: data[key].image, 
                text: data[key].text, 
                title: data[key].title 
            });
        }

        return { props: { lessons: transformedLessons } }
}

export default LastLessonsPage;