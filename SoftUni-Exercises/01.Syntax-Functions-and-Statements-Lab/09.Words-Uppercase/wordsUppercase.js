function wordsUppercase(str) {
    return str.match(/\w+/gim).join(", ").toUpperCase();
}

console.log(wordsUppercase("Hi, how are you?"));