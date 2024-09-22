// Полиморфизм (Параметрический(истинный))
class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public greeting() {
        console.log(`Привет, я человек ${this._firstName}`)
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

    public greeting() {
        console.log(`Привет, я работник ${this.firstName}`);
    }
}

class Developer extends Employee {
    private _level;

    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number, level: string) {
        // из-за super впервую очередь будет вызван родительский конструктор, a потом Employee
        super(firstName, lastName, age, inn, number, snils);
        this._level = level;
    }
    public greeting() {
        console.log(`Привет, я разработчик ${this.firstName}`)
    }
}


const person = new Person('Andrew', 'Razin', 23);
const employee = new Employee('Bob', 'Razin', 23, 123, 223213, 1312313);
const developer = new Developer('ALAH', 'Razin', 23, 123, 223213, 1312313, 'SENIOR');

// person.greeting();
// employee.greeting();
// developer.greeting();

const personList: Person[] = [person, employee, developer];

function massGreeting(persons: Person[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
}

massGreeting(personList);

// Полиморфизм (ad-hoc (Мнимый))
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
    return x + y;
}

console.log(add(5, 10)); // 15
console.log(add("Hello, ", "world!")); // "Hello, world!"
