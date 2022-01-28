import LessonItem from "./lesson-item";
import styles from "./lesson-list.module.css";

function LessonList(props) {
    const { lessons } = props;
    
    return (
        <ul className={styles["wrap-all-lessons"]}>
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
