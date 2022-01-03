import Card from '../ui/Card';
import styles from './NewLessonForm.module.css';

function NewLessonForm() {
    return (
        <Card>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor='title'>Заглавие на урока</label>
                    <input type="text" required id='title' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Снимка на урока</label>
                    <input type="text" required id='image' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Добавяне на текст</label>
                    <textarea id='description' required></textarea>
                </div>
                <div className={styles.action}>
                    <button>Добави урок</button>
                </div>
            </form>
        </Card>
    )
}

export default NewLessonForm;