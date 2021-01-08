function coffieMashine(mainArr) {
    let obj = {
        "caffeine": 0.8,
        "decaf": 0.9,
        "tea": 0.8
    };

    let incomeReport = 0;

    for (let i = 0; i < mainArr.length; i++) {
        const curArr = mainArr[i].split(", ");
        let sum = 0;

        let insertedCoins = +curArr[0];
        let drink = curArr[1];
        let typeDrink = "";

        if (curArr.includes("caffeine") || curArr.includes("decaf")) {
            typeDrink = curArr[2];
        } else {
            typeDrink = "tea";
        }

        sum += obj[typeDrink];

        if (curArr.includes("milk")) {
            let milkPrice = (obj[typeDrink] * 0.1).toFixed(1);
            sum += +milkPrice;
        }

        if (curArr[curArr.length - 1] > 0) {
            sum += 0.1;
        }

        if (insertedCoins >= sum) {
            console.log(`You ordered ${drink}. Price: $${sum.toFixed(2)} Change: $${(insertedCoins - sum).toFixed(2)}`);
            incomeReport += sum;
        } else {
            console.log(`Not enough money for ${drink}. Need $${(sum - insertedCoins).toFixed(2)} more`);
        }
    }
    console.log(`Income Report: $${incomeReport.toFixed(2)}`);

}

coffieMashine([
    "1.00, coffee, caffeine, milk, 4",
    "0.40, tea, milk, 2", 
    "1.00, coffee, decaf, 0"
]);

console.log("-------------------------------------------")

coffieMashine([
    "8.00, coffee, decaf, 4",
    "1.00, tea, 2"
])