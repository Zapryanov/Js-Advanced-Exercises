(function() {
    const numOne = document.getElementById("num1");
    const numTwo = document.getElementById("num2");
    const result = document.getElementById("result");
    const sumBtn = document.getElementById("sumButton");
    const subtractBtn = document.getElementById("subtractButton");

    sumBtn.addEventListener("click", sum);
    subtractBtn.addEventListener("click", subtract);

    function sum() {
        if (numOne.value !== "" && numTwo.value !== "") {
            result.value = +numOne.value + +numTwo.value;
        }
        numOne.value = "";
        numTwo.value = "";
    }

    function subtract() {
        if (numOne.value !== "" && numTwo.value !== "") {
            result.value = +numOne.value - +numTwo.value;
        }
        numOne.value = "";
        numTwo.value = "";
    }
})();