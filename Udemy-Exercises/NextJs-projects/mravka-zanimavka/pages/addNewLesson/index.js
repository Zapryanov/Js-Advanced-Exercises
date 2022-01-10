import LessonForm from "../../components/LessonForm";

function AddNewLesson(props) {
    return (
        <section>
            <h1>Добави нов урок</h1>
            <LessonForm onAddLesson={}/>
        </section>
    )
}

export default AddNewLesson;