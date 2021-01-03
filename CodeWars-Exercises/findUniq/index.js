// The fastest solution, the best performance to find
// a single non-repeating element in an array

function findUniq(arr) {
    arr.sort((a,b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

// Second place good preformance

function findUniqSecondFunction(arr) {


    var n = arr.length;
    var result = [];

    function nonrep() {
        for (var i = 0; i < n; i++) {
            for (var j = 0 ; j < n; j++)
            if (i != j && arr[i] == arr[j])
                break;
            if(j == n)
                result.push(arr[i]);
        }
        return result[0];
    }
    console.log(nonrep())
}

findUniq([ 0, 1, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 3, 10, 3, 3, 3 ]);
findUniq(["asd", "asd", "bds", "asd"])