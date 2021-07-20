const nav = document.querySelector(".navigation");
const logo = document.querySelector(".wrap-logo");
const galleryImages = document.querySelectorAll(".gallery-img");
const title = document.title;
const navLinks = document.querySelectorAll(".nav-link");

// Arrange images in Galery page
galleryImages.forEach((img, i) => {
    i <= 2 ? img.classList.add("small-img") : img.classList.add("big-img");
})

// Анимация на логото
window.addEventListener("load", () => {
    // nav.classList.add("show-after-load");
    logo.classList.add("show-after-load");
})

// Анимираната долна черта от навигацията
navLinks.forEach(link => {
    if (link.textContent === title) {
        link.classList.add("show-dash");
    }
})

// Показване и скриване на повече или по-малко текст
const textArr = document.querySelectorAll(".wrap-text-article");
const btnArr = Array.from(document.querySelectorAll(".btn-show-text.lesson-page"));

btnArr.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (btn.innerText === "Виж повече") {
            btnArr.forEach(x => {
                if (x != e.target) {
                    x.previousElementSibling.classList.add("lesson");
                    x.innerText = "Виж повече";
                }
            })
            btn.previousElementSibling.classList.remove("lesson");
            btn.innerText = "Виж по-малко";
        } else if (btn.innerText === "Виж по-малко") {
            btn.previousElementSibling.classList.add("lesson");
            btn.innerText = "Виж повече";
        }
    })
});
