import LessonItem from './LessonItem';
import styles from './LessonList.module.css';

function LessonList(props) {
    return (
        <ul className={`${styles["wrap-all-lessons"]}`}>
            {props.lessons.map(lesson => (
                <LessonItem 
                    key={lesson.id} 
                    id={lesson.id} 
                    image={lesson.image} 
                    title={lesson.title}
                    description={lesson.description}
                />
            ))}
        </ul>
    )
}

export default LessonList;