'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const euroToUSD = 1.1;

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 
5 dog owners about their dog's age, and stored the data into an 
array (one array for each). For now, they are just interested in 
knowing whether a dog is an adult or a puppy. A dog is an adult 
if it is at least 3 years old, and it's a puppy if it's less 
than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's 
ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST 
TWO dogs actually have cats, not dogs! So create a shallow 
copy of Julia's array, and remove the cat ages from that copied 
array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an 
adult ("Dog number 1 is an adult, and is 5 years old") or a 
puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [];
// const dogsKate = [];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

/////////////////////////////////////////////////
// 152. The reduce Method

// const balance = movements.reduce(function (acc, current, index) {
//   console.log(`Iteration ${index}: ${acc}`);
//   return acc + current;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

/////////////////////////////////////////////////
// 152. The filter Method

// const deposits = movements.filter(function (movement) {
//   return movement > 0;
// });

// const depositsFor = [];
// for (const movement of movements) if (movement > 0) depositsFor.push(movement);

// const withdrawals = movements.filter(function (movement) {
//   return movement < 0;
// });
// console.log(withdrawals);

/////////////////////////////////////////////////
// 151. Computing usernames

// const user = 'Steven Thomas Williams';

// const createUsernames = function (accs) {
//   accs.forEach(acc => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
// 150. The map Method

// const movementsUSD = movements.map(function (movement) {
//   return movement * euroToUSD;
// });

// const movementsUSD = movements.map(movement => movement * euroToUSD);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const movement of movements) movementsUSDfor.push(movement * euroToUSD);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (movement, i) =>
//     `Movement ${i + 1}: You ${
//       movement > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(movement)}`
// );

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 142. Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// // same as splice but doesn't mutate the array
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); /* the last 2 elements of the array */
// console.log(arr.slice(1, -2)); /* ['b', 'c'] */
// console.log(arr.slice()); /*['a', 'b', 'c', 'd', 'e'] */
// console.log([...arr]);

// // SPLICE
// // same as slice but it mutates the array's state; more useful
// // console.log(arr.splice(2)); /* ['c', 'd', 'e'] */
// arr.splice(-1); /* deletes the las element of the array */
// arr.splice(1, 2); /* deletes 2 elements starting with position 1 */
// console.log(arr); /* ['a', 'd'] */

// // REVERSE
// // it mutates the state of the array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); /* ['f', 'g', 'h', 'i', 'j'] */

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]); /*also a concatenator */

// // JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////////////
// 143. The new at Method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// /* Getting the last element of the array: */
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

/////////////////////////////////////////////////
// 144. Looping Arrays: forEach

// for (const [i, movement] of movements) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
//   }
// }

// console.log('---------- FOR EACH ----------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

// // MAPS

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SETS

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
