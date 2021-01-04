function isPangram(string){
    let matchLetters = string.toLowerCase().match(/[a-zA-Z]/g);
    let uniqLetters = new Set(matchLetters);
    let result = [...uniqLetters].sort((a, b) => a.localeCompare(b));
    return result.length === 26 ? true : false;
}

isPangram("The quick brown fo_x jum8ps ov-er the lazy @ dog_.");
// isPangram("The quick brown fox jumps over the lazy dog.");