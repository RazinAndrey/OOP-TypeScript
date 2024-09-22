class Rectangle {
    width;
    height;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    calcArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.calcArea());