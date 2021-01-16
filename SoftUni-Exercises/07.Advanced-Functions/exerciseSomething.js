// function test(a, b, c) {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(`element: ${arguments[i]} - index - ${i}`)
//     }
//     console.log(arguments);
// }

// test("a", "b", "c");

// ---------------------------------------------------

function toArray(x) {
    return Array.prototype.slice.call(x)
}

Function.prototype.curry = function() {
    if (arguments.length < 1) {
        return this;
    }

    let __method = this;
    let args = toArray(arguments);

    return function() {
        return __method.apply(this, args.concat(toArray(arguments)))
    };
};

function sumNumbers(x, y) {
    return x + y;
}

const addTo5 = sumNumbers.curry(5);
console.log(addTo5(5))

// function foo(param1, param2) {
//     console.log(param1, param2);
// };

// foo(1, 2);
// foo.curry(3)(4)

// -------------------------------------------------------

// "use strict"

// function foo(a, b, c) {
//     console.log(this, a, b, c);
// }

// function HRFDecorateWithParams(fn, param1, param2) {
//     return fn.bind("I am THIS", param1, param2);
// }

// const myFoo = HRFDecorateWithParams(foo, 1, 2);

// myFoo(3);
// foo(3);

