class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(newRat) {
        if (newRat instanceof Rat) {
            this.unitedRats.push(newRat);
        }
    }

    getRats() {
        return [...this.unitedRats];
    }

    toString() {
        return `${this.name}\n${this.unitedRats.map(x => `##${x}`).join("")}`
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
console.log(firstRat.getRats()); // []
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: &#39;George&#39;, unitedRats: [] },
// Rat { name: &#39;Alex&#39;, unitedRats: [] } ]
console.log(firstRat.toString());
// Peter
// ##George
// ##Alex