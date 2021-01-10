function jsonTable(arr) {
    let output = `<table>\n`;
    output += arr.reduce((acc, cur) => {
        cur = JSON.parse(cur);
        acc += `<tr>\n<td>${cur.name}</td>\n<td>${cur.position}</td>\n<td>${cur.salary}</td>\n</tr>\n`;
        return acc;
    }, "");
    output += `</table>`;
    return output;
}

console.log(jsonTable(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
))