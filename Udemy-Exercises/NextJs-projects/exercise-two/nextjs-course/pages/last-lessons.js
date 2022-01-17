import { useEffect, useState } from "react";

function LastSalesPage() {
    const [lessons, setLessons] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(
            "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json"
        ).then(response => response.json())
        .then(data => {
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
            setIsLoading(false);
        })
    }, []);

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (!lessons) {
        return (
            <h1>No lessons yet!</h1>
        )
    }

    return (
        <ul>
            {lessons.map(lesson => <li key={lesson.id}>{lesson.title}: {lesson.text}</li>)}
        </ul>
    )
}

export default LastSalesPage;