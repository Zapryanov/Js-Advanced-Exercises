import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import LessonList from '../../components/lessons/LessonList';

function CurrentLessonId() {
    // const [ isLoading, setIsLoading ] = useState(true);
    const [ loadedLesson, setLoadedLesson ] = useState([]);

    const router = useRouter();

    console.log("router query",router.query.lessonId);
    const lessonId = router.query.lessonId;

    // Send request to some backend server to fetch 
    // the piece of data with an ID of router.query.lessonId

    useEffect(() => {
        fetch(`https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)

            const theLesson = [];

            for (let key in data) {
                if (key === lessonId) {
                    const lesson = {
                        id: key,
                        ...data[key]
                    }
                    theLesson.push(lesson)
                }
            }
            setLoadedLesson(theLesson)
        })
    }, [lessonId]);

    return (
        <div>
            <h1>Current Lesson Id</h1>
            <h2>{lessonId}</h2>
            <LessonList lessons={loadedLesson} />
        </div>
    )
}

export default CurrentLessonId;