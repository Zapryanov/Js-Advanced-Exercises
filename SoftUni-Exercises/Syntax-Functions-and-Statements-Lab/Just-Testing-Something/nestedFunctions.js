function hypotenuse(n, m) {     // Outher function
    function square(num) {      // Inner function
        return num * num;
    }
    return Math.sqrt(square(n) + square(m));
}

console.log(hypotenuse(3, 4));