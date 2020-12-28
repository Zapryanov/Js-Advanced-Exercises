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

    arrItemsByQuerySelector.map(x => console.log("From convertedArray: ", x.innerHTML))
}