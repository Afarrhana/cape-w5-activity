// Try 1: Exercise of cars & trucks using array

let cars = ["Toyota", "Renault", "Myvi", "Volkswagen", "Proton"];

console.log("The First Car: ");
console.log(cars[0]);

console.log("\nList of Cars");
console.log("-------------");

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

let trucks = ["isuzu", "mercedes"];

//the data of vehicles will be the data of cars and trucks
let vehicles = cars.concat(trucks);

//sort the data by alphabet
vehicles.sort();

console.log("\nList of Trucks");
console.log("---------------");
//retrieve all the trucks
for (let i = 0; i < trucks.length; i++) {
    console.log(trucks[i]);
}

// Try 2: Arrow Function - for array which the function will be use for each of array
console.log("\nArrow Function");
console.log("----------------");

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(               // arrow function
    // parameter		// function body
    (number) => number * 2
);
// map will apply the function to every item in the array
console.log(doubled);

// Task: Add a cat to mypets
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};
let cat = {
    petName: "coco",
    weight: 2.4,
    color: "white",
    breed: "helooooo",
    age: 5,
    burglarBiter: false
};

dog["color"] = "blue";
dog.weight = 2.3;

console.log("\nMy Dog Details");
console.log("----------------");
var mypets = [];
mypets.push(dog);

for (let prop in mypets) {
    console.log(mypets[prop]);
}

console.log("\nMy Pets Details");
console.log("----------------");
console.log(mypets);

mypets.push(cat);

console.log("\nMy Pets Details");
console.log("----------------");
console.log(mypets);