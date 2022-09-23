"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLcense) console.log('I can drive')

///////////////////////////////////////
// 34.Function Declarations vs. Expressions

// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age
// }

// const age1 = calcAge1(1991);

// // console.log(age1)

// const calcAge2 = function (birthYear) {
// return 2037 - birthYear;
// }
// const age2 = calcAge2(1994)
// console.log(age1, age2)

///////////////////////////////////////
// 35.Arrow functions

// birthYear => 2037 - birthYear;
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2005);
// console.log(age3)

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return retirement
// }

// console.log(yearsUntilRetirement(1991));

///////////////////////////////////////
// Functions Calling Other Functions
// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))

///////////////////////////////////////
// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(1991);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }

//   //   return `${firstName} retires in ${retirement} years`;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991, "Diana"));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// let scoreOne;
// let scoreTwo;
// let scoreThree;

// const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
//   (scoreOne + scoreTwo + scoreThree) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
//   } else {
//     console.log(`There are no winners.`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(44, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ["Ruxu", "Gogo", "Papu", "Ralu"];
// friends.push("Andra");

// friends.unshift("Diana");
// console.log(friends);

/////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you
    need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned
value of a function! So you can just call a function as array values (so don't store the tip values in
separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = bill * 0.15;
//     return tip;
//   } else if (bill > 300) {
//     const tip = bill * 0.2;
//     return tip;
//   }
// };

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : 0.2;
// };

// // const tip = calcTip(100);
// // console.log(tip);

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];

// console.log(tips, total);

// const diana = {
//   firstName: "Diana",
//   lastName: "Prunaru",
//   birthYear: 1991,
//   job: "marketer",
//   friends: ["Ruxu", "Gogo", "Papu", "Ralu", "Andra", "Diana"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(diana);
// console.log(diana.lastName);
// console.log(diana["lastName"]);

// // const interestedIn = prompt(
// //   "What do you want to know about Diana? Choose between firstName, lastName, age, job, and friends."
// // );

// // if (diana[interestedIn]) {
// //   console.log(diana[interestedIn]);
// // } else {
// //   console.log(
// //     "Wrong request. Choose between firstName, lastName, age, job, and friends."
// //   );
// // }

// console.log(
//   `${diana.firstName} has ${diana.friends.length} friends, and her best friend is called ${diana.friends[0]}`
// );

// const diana = {
//   firstName: "Diana",
//   lastName: "Prunaru",
//   birthYear: 1991,
//   job: "marketer",
//   friends: ["Ruxu", "Gogo", "Papu", "Ralu", "Andra", "Diana"],
//   hasDriversLicense: false,

//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     } and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(diana.getSummary());

// console.log(diana.calcAge());
// console.log(diana["calcAge"]());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects
to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass,
and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi}).`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}).`
//   );
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);
// for (let i = 0; i < diana.length; i++) {
//   if (typeof diana[i] === "number") break;
//   console.log(diana[i], typeof diana[i]);
// }

// const diana = [
//   "Diana",
//   "Prunaru",
//   1991,
//   "marketer",
//   ["Ruxu", "Gogo", "Papu", "Ralu", "Andra", "Diana"],
// ];

// for (let i = diana.length - 1; i >= 0; i--) {
//   console.log(i, diana[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`exercise ${exercise}: Lifting weights repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);

//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) console.log("Loop is about to end");
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips 
and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉



// GOOD LUCK 😀
// */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// // 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
// // This function calculates the average of all numbers in the given array. This is a DIFFICULT
// // challenge (we haven't done this before)! Here is how to solve it:
// //   4.1. First, you will need to add up all values in the array. To do the addition, start
// //   by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop.
// //   In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop,
// //   you have all values added together
// //   4.2. To calculate the average, divide the sum you calculated before by the length of the array
// //   (because that's the number of elements)
// //   4.3. Call the function with the 'totals' array

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

///////////////////////////////////////
// 48.Looping Backwards and Loops in Loops

// const diana = [
//   "Diana",
//   "Prunaru",
//   2037 - 1991,
//   "marketer",
//   ["Ruxu", "Gogo", "Papu", "Ralu", "Andra", "Diana"],
// ];

// for (let i = diana.length - 1; i >= 0; i--) {
//   console.log(i, diana[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercise ${exercise} -----`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//   }
// }

///////////////////////////////////////
// 49.The while Loop

// for (let rep = 1; rep < 6; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
// //   console.log(`You rolled a ${dice}. `);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// if (dice === 6) console.log("Loop is about to end...");
// // }
