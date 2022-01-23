// import Image from "next/image";

import ButtonOne from "../ui/buttonOne";
import styles from "./LessonItem.module.css";

function LessonItem(props) {
    const { title, image, text, id } = props;
    const exploreLesson = `/lessons/${id}`;

    return (
        <li>
            <div className={styles["current-article"]}>
                <h4>{title}</h4>
                <div className={styles["wrap-img-article"]}>
                    {/* <Image src={`/${image}`} alt={title} width={340} height={160} /> */}
                    <img src={image} alt={title} />
                </div>
                <p className={`${styles["wrap-text-article"]} ${styles.italic} ${styles.one}`}>{text}</p>
                <ButtonOne link={exploreLesson}>Виж повече</ButtonOne>
            </div>
        </li>
    )
}

export default LessonItem;