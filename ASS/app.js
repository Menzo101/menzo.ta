function greet(){
console.log(this.firstName + this.secondName)
};

let user1 ={
    firstName: "akano",
    secondName: "oluwatobi",
    age : 45,
    print:greet

}

let user2 ={
    firstName: "micheal",
    secondName: "menzo",
    age : 45,
    print: greet

}
user1.print();
user2.print()