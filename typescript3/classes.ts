
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}


class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("user created " + this.name)
    }

    register() {
        console.log(this.name + " is now registered.")
    }

    payInvoice() {
        console.log("paid invoice")
    }

}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age)
        this.id = id;
        
    }


}


// let john = new User("John", "Email@aol.com" , 51);

let joe = new Member(40, "joe", "emmmm@aol.com", 25)

joe.payInvoice();

// console.log(john.getAge())
// john.register()