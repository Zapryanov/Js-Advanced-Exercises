import { useRef } from 'react';

import Card from '../ui/Card';
import styles from './NewLessonForm.module.css';

function NewLessonForm() {
    const titleInputRef = useRef();

    const imageInputRef = useRef();

    const textInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const text = textInputRef.current.value;

        const lessonData = {
            title,
            image,
            text
        }
        
        console.log(lessonData)
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