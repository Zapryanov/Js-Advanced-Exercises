document.getElementById("test").addEventListener("click", (e) => {
    console.log(e.target.textContent)
});

document.getElementById("test2").addEventListener("click", (e) => {
    console.log(e.target.textContent)
});

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("It is working!")
    document.getElementsByTagName("body")[0].classList.add("load")
})
