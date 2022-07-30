import LessonItem from "./lesson-item";
import styles from "./lesson-list.module.css";

function LessonList(props) {
    const { lessons } = props;
    
    return (
        <section className={styles["wrap-all-lessons"]}>
            {lessons.map((lesson) => (
                <LessonItem
                    key={lesson.id}
                    language={lesson.language}
                    id={lesson.id}
                    title={lesson.title}
                    image={lesson.image}
                    text={lesson.text}
                />
            ))}
        </section>
    );
}

export default LessonList;
