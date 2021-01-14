function equalNeighbors(matrixTwoD) {
    let count = 0;
    
    matrixTwoD.reduce((acc, cur, i) => {

// Here I use "new Set()" to remove duplicates and then I compare
// the length of original array vs new array returned by new Set(). 
// If the result is greater than zero, the value will add to the variable "count".

        let horizontalMatches = [...new Set(cur)].length;
        count += cur.length - horizontalMatches;        
    }, 0);
    
    let columns = matrixTwoD[0].length

    // Since the two-dimensional array does not have the same number of rows and columns,
    // I have to do a "for-loop" to find the vertical matches.
    
    for (let i = 0; i < columns; i++) {
        let selectVerticals = matrixTwoD.map((el, idx) => el = matrixTwoD[idx][i]);
        let verticalMatches = [...new Set(selectVerticals)].length;
        count += selectVerticals.length - verticalMatches;
    }

    return count;
}

console.log(equalNeighbors(
    [
        ["test", "yes", "yo", "ho"],
        ["well", "done", "yo", "6"],
        ["not", "done", "yet", "5"]
    ]
));