function classHierarchy() {

    objMetrics = {
        m: 0.01,
        cm: 1,
        mm: 10
    }
    
    class Figure {
        constructor(units = "cm") {
            this._units = units;
        }

        get units() {
            return this._units;
        }

        set units(value) {
            this._units = value;
        }

        changeUnits(unit) {
            return this.units = unit;
        }

        calcWithUnit(x) {
            return x * objMetrics[this.units];
        }

    }

    class Circle extends Figure {
    
        constructor(radius, ...rest) {
            super(...rest);
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.calcWithUnit(this.radius) * this.calcWithUnit(this.radius);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.calcWithUnit(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, ...rest) {
            super(...rest);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.calcWithUnit(this.width) * this.calcWithUnit(this.height);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.calcWithUnit(this.width)}, height: ${this.calcWithUnit(this.height)}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let Circle = classHierarchy().Circle;
let Rectangle = classHierarchy().Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
