// Function context

function solve() {
    console.log("Some function call!");
    return this;
}

console.log(solve() === global);

// -------------------------
// THIS in Method

let person = {
    name: "Pesho",
    age: 20,
    speak: speak,
    whatsThis: function() {
        return this;
    }
}

function speak(text) {
    return `${this.name} ${text}!`;
}

// Here THIS is "person"- Object and "this.name = 'Pesho'",
// because we call function "speak" through the object "person"
console.log(person.speak("speaks too loud"));

// Here THIS is Global Object and "this.name" is not part of the
// Global Object, that's why this.name = undefined, because we call
// directly function "speak". Here THIS is global-object
console.log(speak("speaks too loud"));

// THIS.name is undefind because now we call function "speek" globally. 
// With this assignment we pick out the method "speak" outside the context
// of Object - Person. Now it has global scope. We turn method "speak"
// into ORDINARY Function. Every Ordinary function has GLOBAL SCOPE
let globalSpeak = person.speak;
console.log(globalSpeak("Hello from global!"));

// Person.watsThis - return "person-object" 
console.log(person.whatsThis());

//--------------------------
// Using arrow function we use upper context;
// Arrow function doesn't have own context;
// The Arrow function automatically transfers the parent context to itself!!!
let testObj = {
    name: "Stoil",
    grades: [5, 6, 5, 4, 6, 5, 6],
    speak: function() {
        this.grades.forEach(eachGrade => {
            console.log(`${this.name}: ${eachGrade}`)
        })
    }
}

testObj.speak();