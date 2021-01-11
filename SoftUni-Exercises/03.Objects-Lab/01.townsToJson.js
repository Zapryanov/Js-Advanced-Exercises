function townToJson(arr) {
    clearSpace = e => {
        return e !== "";
    }
    const regex = /\s*\|\s*/gm;

    let result = arr.slice(1).reduce((acc, cur) => {
        let [Town, Latitude, Longitude] = cur.split(regex).filter(clearSpace);

        Latitude = Math.round(Latitude * 100) / 100;
        Longitude = Math.round(Longitude * 100) / 100;

        let curObj = {Town, Latitude, Longitude};
        acc.push(curObj);

        return acc;
    }, []);

    return JSON.stringify(result);
}

console.log(townToJson(
    [
        "| Town | Latitude | Longitude |",
        "| Sofia | 42.696552 | 23.32601 |",
        "| Beijing | 39.913818 | 116.363625 |"
    ]
))