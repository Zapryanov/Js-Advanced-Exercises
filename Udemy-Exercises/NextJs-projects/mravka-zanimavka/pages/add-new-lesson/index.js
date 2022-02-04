function AddNewLesson() {
    return (
        <div>
            <h1>Добави нов Урок</h1>
            <form>
                <div>
                    <label htmlFor="title">Добави заглавие: </label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="url">Добави URL на снимка: </label>
                    <input type="url" id="url" />
                </div>
                <div>
                    <label htmlFor="text">Добави текст: </label>
                    <textarea id="text" rows="5"></textarea>
                </div>
                <button>Добави урока</button>
            </form>
        </div>
    )
}

export default AddNewLesson;