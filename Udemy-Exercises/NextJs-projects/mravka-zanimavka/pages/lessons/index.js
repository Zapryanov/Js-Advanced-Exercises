import { useState, useEffect } from 'next'

function LessonsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedLessons, setLoadedLessons] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const lessons = [];

                for (const key in data) {
                    const lesson = {
                        id: key,
                        ...data[key]
                    }

                    lessons.push(lesson);
                }
                setIsLoading(false);
                setLoadedLessons(data);
            })
    }, [])


    if (isLoading) {
        return (
            <section>
                <p>Is loading...</p>
            </section>
        )
    }

    return (
        <div>
            <h1>Lessons Page</h1>
            {loadedLessons.map((lesson) => {<ul><li key={lesson.id}>{lesson.text}</li></ul>})}
        </div>
    )
}

export default LessonsPage;