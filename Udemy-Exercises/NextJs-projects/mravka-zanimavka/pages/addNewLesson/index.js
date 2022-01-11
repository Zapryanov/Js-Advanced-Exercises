import LessonForm from "../../components/lessons/LessonForm";

function AddNewLesson(props) {
    function addLessonHandler(lessonData) {
        fetch(
            "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json",
            {
                method: "POST",
                body: JSON.stringify(lessonData),
                headers: {
                    "Content-Type": "application/json"
                } 
            }
        )
    }

    return (
        <section>
            <h1>Добави нов урок</h1>
            <LessonForm onAddLesson={addLessonHandler}/>
        </section>
    )
}

export default AddNewLesson;