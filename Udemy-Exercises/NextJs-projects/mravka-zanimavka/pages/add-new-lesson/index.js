import { useRef } from "react";

import { useRouter } from "next/router";

function AddNewLesson() {
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

        const reqBody = { title: enteredTtitle, image: enteredUrl, text: enteredText }

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
        }
    }

    return (
        <div>
            <h1>Добави нов Урок</h1>
            <form>
                <div>
                    <label htmlFor="title">Добави заглавие: </label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
                <div>
                    <label htmlFor="url">Добави URL на снимка: </label>
                    <input type="url" id="url" ref={urlInputRef} />
                </div>
                <div>
                    <label htmlFor="text">Добави текст: </label>
                    <textarea id="text" rows="5" ref={textInputRef} ></textarea>
                </div>
                <button onClick={submitFormHandler}>Добави урока</button>
            </form>
        </div>
    )
}

export default AddNewLesson;