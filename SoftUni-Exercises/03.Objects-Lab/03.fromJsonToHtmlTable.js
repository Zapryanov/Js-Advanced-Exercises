function fromJSONToHTMLTable(input) {

    function replaceSymbol(str) {
        const string = str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
        return string;
    }

    function tableHeader(keys){
        const output = '<table>\n <tr>';
        return keys.reduce((acc, curr) => {
            acc += `<th>${curr}</th>`;
            return acc;
        }, output) + '</tr>\n';
    }

    function isNanValue(value) {
        if(isNaN(value)){
            return replaceSymbol(value);
        }
        return value;
    }

    const arr = JSON.parse(input);
    const keys = Object.keys(arr[0]);
    let output = tableHeader(keys);
    for (const element of arr) {
        output += ' <tr>';
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                output += `<td>${isNanValue(element[key])}</td>`; 
            }
        }
        output += '</tr>\n';
    }
    output += '</table>';

    return output;
}

console.log(fromJSONToHTMLTable(
        [
            '[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
        ]
    )
)