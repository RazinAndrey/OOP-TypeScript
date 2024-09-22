class Database {
    url!: number;
    private static intance: Database;
    constructor() {
        if (Database.intance) {
            return Database.intance;
        }
        this.url = Math.random();
        Database.intance = this;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1.url);
console.log(db2.url);