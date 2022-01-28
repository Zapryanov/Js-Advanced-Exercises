import Image from "next/image";
import Link from "next/link";

function LessonItem(props) {
    const { id, image, title, text } = props;
    const exploreLink = `/lessons/${id}`;

    return (
        <li key={id}>
            <h4>{title}</h4>
            <div>
                <Image width={500} height={300} src="/images/learning-plan.png" alt={title} />
            </div>
            <p>{text}</p>
            <Link href={exploreLink}>Виж повече</Link>
        </li>
    )
}

export default LessonItem;