// Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// BAD: Violates DIP
class MySQLDatabase {
    connect() {
        console.log("Connected to MySQL");
    }
}

class UserService {
    private db: MySQLDatabase;

    constructor() {
        this.db = new MySQLDatabase(); // Tight coupling
    }

    getUser() {
        this.db.connect();
        console.log("Getting user from database");
    }
}

// GOOD: Adheres to DIP
interface Database {
    connect(): void;
}

class MySQLDatabase implements Database {
    connect() {
        console.log("Connected to MySQL");
    }
}

class MongoDBDatabase implements Database {
    connect() {
        console.log("Connected to MongoDB");
    }
}

class UserService {
    private db: Database;

    constructor(db: Database) {
        this.db = db; // Dependency injection
    }

    getUser() {
        this.db.connect();
        console.log("Getting user from database");
    }
}

// Usage
const mysqlDB = new MySQLDatabase();
const mongoDB = new MongoDBDatabase();

const userService1 = new UserService(mysqlDB);
userService1.getUser();

const userService2 = new UserService(mongoDB);
userService2.getUser();
