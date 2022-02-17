import { useRef, useContext } from "react";

import { useRouter } from "next/router";
import UserContext from "../../store/user-context";

import styles from "./index.module.css";

function AddNewLesson() {
    const { user } = useContext(UserContext)
    const titleInputRef = useRef();
    const urlInputRef = useRef();
    const textInputRef = useRef();

    const router = useRouter();
    
    function submitFormHandler(e) {
        e.preventDefault();

        const enteredTtitle = titleInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;
        const enteredText = textInputRef.current.value;

        console.log(enteredTtitle, enteredUrl, enteredText);

        const reqBody = { title: enteredTtitle, image: enteredUrl, text: enteredText, accessToken: user?.accessToken }

        if (enteredTtitle !== "" && enteredUrl !== "" && enteredText !== "") {
            fetch("/api/lessonApi", {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))

            router.push("/lessons");
        } else {
            alert("Please fill in the input fields...!")
        }
    }

    return (
        <div className={styles["wrap-add-lesson"]}>
            <div className={styles["frame-over-form"]}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form className={styles.form}>
                <h1>Добави нов Урок</h1>
                <div className={styles["one-line-element"]}>
                    <label htmlFor="title">Добави заглавие: </label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
                <div className={styles["one-line-element"]}>
                    <label htmlFor="url">Добави URL на снимка: </label>
                    <input type="url" id="url" ref={urlInputRef} />
                </div>
                <div className={styles["one-line-element"]}>
                    <label htmlFor="text">Добави текст: </label>
                    <textarea id="text" rows="5" ref={textInputRef} ></textarea>
                </div>
                <button onClick={submitFormHandler}>Добави урока</button>
            </form>
        </div>
    )
}

export default AddNewLesson;