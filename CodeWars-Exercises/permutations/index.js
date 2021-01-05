// In this kata you have to create all permutations of an input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

// permutations('a'); - ['a']
// permutations('ab'); - ['ab', 'ba']
// permutations('aabb'); - ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {
    if (!string || typeof string !== "string"){
        return "Please enter a string"
    } else if (string.length < 2 ){
        return string
    }

    let permutationsArray = [] 
    
    for (let i = 0; i < string.length; i++){
        let char = string[i]

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of permutations(remainingChars)){
            permutationsArray.push(char + permutation) }
        }
    return permutationsArray
}

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
console.log(permutations("aabb")); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// BETTER SOLUTION than my

// function permutations(string) {
//     return (string.length == 1) ? [string] : string.split('').map(
//        (e, i) => permutations(string.slice(0,i) + string.slice(i+1)).map((e2) => e+e2)
//     ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
// }