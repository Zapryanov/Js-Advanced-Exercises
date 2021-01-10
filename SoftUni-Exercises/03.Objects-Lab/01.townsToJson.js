function townToJson(arr) {
    clearSpace = e => {
        return e !== "";
    }
    const regex = /\s*\|\s*/gm;
    const headers = arr.shift().split(regex).filter(clearSpace);

    let result = arr.reduce((acc, cur) => {
        let [town, latitude, longitude] = cur.split(regex).filter(clearSpace);
        latitude = Math.round(latitude * 100) / 100;
        longitude = Math.round(longitude * 100) / 100;
// This is hardcode approach with keys
        // let curObj = {"Town": town, "Latitude": Number(latitude), "Longitude": Number(longitude)};
// ----------------------------------------------------------------------------------------------------
        let curObj = {};
        curObj[headers[0]] = town;
        curObj[headers[1]] = Number(latitude);
        curObj[headers[2]] = Number(longitude);
        
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