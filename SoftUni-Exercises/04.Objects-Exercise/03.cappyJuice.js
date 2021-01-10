// Here I use helper functions to make code more readable

function cappyJuice(arr) {
    let finalObj = {};

    function splitStr(e) {
        return e.split(" => ");
    }

    function fillBottles(a, b) {
        let juice = b[0];
        let qty = +b[1];
        if (!a[juice]) {
            a[juice] = 0;
        }
        a[juice] += qty;
        if (a[juice] >= 1000) {
            if (!finalObj[juice]) {
                finalObj[juice] = a[juice];
            } else {
                finalObj[juice] += qty;
            }
        }
        return a;
    }

    arr.map(splitStr)
        .reduce((acc, cur) => {
            fillBottles(acc, cur);
            return acc;
        }, {})

    return Object.entries(finalObj)
        .map(x => `${x[0]} => ${Math.floor(x[1] / 1000)}`)
        .join("\n")
};

console.log(cappyJuice(
    [
        "Kiwi => 234",
        "Pear => 2345",
        "Watermelon => 3456",
        "Kiwi => 4567",
        "Pear => 5678",
        "Watermelon => 6789"
    ]
));

// My previous solution

// function cappyJuice2(input) {
//     let finalObj = {};

//     input.reduce((acc, cur) => {
//         let [fruit, quantity] = cur.split(" => ");
//         quantity = Number(quantity);
//         if (!acc[fruit]) {
//             acc[fruit] = quantity;
//             if (acc[fruit] >= 1000) {
//                 finalObj[fruit] = quantity;
//             }
//         } else {
//             acc[fruit] += quantity;
//             if (!acc[fruit]) {
//                 finalObj[fruit] = quantity;
//             } else {
//                 finalObj[fruit] = acc[fruit]
//             }
//         }
        
//         return acc;
//     },{});
    
//     Object.entries(finalObj).forEach(x => console.log(`${x[0]} => ${Math.floor(x[1] / 1000)}`))
// };

// console.log(cappyJuice2(
//     [
//         "Kiwi => 234",
//         "Pear => 2345",
//         "Watermelon => 3456",
//         "Kiwi => 4567",
//         "Pear => 5678",
//         "Watermelon => 6789"
//     ]
// ));