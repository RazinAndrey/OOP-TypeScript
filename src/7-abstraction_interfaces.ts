// Абстракция
abstract class Animal {
    constructor(public name: string) { }

    abstract makeSound(): void; // Абстрактный метод

    eat(): void {
        console.log(`${this.name} ест.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Гав!');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Мяу!');
    }
}

const dog = new Dog('Шарик');
dog.makeSound(); // Гав!
dog.eat(); // Шарик ест.

const cat = new Cat('Мурка');
cat.makeSound(); // Мяу!
cat.eat(); // Мурка ест.



// Интерфейсы
class User {
    username!: string;
    age!: number;
}

interface Repozitory<T> {
    create: (obj: T) => T;
    get: () => T;
    delete: (obj: T) => T;
    update: (obj: T) => T;
}

class UserRepo implements Repozitory<User> {
    create(obj: User): User {
        return obj
    }
    delete(obj: User): User {
        return obj
    }
    get(): User {
        return new User
    };
    update(obj: User): User {
        return obj
    };
}