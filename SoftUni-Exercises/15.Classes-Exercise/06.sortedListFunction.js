// 50/50 in Judge system

function List() {
    this.arr = [];
    this.size = 0;

    List.prototype.add = function(el) {
        this.arr.push(el);
        this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }

    List.prototype.remove = function(i) {
        if (i >= 0 && i < this.arr.length) {
            this.arr.splice(i, 1);
            this.size = this.arr.length;
        }
    }

    List.prototype.get = function(i) {
        if (i >= 0 && i < this.arr.length) {
            return this.arr[i];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log(list.valueOf())