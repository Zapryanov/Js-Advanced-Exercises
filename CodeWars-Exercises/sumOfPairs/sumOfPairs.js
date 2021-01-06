function sumPairs(ints, s) {
    var seen = {}

    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) {
        return [s - ints[i], ints[i]];
      }
      seen[ints[i]] = true;
    }
}

console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]

// ------------------------------------------------------------

// Next Good Solution Working:

// function sumPairs(ints, s) {
//     if (ints.length < 2) {
//       return undefined;
//     }
//     let intSet = new Set()
//     intSet.add(ints[0]);
//     for (let i = 1; i < ints.length; ++i){
//       let needed = s - ints[i];
//       if (intSet.has(needed)){
//         return [needed , ints[i]];
//       }
//       intSet.add(ints[i]);
//     }
//     return undefined;
// }

// -------------------------------------------------------------

// Good solution but doesn't pass tests about very long 
// input array something like over milions elements

// function sumPairs(ints, s) {
//     let obj = {};

//     for (let i = 0; i < ints.length; i++) {

//         let first = ints[i];
//         let indexFirst = ints.slice(i).findIndex(e => e === first);
//         let second = ints.slice(i + 1).find(e => s - e === first);
//         let indexSecond = ints.slice(i + 1).findIndex(e => e === second);

//         if (first + second === s) {
//             obj[`${first}:${second}`] = indexFirst + indexSecond;
//         }
//     }

//     if (Object.keys(obj).length === 0) {
//         return undefined;
//     } else {
//         return Object.entries(obj)
//             .sort((a, b) => a[1] - b[1])
//             .shift()[0]
//             .split(":")
//             .map(Number)
//     }
// }