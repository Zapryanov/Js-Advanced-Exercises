function arenaTier(arr) {
    let obj = arr.reduce((acc, cur) => {
        if (cur !== "Ave Cesar") {
            let line = cur.split(/\s+->\s+|\s+vs\s+/g);
            if (line.length === 3) {
                let [ name, technique, skill ] = line;
                skill = Number(skill);
                if (!acc[name]) {
                    acc[name] = {};
                }
                if (!acc[name][technique]) {
                    acc[name][technique] = skill;
                } else {
                    if (acc[name][technique] < skill) {
                        acc[name][technique] = skill;
                    }
                }
            } else {
                let [firstGladiator, secondGladiator] = line;
                let gladiators = Object.keys(acc);
                if (gladiators.includes(firstGladiator) && gladiators.includes(secondGladiator)) {
                    let techniqueFirst = Object.keys(acc[firstGladiator]);
                    let techniqueSecond = Object.keys(acc[secondGladiator]);
                    let totalPowerFirst = Object.values(acc[firstGladiator]).reduce((acc, cur) => acc + Number(cur), 0);
                    let totalPowerSecond = Object.values(acc[secondGladiator]).reduce((acc, cur) => acc + Number(cur), 0);
                    
                    for (let value of techniqueFirst) {
                        if (techniqueSecond.includes(value)) {
                            if (totalPowerFirst > totalPowerSecond) {
                                delete acc[secondGladiator];
                            } else if (totalPowerSecond > totalPowerFirst) {
                                delete acc[firstGladiator];
                            }
                        }
                    }
                }
            }
        }
        return acc;
    }, {})

    let result = Object.entries(obj);
    
    let sumEachGladiator = result.reduce((acc, cur) => {
        let name = cur[0];
        let sum = Object.values(cur[1]).reduce((a, b) => a + b, 0);
        acc[name] = sum;
        return acc;
    }, {});

    result.sort((a, b) => sumEachGladiator[b[0]] - sumEachGladiator[a[0]] || a[0].localeCompare(b[0]))
    .map(line => {
        console.log(`${line[0]}: ${sumEachGladiator[line[0]]} skill`);
        Object.entries(line[1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(t => console.log(`- ${t[0]} <!> ${t[1]}`))
    })
};

arenaTier(
    [
        "Pesho -> Duck -> 400",
        "Julius -> Shield -> 150",
        "Gladius -> Heal -> 200",
        "Gladius -> Support -> 250",
        "Gladius -> Shield -> 250",
        "Pesho vs Gladius",
        "Gladius vs Julius",
        "Gladius vs Gosho",
        "Ave Cesar"
    ]
);