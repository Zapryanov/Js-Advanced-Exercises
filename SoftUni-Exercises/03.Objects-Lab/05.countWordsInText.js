function countWordsInText(arr) {
    const arrayFromWords = arr[0].match(/\w+/g);
    const result = arrayFromWords.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0;
        }
        acc[cur] += 1;
        return acc;
    }, {});
    
    return JSON.stringify(result);
}

console.log(countWordsInText(
    ["JS devs use Node.js for_ server-side JS.-- JS for devs"]
))