function sumByTown(arr) {
    let result =  arr.reduce((acc, cur, i, copyArr) => {
        if (i % 2 === 0) {
            if (!acc[cur]) {
                acc[cur] = 0;
            }
            acc[cur] += +copyArr[i + 1];
        }
        return acc;
    }, {});
    return JSON.stringify(result);
    // let result = {};
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) {
    //         if (result[arr[i]]) {
    //             result[arr[i]] += Number(arr[i + 1]);
    //         } else {
    //             result[arr[i]] = Number(arr[i + 1])
    //         }
    //     }
    // }
    // return result;
}

console.log(sumByTown(
    ["Sofia","20","Varna","3","Sofia","5","Varna","4"]
))

console.log(sumByTown(
    ["Sofia","20","Varna","3","sofia","5","varna","4"]
))