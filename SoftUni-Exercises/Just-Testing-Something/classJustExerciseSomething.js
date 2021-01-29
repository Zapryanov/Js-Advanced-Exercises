class Person {
    constructor(studentClass, firstName, lastName, grades) {
        this.studentClass = studentClass;
        this.firstName = firstName;
        this.lastName = lastName;
        this._grades = grades;
    }

    get grades() {
        return this._grades;
    }

    get gradesCount() {
        return this._grades.length;
    }

    addGrade(grade) {
        this._grades.push(grade)
    }

}

let pesho = new Person(5, "Pesho", "Petrov", [5, 6, 3, 5, 6, 4, 6, 6]);
console.log(pesho.grades);
pesho.addGrade(5);
console.log(pesho.grades);