function Spy(object, method) {
    let originalMethod = object[method];

    const result = {
        count: 0
    }

    object[method] = function() {
        result.count++;
        return originalMethod.apply(object, arguments)
    }
    return result;
}

let obj = {
    method: () => "invoked"
}

let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();
console.log(spy) // { count: 3 }