function squareDigits(num){
    return Number(num.toString().split("").map(char => char *= char).join(""));
}

squareDigits(9119);