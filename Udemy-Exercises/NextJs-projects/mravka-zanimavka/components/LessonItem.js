import Image from "next/image"

function LessonItem(props) {
    return (
        <li>
            <div className="current-article">
                <h4>{props.title}</h4>
                <div className="wrap-img-article">
                    <Image src={props.image} alt={props.title} />
                </div>
                <p className="wrap-text-article italic lesson one">{props.text}</p>
                <button className="btn-show-text lesson-page">Виж повече</button>
            </div>
        </li>
    )
}

export default LessonItem;