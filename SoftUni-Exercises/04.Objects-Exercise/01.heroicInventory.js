function heroicInventory(arr) {
    let result = arr
        .map(line => line.split(/\s+\/\s+|,\s+/g))
        .reduce((acc, cur) => {
            let [ name, level, ...items] = cur;
            let obj = {"name": name, "level": Number(level), "items": [...items]};
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

// function heroicInventory(arr) {
//     let result = arr.reduce((acc, cur) => {

// // Този начин на сплитване ни позволява да сплитнем по "/" наклонената черта и
// // всичко останало, което не се "match-ва" да стане на масив
//             let [ name, level, ...items] = cur.split(" / ");
// // ---------------------------------------------------------------------------
//             items = items.length > 0 ? items.join(" ").split(", ") : [];
//             acc.push({name, "level": +level, items});
//             return acc;
//         }, []);
        
//     return JSON.stringify(result);
// }

// console.log(heroicInventory(
//     [
//         "Isacc / 25 / Apple, GravityGun",
//         "Derek / 12 / BarrelVest, DestructionSword",
//         "Hes / 1 / Desolator, Sentinel, Antara"
//     ]
// ));