Array.from(document.getElementsByClassName("link-nav-aside")).forEach(e => {
    console.log(e.firstChild.textContent);
})

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("It is working!")
    document.getElementsByTagName("body")[0].classList.add("load")
})
