function systemComponents(arr) {
    let result = arr
        .reduce((acc, cur) => {
            let [ system, component, subcomponent ] = cur.split(" | ");
            if (!acc[system]) {
                acc[system] = {};
            }
            if (!acc[system][component]) {
                acc[system][component] = [];
            }
            acc[system][component].push(subcomponent);
            return acc;
        }, {})

        let data = Object.entries(result);
        data.map(x => x[1] = Object.entries(x[1]).sort((a, b) => b[1].length - a[1].length))
        data.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))

        data.map(system => {
            console.log(system[0]);
            system[1].map(component => {
                console.log(`|||${component[0]}`);
                component[1].map(subcomponent => console.log(`||||||${subcomponent}`))
            })
        })
}

systemComponents(
    [
        "SULS | Main Site | Home Page",
        "SULS | Main Site | Login Page",
        "SULS | Main Site | Register Page",
        "SULS | Judge Site | Login Page",
        "SULS | Judge Site | Submittion Page",
        "Lambda | CoreA | A23",
        "SULS | Digital Site | Login Page",
        "Lambda | CoreB | B24",
        "Lambda | CoreA | A24",
        "Lambda | CoreA | A25",
        "Lambda | CoreC | C4",
        "Indice | Session | Default Storage",
        "Indice | Session | Default Security"
    ]
)