import { useRef } from "react";

import styles from "./LessonForm.module.css";

function LessonForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const textInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredText = textInputRef.current.value;

        if (enteredTitle !== "" && enteredImage !== "" && enteredText !== "") {
            const lessonData = {
                title: enteredTitle,
                image: enteredImage,
                text: enteredText
            }
    
            props.onAddLesson(lessonData);
        } else {
            console.log("You have missed an input field...!")
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor="title">Заглавие</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Снимка ( добави - url )</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="text">Текст</label>
                <textarea id="text" required rows="5" ref={textInputRef}></textarea>
            </div>
            <div className={styles.actions}>
                <button>Добави урок</button>
            </div>
        </form>
    )
}

export default LessonForm;