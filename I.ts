// Interface Segregation Principle (ISP)
// A class should not be forced to implement interfaces it does not use. Instead, multiple small interfaces are preferred over a single, large interface.

// BAD: Violates ISP
interface Animal {
    eat(): void;
    fly(): void; // Not all animals can fly
}

class Dog implements Animal {
    eat() {
        console.log("Dog eats");
    }

    fly() {
        throw new Error("Dogs can't fly");
    }
}

// GOOD: Adheres to ISP
interface Eater {
    eat(): void;
}

interface Flyer {
    fly(): void;
}

class Dog1 implements Eater {
    eat() {
        console.log("Dog eats");
    }
}

class Bird implements Eater, Flyer {
    eat() {
        console.log("Bird eats");
    }

    fly() {
        console.log("Bird flies");
    }
}

// Usage
const dog: Eater = new Dog();
dog.eat();

const bird: Flyer = new Bird();
bird.fly();
