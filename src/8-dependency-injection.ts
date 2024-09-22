// Внедрение зависимостей

// Внедрение конструктора
class Logger {
    log(message: string) {
        console.log(message);
    }
}

class UserService {
    constructor(private logger: Logger) { }

    createUser(name: string) {
        this.logger.log(`User ${name} created.`);
        // logic to create user
    }
}

const logger = new Logger();
const userService = new UserService(logger);
userService.createUser('Alice');
