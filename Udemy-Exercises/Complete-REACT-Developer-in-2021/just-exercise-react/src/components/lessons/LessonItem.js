import Card from '../ui/Card';
import styles from './LessonItem.module.css';

function LessonItem(props) {
    return (
        <li className={styles["current-article"]}>
            <Card>
                <h4 className={`${styles["test-1"]} ${styles["test-2"]}`}>{props.title}</h4>
                <div className={styles["wrap-img-article"]}>
                    <img src={props.image} alt={props.title} />
                </div>
                <p className={`${styles["wrap-text-article"]} ${styles["lesson"]}`}>{props.description}</p>
                <button className={`${styles["btn-show-text"]} ${styles["lesson-page"]}`}>Покажи повече</button>
            </Card>
        </li>
    )
}

export default LessonItem;