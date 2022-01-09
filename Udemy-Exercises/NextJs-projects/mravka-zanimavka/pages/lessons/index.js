import { useState, useEffect } from 'next'

function LessonsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedLessons, setLoadedLessons] = useState([]);

    let lessons;

    useEffect(() => {
        setIsLoading(true);
        fetch("https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
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
        </div>
    )
}

export default LessonsPage;