// Наследование
class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `Фамилия ${this._lastName}, Имя ${this._firstName}`;
    }

    get firstName() {
        return this._firstName
    }
    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value
        }
    }
}

class Employee extends Person {
    private _inn;
    private _number;
    private _snils;

    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number) {
        // из-за super впервую очередь будет вызван родительский конструктор, a потом Employee
        super(firstName, lastName, age);
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }
}
const employee1 = new Employee('Andrew', 'Razin', 23, 123, 223213, 1312313);
console.log(employee1);

class Developer extends Employee {
    private _level;

    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number, level: string) {
        // из-за super впервую очередь будет вызван родительский конструктор, a потом Employee
        super(firstName, lastName, age, inn, number, snils);
        this._level = level;
    }
}

const developer = new Developer('Andrew', 'Razin', 23, 123, 223213, 1312313, 'SENIOR');
console.log(developer.fullName);