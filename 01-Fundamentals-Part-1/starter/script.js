// CODING CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀

// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;
// const MarkBMI = MarkMass / MarkHeight ** 2;
// const JohnBMI = JohnMass / JohnHeight ** 2;

// const markHigherBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHigherBMI)

//////////////////////////////////////////////////////////
// CODING CHALLENGE #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI 
// is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. 
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// */


// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;
// const MarkBMI = MarkMass / MarkHeight ** 2;
// const JohnBMI = JohnMass / JohnHeight ** 2;

// // 1.
// if (MarkBMI > JohnBMI) {
//     console.log("Mark's BMI is higher than John's!") 
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }

// // 2.
// if (MarkBMI > JohnBMI) {
// console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`)
// } else {
//     console.log (`Mark's BMI (${MarkBMI}) is lower than John's (${JohnBMI})!`)
// }

////////////////////////////////////
// CODING CHALLENGE #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with 
the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only 
wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have 
the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// 1.
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 100 + 110) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// // 2.
// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (averageScoreKoalas > averageScoreDolphins) {
//     console.log("Koalas win the trophy")
// } else if (averageScoreDolphins === averageScoreKoalas) {
//     console.log("Both win the trophy")
// }


// 3. Bonus 1
// 1.
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// // 2.
// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//     console.log("Dolphins win the trophy")
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
//     console.log("Koalas win the trophy")
// } else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
//     console.log("Both win the trophy")} else {console.log("Nobody wins the trophy")}



////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// console.log(tip)

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)