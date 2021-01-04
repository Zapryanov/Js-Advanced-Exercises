function persistence(num) {
    let result = num.toString().split("");
    let count = 0;
    
    while(result.length > 1) {
        result = result.reduce((acc, cur) => {
            acc *= cur;
            return acc;
        }, 1).toString().split("");
        count++;
    }
    return count;
}

// persistence(999);
// persistence(25);
// persistence(4);
persistence(39);