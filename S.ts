// Single Responsibility Principle (SRP)

// A class should have only one reason to change, meaning it should perform only one responsibility

//CASE 1: BAD violates SRP

class UserService{
    createUser(user:any){
        console.log("user created")
    }

    sendEmail(user:any){
        console.log("Email sent to user")
    }
}

//CASE 2: Good Adheres to SRP
class UserService1{
    createUser(user:any){
  console.log("user created")
    }
}
class EmailService{
    sendEmail(user:any){
        console.log("Email send to user")
    }
}