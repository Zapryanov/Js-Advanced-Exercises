// IFEE and closure inside

let y = (function() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
})();

y()
y()
y()
y()
y()
y()
y()

// Only closure

function x() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
};

let result = x();

result()
result()
result()
result()
result()
result()
result()