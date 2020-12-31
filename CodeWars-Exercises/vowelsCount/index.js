function getCount(str) {
    var vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    
    str.split("").forEach(char => {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    });
    return vowelsCount;
}

getCount("heppy new year from our friends");