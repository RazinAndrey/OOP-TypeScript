// Композиция и Aгрегация

// Композиция позволяет создавать сложные объекты путём комбинирования более простых.
// Вместо наследования, которое связывает классы в иерархию,
// композиция позволяет использовать различные объекты вместе,
// что обеспечивает более гибкую архитектуру

// В отличие от композиций,
// агрегация указывает на более слабую связь,
// где объект может существовать независимо от другого объекта

class Engine { // двигатель
    drive() {
        console.log('Двигатель работает');
    }
}

class Wheel { // колесо
    drive() {
        console.log('Колеса едут');
    }
}

class Freshener { } // Освежитель

class Car {
    engine: Engine;
    wheels: Wheel;
    freshener: Freshener;

    constructor(freshener: string) {
        // Aгрегация
        this.freshener = freshener;
        // Композиция
        this.engine = new Engine();
        this.wheels = new Wheel();
    }

    // делегирование
    drive() {
        this.engine.drive();
        this.wheels.drive();
    }
}

const bmv = new Car('Освежитель 1');
bmv.drive();
console.log(bmv.freshener);

class Flat {
    freshener: Freshener;
    constructor(freshener: string) {
        this.freshener = freshener;
    }
}

const flat = new Flat('Освежитель 1');
console.log(flat.freshener);

