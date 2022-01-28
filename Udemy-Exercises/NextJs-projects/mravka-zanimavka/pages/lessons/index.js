import { useState, useEffect } from "react";

import LessonList from "../../components/lessons/lesson-list";

function LessonsPage(props) {
    const [loadedLessons, setLoadedLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
            .then(res => res.json())
            .then(data => {
                const transformedLessons = [];

                for (const key in data) {
                    transformedLessons.push({
                        id: key, 
                        ...data[key]
                    })
                }

                setLoadedLessons(transformedLessons)
                setIsLoading(true)
            })
    }, []);

    if (isLoading === false) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>Lessons Page</h1>
            <LessonList lessons={loadedLessons} />
        </div>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
//     const data = await res.json()
  
//     // Pass data to the page via props
//     return { props: { data } }
// }

export default LessonsPage;