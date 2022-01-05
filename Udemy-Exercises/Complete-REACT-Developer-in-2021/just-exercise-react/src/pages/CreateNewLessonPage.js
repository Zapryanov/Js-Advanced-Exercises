import NewLessonForm from "../components/lessons/NewLessonForm";

function CreateNewLessonPage() {
    function addLessonHandler(lessonData) {
        fetch(
            'https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app/lessons.json',
            {
                method: 'POST',
                body: JSON.stringify(lessonData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    return (
        <section>
            <h1>Добави нов урок</h1>
            <NewLessonForm onAddLesson={addLessonHandler} />
        </section>
    )
}

export default CreateNewLessonPage;