import Link from "next/link";

function LessonItem(props) {
    const { id, image, title, text } = props;
    const exploreLink = `/lessons/${id}`;

    return (
        <li key={id}>
            <h4>{title}</h4>
            <div>
                <img src={`/images/${image}`} alt={title} />
            </div>
            <p>{text}</p>
            <Link href={exploreLink}>Виж повече</Link>
        </li>
    )
}

export default LessonItem;