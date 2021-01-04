function validBraces(braces) {
    let arr = [];
    for (let i = 0; i < braces.length; i++) {
        let el = braces[i];
        if (el === "(" || el === "[" || el === "{") {
            arr.push(el);
        } else {
            if (arr.length === 0) {
                return false;
            }
            let lastValue = arr[arr.length - 1];
            if ( (el === ")" && lastValue === "(") || (el === "]" && lastValue === "[") || (el === "}" && lastValue === "{") ) {
                arr.pop();
            }
            else {
                break;
            }
        }
    }
    console.log(arr.length === 0);
    return arr.length === 0;
}

// validBraces("()");
// validBraces("[(])");
// validBraces("(){}[]");
validBraces("{([])}{[]}")