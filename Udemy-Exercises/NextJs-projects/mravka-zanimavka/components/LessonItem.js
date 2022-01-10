import Link from "next/link";
import styles from "./LessonItem.module.css";

function LessonItem(props) {
    const { title, image, text, id } = props;
    const exploreLesson = `/lesson/${id}`;

    return (
        <li>
            <div className="current-article">
                <h4>{title}</h4>
                <div className="wrap-img-article">
                    <img src={image} alt={title} />
                </div>
                <p className="wrap-text-article italic lesson one">{text}</p>
                <button className={styles.btn}>
                    <Link href={exploreLesson}>Виж повече</Link>
                </button>
            </div>
        </li>
    )
}

export default LessonItem;