import LessonItem from "./LessonItem";

function LessonList(props) {
    return (
        <ul>
            {props.lessons.map(lesson => 
                <LessonItem 
                    key={lesson.id} 
                    id={lesson.id} 
                    image={lesson.image} 
                    text={lesson.text} 
                    title={lesson.title}
                />
            )}
        </ul>
    )
}

export default LessonList;