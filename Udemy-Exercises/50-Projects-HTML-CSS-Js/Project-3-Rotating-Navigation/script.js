const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
    console.log("Open.....");
    container.classList.add("show-nav");
});

close.addEventListener("click", () => {
    console.log("Close.....");
    container.classList.remove("show-nav");
})