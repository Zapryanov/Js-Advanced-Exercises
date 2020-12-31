function XO(str) {
    const o = str.split("").filter(e => e.toLowerCase() === "o").length;
    const x = str.split("").filter(e => e.toLowerCase() === "x").length;
    return o === x;
}

XO("zzpppzzzwra");