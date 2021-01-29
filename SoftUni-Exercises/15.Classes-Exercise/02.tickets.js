function solve(arr, criteria) {
    class Ticket {
        _price;
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        get price() {
            return this._price;
        }

        set price(value) {
            this._price = Number(value);
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