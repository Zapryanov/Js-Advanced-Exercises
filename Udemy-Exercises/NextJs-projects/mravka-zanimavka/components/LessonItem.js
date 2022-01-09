import Link from "next/link";

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
                <Link href={exploreLesson} className="btn-show-text lesson-page">Виж повече</Link>
            </div>
        </li>
    )
}

export default LessonItem;