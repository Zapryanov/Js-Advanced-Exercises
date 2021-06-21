const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percenntage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

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

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    percenntage.innerText = "";

    if (fullCups === 0) {
        percenntage.style.visibility = "hidden";
        percenntage.style.height = 0;
    } else {
        percenntage.style.visibility = "visible";
        percenntage.style.height = `${fullCups / totalCups * 330}px`;
        percenntage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups / 1000)} liters`
    }
}