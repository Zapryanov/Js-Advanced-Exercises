import Image from "next/image";
import Link from "next/link";

import sanitizeHtml from 'sanitize-html';

import styles from "./lesson-item.module.css";

function LessonItem(props) {
    const { id, language, image, title, text } = props;

    const clean = sanitizeHtml(text, {
        allowedTags: [ 'br', 'b', 'i', 'em', 'span', 'strong', 'a', 'p', 'div', 'h1', 'h2', 'h3', 'ul', 'li' ],
        allowedAttributes: {
          'a': [ 'href' ]
        },
        selfClosing: [ 'br', 'hr', 'link' ]
    });

    let exploreLink = "";

    if (language === "Китайски") {
        exploreLink = `/lessons/chineseLessons/${id}`;
    } else if (language === "Английски") {
        exploreLink = `/lessons/englishLessons/${id}`;
    }

    return (
        <article className={styles["lesson-container"]} key={id}>
            <h2 className={styles["title-lesson"]}>{title}</h2>
            <div className={styles["wrap-image"]}>
                <Image className={styles.image} width={1200} height={750} src={image} alt={title} />
            </div>
            <div className={styles["text-lesson"]} dangerouslySetInnerHTML={{__html: clean}}></div>
            <Link href={exploreLink}>
                <a className={styles["btn-lesson"]}>Виж повече</a>
            </Link>
        </article>
    )
}

export default LessonItem;