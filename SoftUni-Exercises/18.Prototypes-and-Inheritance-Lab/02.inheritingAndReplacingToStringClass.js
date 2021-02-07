function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString().substring(0, super.toString().length - 1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().substring(0, super.toString().length - 1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const personInstanceOne = toStringExtension().Person;
const personOne = new personInstanceOne("Ivan", "Petrov");

console.log(personOne.toString());

const teacherInstanceOne = toStringExtension().Teacher;
const teacherOne = new teacherInstanceOne("Ivaylo", "Papazov", "Js-Advanced");

console.log(teacherOne.toString());

const studentInstance = toStringExtension().Student;
const studentOne = new studentInstance("Dimitar", "Georgiev", "Electricity");

console.log(studentOne.toString());