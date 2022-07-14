'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// // This function is defined in a global scope because it is in the top level code

// const firstName = 'Diana';
// // firstName variable is a global variable and is not in the scope of calcAge function
// // Therefore, through the scope chain will be made available also inside the scope of calcAge function
// calcAge(1991);

// // The parent scope of the calcAge function is the global scope
// // firstName is in the global scope so JavaScript could use that in the function

// // console.log(age);
// // The age variable is not accessible outside the calcAge scope
// //

// ///////////////////////////////////////
// // Hoisting and TDZ in Practice

// // Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Diana';
// let job = 'marketer';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log('All products deleted')
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.loh(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.loh(this);
// };
// calcAge(1989);

// const diana = {
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//   },
// };
// console.log(this);

// const matilda = {
//   year: 2017,
// };

// // method borrowing
// matilda.calcAge = diana.calcAge;
// matilda.calcAge();

// const diana = {
//   firstName: 'Diana',
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey, ${this.firstName}`),
// };
// diana.greet();
// diana.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
conaole.log(oldAge);

const me = {
  name: 'Diana',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
