//  Open/Closed Principle(OCP)

// A class should be open for extension but closed for modification.This is achieved using abstraction.


//CASE 1: Bad  Violates OCP

class Discount{
 calculate(price:number, type:string): number {
    if(type=="standard") return price*0.9;
    if(type=="premium") return price*0.8;
    if(type=="super-premium") return price*0.7;
    throw new Error("Invalid Discount Type")

 }
}

//CASE 2: Good Adheres to OCP
abstract class Discount1{
    abstract calculate(price:number):number;
}

class StandardDiscount extends Discount1{
    calculate (price:number): number{
     return price *0.9;
    }
}
class PremiumDiscount extends Discount1{
    calculate (price:number):number{
        return price*0.8;
    }
}

class SuperPremiumDiscount extends Discount1{
    calculate (price:number):number{
        return price *0.7;
    }
}

//Usage

const discount :Discount1 = new PremiumDiscount();

console.log(discount.calculate(100))

