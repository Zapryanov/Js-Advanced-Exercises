function storeCatalogue(arr) {
    let obj = {};

    function splitElements(x) {
        return x.split(" : ");
    };

    function sortAlphabetically(a, b) {
        return a[0].localeCompare(b[0]);
    };

    function arrangedAlphabetically(a, prop) {
        let firstChar = prop[0][0];
        let item = prop[0];
        let num = +prop[1];

        if (!a[firstChar]) {
            a[firstChar] = {};
        }
        a[firstChar][item] = num;

        return a;
    };

    let result = arr
        .map(splitElements)
        .sort(sortAlphabetically)
        .reduce((acc, cur) => {
            arrangedAlphabetically(acc, cur);
            return acc;
        }, {})

    Object.entries(result).map(el => {
        console.log(el[0]);
        Object.entries(el[1]).map(x => console.log(`  ${x[0]}: ${x[1]}`));
    });
};

storeCatalogue(
    [
        "Appricot : 20.4",
        "Fridge : 1500",
        "TV : 1499",
        "Deodorant : 10",
        "Boiler : 300",
        "Apple : 1.25",
        "Anti-Bug Spray : 15",
        "T-Shirt : 10"
    ]
);

// Previous my solution but not good readable

// function storeCatalogue2(input) {
//     let mainObj = {};
//     input.reduce((acc, cur) => {
//         let [name, price] = cur.split(" : ");
//         let propMainObj = name[0];
//         if (!mainObj[propMainObj]) {
//             mainObj[propMainObj] = {};
//         }
//         mainObj[propMainObj][name] = price;
//         acc.push(mainObj);

//         return acc;
//     },[])

//     Object.entries(mainObj)
//         .sort((a, b) => a[0].localeCompare(b[0]))
//         .forEach(line => {
//             console.log(line[0]);
//             let entriesInnerObj = Object.entries(line[1])
//                 .sort((x, y) => x[0].localeCompare(y[0]))
//                 .forEach(tuple => console.log(` ${tuple[0]}: ${tuple[1]}`))
//         });
    
// }

// storeCatalogue2(
//     [
//         "Appricot : 20.4",
//         "Fridge : 1500",
//         "TV : 1499",
//         "Deodorant : 10",
//         "Boiler : 300",
//         "Apple : 1.25",
//         "Anti-Bug Spray : 15",
//         "T-Shirt : 10"
//     ]
// );