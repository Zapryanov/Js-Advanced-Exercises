import Image from "next/image";
import Link from "next/link";

import styles from "./lesson-item.module.css";

function LessonItem(props) {
    const { id, image, title, text } = props;
    const exploreLink = `/lessons/${id}`;

    return (
        <li className={styles["lesson-container"]} key={id}>
            <h4 className={styles["title-lesson"]}>{title}</h4>
            <div className={styles["wrap-image"]}>
                <Image className={styles.image} width={1200} height={750} src={image} alt={title} />
            </div>
            <p className={styles["text-lesson"]} dangerouslySetInnerHTML={{__html: text}}></p>
            <Link href={exploreLink}>
                <a className={styles["btn-lesson"]}>Виж повече</a>
            </Link>
        </li>
    )
}

export default LessonItem;