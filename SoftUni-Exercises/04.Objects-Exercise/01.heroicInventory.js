function heroicInventory(arr) {
    let result = arr
        .reduce((acc, cur) => {
            let [ name, level, ...items] = cur.split(/\s+\/\s+|,\s+/g);
            level = +level;
            let obj = {name, level, items};
            acc.push(obj);
            return acc;
        }, []);
    return JSON.stringify(result);
}

console.log(heroicInventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
))