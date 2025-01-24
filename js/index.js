// * high order function ==> function that takes a function as a parameter or returns a function

// const firstOrderFunction = () => console.log("first order function");
// const highOrderFunction = (returnFn) => returnFn();
// highOrderFunction(firstOrderFunction);

// * unary function
// const unaryFn = (a) => console.log(a + 10);
// unaryFn(10);

// ** currying function
// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1, 2, 3)); // 6

// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
// curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
// curryUnaryFunction(1)(2); // returns a function: c => 3 + c
// curryUnaryFunction(1)(2)(3); // returns the number 6

// function userDetails(params) {
//     if (params) {
//         console.log(salary);
//         // console.log(age);
//         let age = 20;
//         var salary = 20000;
//     }
//     // console.log(age);
//     console.log(salary);
// }
// userDetails(true);

// let x = 1;
// switch (x) {
//   case 0: {
//     let name;
//     break;
//   }
//   case 1: {
//         let name;
//         console.log("hello");
//     break;
//   }
// }

// * temporal dead zone
// function somemethod() {
//     console.log(x);
//     console.log(y)
//     var x = 10;
//     let y = 10;
//     // console.log(x);
// }
// somemethod()
// console.log(message)
// var message  = "hello world"

// var message;
// console.log(message);
// message = "The variable Has been hoisted";

// message("Good morning"); //Good morning
// function message(name) {
//   console.log(name);
// }
class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  getDetails() {
    return this.model + " bike has " + this.color + " color";
  }
}

let bikeCMD = new Bike("royal", "white");
console.log(bikeCMD.getDetails());

console.log("hello world");
