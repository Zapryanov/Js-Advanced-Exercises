import { useState, useEffect } from "react";

import LessonList from "../components/lessons/LessonList";

//  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

function LessonsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedLessons, setLoadedLessons] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);

        fetch('https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json')
            .then(response => {
                return response.json()
            }).then(data => {
                const lessons = [];

                for (let key in data) {
                    const lesson = {
                        id: key,
                        ...data[key]
                    };
                    lessons.push(lesson)
                }
                setIsLoading(false);
                setLoadedLessons(lessons);
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div className="wrap-all-lessons">
            <h1>Уроци</h1>
            <LessonList lessons={loadedLessons} />
        </div>
    )
}

export default LessonsPage;