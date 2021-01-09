function cityMarkets(arr) {
    let obj = arr.reduce((acc, cur) => {
        const [ town, item, quantity, amount ] = cur.split(/\s+->\s+|\s+:\s+/g);
        let price = Number(quantity) * Number(amount);

        if (!acc[town]) {
            acc[town] = {};
            acc[town][item] = price;
        } else {
            if (!acc[town][item]) {
                acc[town][item] = price;
            } else {
                acc[town][item] += price;
            }
        }
        return acc;
    }, {});
    
    Object.entries(obj).forEach(x => {
        console.log(`Town - ${x[0]}`);
        Object.entries(x[1]).forEach(el => {
            console.log(`$$$${el[0]} : ${el[1]}`)
        })
    })
}

cityMarkets(
    [
        "Sofia -> Laptops HP -> 200 : 2000",
        "Sofia -> Raspberry -> 200000 : 1500",
        "Sofia -> Audi Q7 -> 200 : 100000",
        "Montana -> Portokals -> 200000 : 1",
        "Montana -> Qgodas -> 20000 : 0.2",
        "Montana -> Chereshas -> 1000 : 0.3"
    ]
);