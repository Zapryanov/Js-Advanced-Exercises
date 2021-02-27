(function() {
    document.getElementById("test").addEventListener("click", (e) => {
        console.log(e.target.textContent)
    });

    let nails = Array.from(document.getElementsByClassName("test2"))[0];

    nails.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
}())