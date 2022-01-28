import LessonItem from "./lesson-item";

function LessonList(props) {
    const { lessons } = props;
    return (
        <ul>
        {lessons.map((lesson) => (
            <LessonItem
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                image={lesson.image}
                text={lesson.image}
            />
        ))}
        </ul>
    );
}

export default LessonList;
