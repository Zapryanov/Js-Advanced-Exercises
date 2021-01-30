function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return arr.reduce((acc, cur) => {
        const [ destination, price, status ] = cur.split("|");
        acc.push(new Ticket(destination, price, status));
        return acc;
    },[]).sort((a, b) => {
        return typeof a[criteria] !== "string" ? a[criteria] - b[criteria] : a[criteria].localeCompare(b[criteria])
    })
}

console.log(solve(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed"
    ],
    "destination"
));