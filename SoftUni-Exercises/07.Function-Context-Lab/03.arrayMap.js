function arrayMap(arr, func) {
    
    return arr.reduce((acc, cur) => acc.concat(func(cur)),[]);

    // return arr.reduce((acc, cur) => {
    //     acc.push(func(cur));
    //     return acc;
    // },[]);
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item) => item * 2)); // [ 2, 4, 6, 8, 10 ]

// let letters = ["a","b","c"];
// console.log(arrayMap(letters,(l) => l.toLocaleUpperCase())) // [ "A", "B", "C" ]