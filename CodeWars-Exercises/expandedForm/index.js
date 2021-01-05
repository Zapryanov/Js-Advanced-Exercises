// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); - Should return '10 + 2'
// expandedForm(42); - Should return '40 + 2'
// expandedForm(70304); - Should return '70000 + 300 + 4'

function expandedForm(num) {
    num = num.toString().split("");

    function addZero(strLen) {
        return "0".repeat(strLen);
    }

    return num.reduce((acc, cur, i) => {
        cur > 0 ? acc.push(`${cur + addZero(num.length - i - 1)}`) : "";
        return acc;
    }, []).join(" + ");
}

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

// THE BEST Solution from top student --------------------------

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// My first solution but longer ----------------------------------

// function secondLongerSolution(num) {
//     let str = "";

//     function addZero(strLen) {
//         let zeros = "";
//         for (let i = 0; i < strLen; i++) {
//             zeros += "0";
//         }
//         return zeros;
//     }

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > 0) {
//             str += `${num[i] + addZero(num.length - i - 1)} + `;
//         }
//     }

//     console.log(str.slice(0, str.length - 2));
//     return str.slice(0, str.length - 2)

// }
