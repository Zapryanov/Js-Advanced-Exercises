function deleteByEmail() {
    const input = document.querySelector("label input");
    const tBody = document.querySelectorAll("tbody tr");
    const result = document.getElementById("result");
    result.textContent = "";

    if (input.value && input.value !== "") {
        Array.from(tBody).map(x => {
            const eMail = x.lastElementChild.textContent;
            if (input.value === eMail) {
                x.remove();
                input.value = "";
                result.textContent = "Deleted."
            }
        })
    }
    result.textContent = "Not found.";
}