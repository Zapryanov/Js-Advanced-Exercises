function clickMe() {
    const itemsByClassName = document.getElementsByClassName("item");
    const itemsByQuerySelector = document.querySelectorAll(".item");

    console.log(itemsByClassName);
    console.log(itemsByQuerySelector);

    for (let i = 0; i < itemsByQuerySelector.length; i++) {
        console.log(itemsByQuerySelector[i].innerHTML);
    }

    itemsByQuerySelector.forEach(x => console.log(x.innerHTML));

    let arrItemsByQuerySelector = Array.from(itemsByQuerySelector);

    arrItemsByQuerySelector.map(x => console.log("From convertedArray: ", x.innerHTML));

    function foo(x) {
        return x * x;
    }

    function bar(y) {
        return foo(y + 2);
    }

    // bar(8);

    let divText = document.querySelector(".result");
    divText.textContent = bar(18)
}