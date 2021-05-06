const nav = document.querySelector(".navigation");
const logo = document.querySelector(".wrap-logo");

window.addEventListener("load", () => {
    nav.classList.add("show-after-load");
    logo.classList.add("show-after-load");
    console.log(logo)
})