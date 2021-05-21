const nav = document.querySelector(".navigation");
const logo = document.querySelector(".wrap-logo");

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img, i) => {
    i <= 2 ? img.classList.add("small-img") : img.classList.add("big-img");
})

window.addEventListener("load", () => {
    nav.classList.add("show-after-load");
    logo.classList.add("show-after-load");
    console.log(logo)
})

