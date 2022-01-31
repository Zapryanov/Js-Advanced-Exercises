import { useState, useEffect } from "react";

import LessonList from "../../components/lessons/lesson-list";

function LessonsPage(props) {
    
    return (
        <div>
            <h1>Lessons Page</h1>
            <LessonList lessons={props.loadedLessons} />
        </div>
    )
}

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
    const data = await res.json()
  
    // Transform the data from Firebase
    const loadedLessons = [];
    
    for (const key in data) {
        loadedLessons.push({
            id: key, 
            ...data[key]
        })
    }

    if (!loadedLessons) {
        return {
            redirect: {
                destination: "/"
            }
        }
    }

    if (loadedLessons.length === 0) {
        return { notFound: true }
    }

    // Pass data to the page via props
    return { 
        props: { 
            loadedLessons 
        },
        revalidate: 600 
    }
}

export default LessonsPage;