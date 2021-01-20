let x = (function() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
})();

x()
x()
x()
x()
x()
x()
x()