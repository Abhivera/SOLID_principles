//Liskov Substitution Principle (LSP)

//Derived classes should be subsitutable for their base classes without breaking the application

//CASE 1: Bad violates LSP

class Bird {
    fly(){
        console.log("flying ")
    }
}

class Penguin extends Bird {
    fly(){
        throw new Error("Penguins can't fly")
    }
}

//CASE 2: Good Adheres to LSP

abstract class Bird1{
    abstract move():void 
}
class FlyingBird extends Bird1{
    move(){
        console.log("Flying")
    }
}

class Penguin1 extends Bird1{
    move(){
        console.log("Swimming")
    }
}

// Usage
const birds: Bird1[] = [new FlyingBird(), new Penguin1()];
birds.forEach(bird => bird.move());