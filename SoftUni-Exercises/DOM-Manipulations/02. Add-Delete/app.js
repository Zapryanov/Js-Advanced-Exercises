function addItem() {
    const ul = document.getElementById("items");
    const input = document.getElementById("newText");

    if (input.value && input.value !== "") {
        const newLi = document.createElement("li");
        newLi.textContent = input.value;

        const aDelete = document.createElement("a");
        aDelete.setAttribute("href", "#")
        aDelete.textContent = "[Delete]";
        newLi.appendChild(aDelete);

        aDelete.addEventListener("click", deleteItem);

        ul.appendChild(newLi);
        input.value = "";
    }

    function deleteItem(e) {
        e.target.parentNode.remove();
    }
}