function outerFunc() {
    let outerVar = "Stamat";

    return function innerFunc() {
        console.log(outerVar);
    }
};

let returnedInnerFunction = outerFunc();

returnedInnerFunction();