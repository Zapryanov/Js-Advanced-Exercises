(function dropdownMenu() {
    let chooseBtn = document.getElementById("dropdown");
    let ul = document.getElementById("dropdown-ul");
    let box = document.getElementById("box");
    
    chooseBtn.addEventListener("click", clickChooseBtn);

    function clickChooseBtn() {
         if (ul.style.display === "block") {
             ul.style.display = "none";
             box.style.backgroundColor = "black";
             box.style.color = "white";
         } else {
             ul.style.display = "block";
         }
    }

    ul.addEventListener("click", clickUl);

    function clickUl(e) {
        if (e.target.className.includes("deep")) {
            box.style.backgroundColor = e.target.textContent;
            box.style.color = "black";
        }
    }
})();