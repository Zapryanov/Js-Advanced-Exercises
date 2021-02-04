let model = function() {
    this.a = 1;
    this.b = 2;
}

let copy1 = new model();

model.prototype.d = 4;
model.prototype.e = 5;

copy1.c = 3;

console.log(copy1)