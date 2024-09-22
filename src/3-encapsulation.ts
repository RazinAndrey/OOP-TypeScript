// Инкапсуляция
class Rectangle {
    private _width: number;
    private _height: number;

    constructor(w: number, h: number) {
        this._width = w;
        this._height = h;
    }

    public get width() {
        return this._width;
    }

    public set width(value) {
        if (value <= 0) {
            this._width = 1;
        } else {
            this._width = value;
        }
    }

    calcPerimeter(): void {
        console.log(this._height + this._width);
    }
}

const rect = new Rectangle(5, 10);
rect.calcPerimeter(); // 15
rect.width = 0;
rect.calcPerimeter(); // 11

/////////////////

class User {
    private _username: string;
    private _password: string;
    private _id: number;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
        this._id = Math.random();
    }

    //создаем get и set, чтоб управялть свойствами из вне

    public get usename() {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get password() {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    // id только получаем
    public get id() {
        return this._id;
    }
}

const user = new User('Andrew', '123123123');
user.username = 'Bob';
console.log(user); // { _username: 'Bob', _password: '123123123', _id: 0.938022313928301 }

///////////////////

class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables: Array<string>;

    constructor(url: string, port: number, username: string, password: string) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    public createNewTable(table: string): void {
        this._tables.push(table);
    }

    public clearTables(): void {
        this._tables = [];
    }

    get url() {
        return this._url;
    }
    get port() {
        return this._port;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    get tables() {
        return this._tables;
    }
}

const db = new Database('myDB', 4000, 'Andrew', '123');
// db.tables = []; // err
db.createNewTable('role');
db.createNewTable('users');
console.log(db.tables); // [ 'role', 'users' ]
db.clearTables();
console.log(db.tables); // []

