import LessonItem from "./lesson-item";

function LessonList(props) {
    const { lessons } = props;
    lessons.map(lesson => console.log(lesson.image))
    console.log("from Lesson-List - ", lessons)
    return (
        <ul>
        {lessons.map((lesson) => (
            <LessonItem
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                image={lesson.image}
                text={lesson.text}
            />
        ))}
        </ul>
    );
}

export default LessonList;
