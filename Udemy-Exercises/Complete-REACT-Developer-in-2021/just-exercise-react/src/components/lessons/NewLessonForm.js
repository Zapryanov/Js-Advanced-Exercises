import { useRef } from 'react';

import Card from '../ui/Card';
import styles from './NewLessonForm.module.css';

function NewLessonForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const textInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const lessonData = {
            title: enteredTitle,
            image: enteredImage,
            text: enteredText
        }     
        
        props.onAddLesson(lessonData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Заглавие на урока</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Снимка на урока</label>
                    <input type="text" required id='image' ref={imageInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Добавяне на текст</label>
                    <textarea id='description' required rows='5' ref={textInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Добави урок</button>
                </div>
            </form>
        </Card>
    )
}

export default NewLessonForm;