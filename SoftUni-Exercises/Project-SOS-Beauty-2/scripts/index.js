// Array.from(document.getElementsByClassName("link-nav-aside")).forEach(e => {
//     console.log(e.firstChild.textContent);
// })

// window.addEventListener("DOMContentLoaded", (e) => {
//     console.log("It is working!")
//     document.getElementsByTagName("body")[0].classList.add("load")
// })

const showButtons = Array.from(document.getElementsByClassName("more"));

showButtons.forEach(el => {

    el.addEventListener("click", function(e) {

        const x = e.target.parentNode.nextElementSibling;
    
        if (x.style.display === "" || x.style.display === "none") {
            x.style.display = "block";
            x.classList.add("show");
        }

// disabled all buttons when click for details
        showButtons.forEach(z => {
            z.disabled = true;
        });
        
        const close = Array.from(document.getElementsByClassName("closeIcon"));
        
        close.forEach(item => {
            item.addEventListener("click", function(ev) {
                
                ev.target.parentNode.style.display = "none";
                x.classList.add("close");

// enable all buttons when close popup
                showButtons.forEach(y => {
                    y.disabled = false;
                });

            })
        })
    
    
    })

})




