class Person {
    constructor(gender, age) {
        this.gender = gender;
        this.age = age;
    }
}

const personInstance = new Person("man", 32);
// console.log(personInstance);

class Teacher extends Person {
    constructor(gender, age, name, subject) {
        super(gender, age);
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
}

const teacherInstance = new Teacher("woman", 25, "Antonia", "Js-programmer");
// console.log(teacherInstance);

Object.entries(teacherInstance).forEach(x => console.log(`${x[0]}: ${x[1]}`));
