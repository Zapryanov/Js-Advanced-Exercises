function toStringExtension() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    
    Person.prototype.toString = function() {
        return `Person (name: ${this.name}, email: ${this.email})`
    }

    function Student(name, email, course) {
        Person.call(this, name, email);
        this.course = course;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.toString = function() {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;
    }
    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.toString = function() {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }

    return {
        Person,
        Student,
        Teacher
    }
}

let Person = toStringExtension().Person;
let firstPerson = new Person("Dimitar", "Georgiev");
console.log(firstPerson);
console.log(firstPerson.toString());

let Student = toStringExtension().Student;
let firstStudent = new Student("Stamat", "Petrov", "Js-Advanced");
console.log(firstStudent);
console.log(firstStudent.toString());

let Teacher = toStringExtension().Teacher;
let firstTeacher = new Teacher("Angelina", "Yordanova", "Mathmatics");
console.log(firstTeacher);
console.log(firstTeacher.toString());
