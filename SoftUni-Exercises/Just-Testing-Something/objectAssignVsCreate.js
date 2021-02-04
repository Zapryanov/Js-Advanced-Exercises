const parent = {
    name: "Gosho",
    hasPan: true,
    write: function() {
        console.log(`My name is ${this.name}.`);
    }
}

const child1 = {
    name: "Ivan"
}

const objAssign = Object.assign({name: "Pesho"}, parent);

// Object.create(objPrototype), ще ни създаде нов обект, като 
// ще постави обекта образец за прототип на новосъздадения
const objCreate = Object.create(parent);

// Тук извикваме собствена функция и имаме
// КЛОНИРАНЕ на пропъртита и функции
objAssign.write();

// Тук през прототипа извикваме и имаме РЕФЕРЕНЦИЯ
objCreate.write();
