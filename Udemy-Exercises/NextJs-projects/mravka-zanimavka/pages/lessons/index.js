import React, { useEffect, useState } from "react";

import LessonList from "../../components/lessons/LessonList";

function LessonsPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ loadedLessons, setLoadedLessons ] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch("https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json")
            .then(res => {
                return res.json();
            })
            .then(data => {
                const lessons = [];

                for (let key in data) {
                    const lesson = {
                        id: key,
                        ...data[key]
                    }
                    lessons.push(lesson)
                }

                setIsLoading(false);
                setLoadedLessons(lessons);
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading.....</p>
            </section>
        )
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

export default LessonsPage;