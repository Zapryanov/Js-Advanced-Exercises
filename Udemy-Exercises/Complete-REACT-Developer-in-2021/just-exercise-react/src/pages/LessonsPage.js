import LessonList from "../components/lessons/LessonList";

const DUMMY_DATA = [
    {
        id: "m1",
        title: "Демо събитие в Цар-Симеоновата градина - 1",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
        "This is a FIRST, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
        id: "m2",
        title: "Демо събитие в Цар-Симеоновата градина - 2",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
        "This is a SECOND, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
];

function LessonsPage() {
    return (
        <div className="wrap-all-lessons">
            <h1>Уроци</h1>
            <LessonList lessons={DUMMY_DATA} />
        </div>
    )
}

export default LessonsPage;