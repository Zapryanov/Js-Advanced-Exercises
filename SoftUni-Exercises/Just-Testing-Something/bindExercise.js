const obj = {
    x: 38,
    getX: function() {
        return this.x;
    }
}

const unBoundGetX = obj.getX;
console.log(unBoundGetX());

const boundGetX = unBoundGetX.bind(obj);

console.log(boundGetX());