function extractUniqueWords(arr) {
    let result =  arr
        .join("")
        .toLowerCase()
        .match(/\w+/gim)
    return [...new Set(result)].join(", ")
}

console.log(extractUniqueWords(
    [
        "Lorem ipsum dolor Lorem sit amet, consectetur adipiscing elit.",
        "Pellentesque quis hendrerit dui.",
        "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
        "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
        "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.",
        "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
        "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
        "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."
    ]
));


// Long solution with new Set()

// function extractUniqueWords(arr) {    
//     let uniduqSet = new Set();

//     arr.reduce((acc, cur) => {
//         let eachSentence = cur.toLowerCase().match(/[a-zA-Z]+/gm)
//         eachSentence.map(x => uniduqSet.add(x))
//         return acc;
//     }, [])

//     return Array.from(uniduqSet).join(", ")
// }

// console.log(extractUniqueWords(
//     [
//         "Lorem ipsum dolor Lorem sit amet, consectetur adipiscing elit.",
//         "Pellentesque quis hendrerit dui.",
//         "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
//         "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
//         "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.",
//         "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
//         "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
//         "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."
//     ]
// ));

// Second solution

// function extractUniqueWords(arr) {    
//     return arr.reduce((acc, cur) => {
//         let eachSentence = cur.toLowerCase().match(/[a-zA-Z]+/gm)
//         eachSentence.map(x => {
//             if(!acc.includes(x)) {
//                 acc.push(x)
//             }
//         })
//         return acc;
//     }, []).join(", ")
// }

// console.log(extractUniqueWords(
//     [
//         "Lorem ipsum dolor Lorem sit amet, consectetur adipiscing elit.",
//         "Pellentesque quis hendrerit dui.",
//         "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
//         "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
//         "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.",
//         "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
//         "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
//         "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."
//     ]
// ));