// Task: use for..in  to print out the content of dog
// refer to for..in example in page 62
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

console.log("\nRetrieve the dog's keys");
console.log("-----------------------");

// for in loop: loop over keys in an object
for (let prop in dog) {
    console.log(dog[prop]);
}

console.log("\nRetrieve the dog's keys & dog's entries");
console.log("-----------------------------------------");

// for...of loop: Object.keys & Object.entries
for (const [key, value] of Object.entries(dog)) {
    console.log(key, ":", value);
  }
  