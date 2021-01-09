function solve(input) {
    const arr = JSON.parse(input);
    const [name, score] = Object.keys(arr[0]);
    
    function escapeHtml(str) {
        const string = str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return string;
    }

    let result = `<table>
    <tr><th>${name}</th><th>${score}</th></tr>\n`;

    result = arr.reduce((acc, cur) => {
        acc += `<tr><td>${escapeHtml(cur.name)}</td><td>${cur.score}</td></tr>\n`;
        return acc;
    },result)

    result += `</table>`;
    
    console.log(result)
    
}

solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);