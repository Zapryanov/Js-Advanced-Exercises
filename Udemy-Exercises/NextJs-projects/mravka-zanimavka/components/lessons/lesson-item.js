import Image from "next/image";
import Link from "next/link";

import sanitizeHtml from 'sanitize-html';

import styles from "./lesson-item.module.css";

function LessonItem(props) {
    const { id, language, image, title, text } = props;

    const clean = sanitizeHtml(text, {
        allowedTags: [ 'br', 'b', 'i', 'em', 'strong', 'a', 'p', 'div', 'h1', 'h2', 'h3' ],
        allowedAttributes: {
          'a': [ 'href' ]
        },
        allowedClasses: {
            'p': [ 'pDangerous' ],
            'a': [ 'aDangerous' ]
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
        <li className={styles["lesson-container"]} key={id}>
            <h4 className={styles["title-lesson"]}>{title}</h4>
            <div className={styles["wrap-image"]}>
                <Image className={styles.image} width={1200} height={750} src={image} alt={title} />
            </div>
            <div className={styles["text-lesson"]} dangerouslySetInnerHTML={{__html: clean}}></div>
            <Link href={exploreLink}>
                <a className={styles["btn-lesson"]}>Виж повече</a>
            </Link>
        </li>
    )
}

export default LessonItem;