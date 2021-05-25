const nav = document.querySelector(".navigation");
const logo = document.querySelector(".wrap-logo");
const galleryImages = document.querySelectorAll(".gallery-img");
const title = document.title;
const navLinks = document.querySelectorAll(".nav-link");

galleryImages.forEach((img, i) => {
    i <= 2 ? img.classList.add("small-img") : img.classList.add("big-img");
})

window.addEventListener("load", () => {
    nav.classList.add("show-after-load");
    logo.classList.add("show-after-load");
})

navLinks.forEach(link => {
    if (link.textContent === title) {
        link.classList.add("show-dash");
    }
})