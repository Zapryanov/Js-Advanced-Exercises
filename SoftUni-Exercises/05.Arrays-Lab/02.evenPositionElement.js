function evenPositionElement(arr) {
    return arr.filter((a, i) => i % 2 === 0).join(" ");
}

console.log(evenPositionElement(["20", "30", "40"]));