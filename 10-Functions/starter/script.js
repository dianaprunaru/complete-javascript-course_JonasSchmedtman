'use strict';

///////////////////////////////////////
// 139. Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener 
that changes the color of the selected h1 element ('header') to blue, each 
time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take 
all the time you need. Think about WHEN exactly the callback function is 
executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

///////////////////////////////////////
// 138. More Closures Examples

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Reassigning f function
// h();
// f();

// console.dir(f);

// // Example 2:
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers `);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////
// 137. Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

///////////////////////////////////////
// 136. Immediately Invoked Function Expressions

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// });
// // console.log(isPrivate)
// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var isNotPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(isNotPrivate);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.

//   3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
// which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().
// This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favorite programming laguage?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     //   Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

////////////////////////////////////
// 133. The Call and Apply Methods & 134. The bind Method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Diana Prunaru');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const euroWings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // Here, calling the function won't work because the this keyword does not work outside of the object.
// // book will become a regular function call and not a method on the object
// // book(23, 'Sarah Williams');

// const book = lufthansa.book;

// // Call method
// book.call(euroWings, 23, 'Sarah Williams');
// console.log(euroWings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Michael Johnes');
// // console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // book.apply(swiss, flightData); is the same as book.call(swiss, ...flightData)

// // Bind method
// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Diana Prunaru');
// bookEW23('Martha Cooper');

// // bind with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);

// // const addVAT = addTax.bind(null, 0.23); is the same as addVAT = value => value + value * 0.23

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

////////////////////////////////////
// 132. Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('hey');
// greeterHey('Diana');
// greeterHey('Steven');

// greet('Hello')('Diana');

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hi')('Diana');

////////////////////////////////////
// 131. Functions Accepting Callback Functions

// const oneWord = function (string) {
//   return string.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (string) {
//   const [first, ...others] = string.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function because it takes a function as an argument
// const transformer = function (string, fn) {
//   console.log(`Original string: ${string}`);
//   console.log(`Transformed string: ${fn(string)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // We are only passing in the name of the function - upperFirstWord and oneWord, which are the callback functions:
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Diana', 'Adam', 'Joe'].forEach(high5);

////////////////////////////////////
// 129. How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';
// const diana = {
//   name: 'Diana Prunaru',
//   passport: 2910312,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mrs.' + passenger.name;

//   if (passenger.passport === 2910312) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, diana);
// console.log(flight);
// console.log(diana);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(diana);
// checkIn(flight, diana);

////////////////////////////////////
// 128. Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   ES5:
//   //     numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', undefined, 1000);
