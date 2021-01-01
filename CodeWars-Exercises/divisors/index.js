function divisors(integer) {
    let arr = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            arr.push(i);
        }
    }
    let output = arr.length === 0 ? `${integer} is prime` : arr;
    return output;
};

divisors(15);
divisors(12);
divisors(13);
