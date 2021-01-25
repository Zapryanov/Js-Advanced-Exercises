function addItem() {
    const ul = document.getElementById("items");
    const input = document.getElementById("newItemText");

    if (input.value !== "") {
        const newLi = createElement("li", input.value);
        ul.appendChild(newLi);
        input.value = "";
    }

    function createElement(type, content) {
        let el = document.createElement(type);
        el.textContent = content;
        return el;
    }
}