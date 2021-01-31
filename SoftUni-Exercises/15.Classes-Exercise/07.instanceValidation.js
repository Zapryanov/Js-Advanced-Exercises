class CheckingAccount {

    #clientId;
    #email;
    #firstName;
    #lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    nameValidation(value, prop) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${prop} name must be between 3 and 20 characters long`)
        }
        const regex = /^[a-zA-Z]+$/gmi;
        if (!value.match(regex)) {
            throw new TypeError(`${prop} name must contain only Latin characters`);
        }
    }

    get clientId() {
        return this.#clientId;
    }

    set clientId(value) {
        const regex = /^([0-9]{6})$/gm;
        if (!value.match(regex)) {
            throw new TypeError("Client ID must be a 6-digit number")
        } 
        this.#clientId = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        const regex = /^[a-zA-Z]+@[a-zA-Z.]+$/gmi;
        if (!value.match(regex)) {
            throw new TypeError("Invalid e-mail");
        }
        this.#email = value;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = this.nameValidation(value, "First");
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = this.nameValidation(value, "Last")
    }
}

let acc = new CheckingAccount("1314","ivan@some.co","Iva","Petro")