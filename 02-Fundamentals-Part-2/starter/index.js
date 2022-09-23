// JAVASCRIPT FUNDAMENTALS - P2

// LECTURE: Functions

const describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );
};

describeCountry("Romania", 22, "Bucharest");

describeCountry("Greece", 10, "Athens");

describeCountry("Greenland", 5, "Reykjavik");

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percOfRomania = percentageOfWorld(18);
console.log(percOfRomania);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const someCountry = percentageOfWorld3(63);
console.log(someCountry);

// LECTURE: Functions Calling Other Functions

const describePopulation = function (population, country) {
  const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
  };
  return `${country} has ${population} million people, which is about ${percentageOfWorld2(
    population
  )} of the world.`;
};
console.log(describePopulation(18, "Singapore"));

// LECTURE: Introduction to Arrays

const populations = [18, 5, 7, 22];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Bulgaria", "Hungary", "Ukraine", "Serbia", "Moldova"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

neighbours.includes("Germany")
  ? console.log("Yes")
  : console.log("Probably not a central European country :D");

neighbours[4] = "Republic of Moldova";
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
  country: "Romania",
  capital: "Bucharest",
  language: "Romanian",
  population: 18,
  neighbours: ["Bulgaria", "Hungary", "Ukraine", "Serbia", "Moldova"],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}.`);
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry);

// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property

// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
var i;
for (i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing

// const populations2 = [...populations];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
