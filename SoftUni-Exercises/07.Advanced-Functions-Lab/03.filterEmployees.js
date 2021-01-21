function filterEmployees(data, criteria) {
    let [ key, value ] = criteria.split("-");

    return JSON.parse(data)
        .reduce((acc, cur) => {
            value === "all" ? 
                acc.push(`${cur.first_name} ${cur.last_name} - ${cur.email}`) :
                acc.push(cur[key] === value ? `${cur.first_name} ${cur.last_name} - ${cur.email}` : "")
            return acc;
        },[])
        .filter(x => x !== "")
        .map((el, i) => `${i}. ${el}`).join("\n");
}

console.log(filterEmployees(`
    [
        {
            "id": "1",
            "first_name": "Kaylee",
            "last_name": "Johnson",
            "email": "k0@cnn.com",
            "gender": "Female"
        }, 
        {
            "id": "2",
            "first_name": "Kizzee",
            "last_name": "Johnson",
            "email": "kjost1@forbes.com",
            "gender": "Female"
        },
        {
            "id": "3",
            "first_name": "Evanne",
            "last_name": "Maldin",
            "email": "emaldin2@hostgator.com",
            "gender": "Male"
        },
        {
            "id": "4",
            "first_name": "Evanne",
            "last_name": "Johnson",
            "email": "ev2@hostgator.com",
            "gender": "Male"
        }
    ]`
    ,"last_name-Johnson")
);