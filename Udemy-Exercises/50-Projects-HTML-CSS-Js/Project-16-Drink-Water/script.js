const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percenntage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, i) => {
    cup.addEventListener("click", () => highlightCups(i))
})

function highlightCups(i) {
    if (
        smallCups[i].classList.contains("full") 
        && 
        !smallCups[i].nextElementSibling.classList.contains("full")
    ) {
        i--;
    }

    smallCups.forEach((cup, i2) => {
        if (i2 <= i) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    })
}