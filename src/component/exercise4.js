// Do the task in page 64.
let cars = ["Toyota", "Renault", "Myvi", "Volkswagen", "Proton"];
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 2020,
    color: "black",
  };
  
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
    }
}


for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

for (let car of cars) {
    if (car.color !== "black") {
        continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}

