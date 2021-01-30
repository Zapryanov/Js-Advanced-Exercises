function Stringer(string, length) {

// This is analogous to the constructor in classes.
    this.innerString = string;
    this.innerLength = length;
// ---------------------------------------------------

// These all below are like methods in classes
    Stringer.prototype.increase = function(num) {
        this.innerLength += num;
    }

    Stringer.prototype.decrease = function(num) {
        this.innerLength = Math.max(0, this.innerLength - num);
    }

    Stringer.prototype.toString = function() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + "...";
        }
        return this.innerString;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test