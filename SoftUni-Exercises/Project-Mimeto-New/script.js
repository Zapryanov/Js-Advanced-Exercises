const nav = document.querySelector(".navigation");
const logo = document.querySelector(".wrap-logo");
const galleryImages = document.querySelectorAll(".gallery-img");
const title = document.title;
const navLinks = document.querySelectorAll(".nav-link");

// Arrange images in Galery page
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

const textArr = document.querySelectorAll(".wrap-text-article");

textArr.forEach(eachArr => {
    const result = eachArr.textContent.split(" ").filter(x => x !== "").splice(0, 10).join(" ");
    eachArr.textContent = result + ".....";
});