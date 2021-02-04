class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const personInstance = new Person("man", 32);
// console.log(personInstance);

class Teacher extends Person {
    constructor(name, gender, age, subject) {
        super(name, gender, age);
        this.age = age;
        this.subject = subject;
    }
}

class Student extends Teacher {
    constructor(name, gender, grade) {
        super(name, gender);
        this.grade = grade;
    }

    info() {
        console.log(`My name is ${this.name}. I'm a ${this.gender}. I'm an ${this.grade}-th grade student.`);
    }
}

const studentInstance = new Student("Ivan", "man", 17);
studentInstance.info();

const teacherInstance = new Teacher("Antonia", "woman", 25, "Js-programmer");
// console.log(teacherInstance);

Object.entries(teacherInstance).forEach(x => console.log(`${x[0]}: ${x[1]}`));

console.log("-----------------")

teacherInstance.speak()
