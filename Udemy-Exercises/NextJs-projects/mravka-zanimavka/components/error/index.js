function ServerError() {
    return (
        <div className="error-container">
            <h1>В момента обновяваме страницата или има сървърен проблем</h1>
            <p className="error-text">
                <span>Моля опитайте по-късно.</span>
                <span>Извинете ни за неудобството!</span>
            </p>
        </div>
    )
}

export default ServerError;