function solution(x) {
    return function(y) {
        return x + y;
    }
}

let add5 = solution(5);
console.log(add5(3));
console.log(add5(10));
console.log(add5(7));