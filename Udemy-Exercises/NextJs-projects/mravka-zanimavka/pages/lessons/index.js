import React, { useEffect, useState } from "react";

import LessonList from "../../components/LessonList";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       text: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       text: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];

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
                {/* <LessonList lessons={DUMMY_DATA} /> */}
                <LessonList lessons={loadedLessons} />
            </div>
        </div>
    )
}

export default LessonsPage;