// Make a new array
let coolCars = ["Honda", "Toyota", "Mazda", "Mercedes", "Saab", "Fiat"];
console.log(coolCars.toString());

// Access item in the array
let car = coolCars[2];
console.log(car);

// Add an item to the end of the array
coolCars.push("BWM");
console.log(coolCars.toString());

// Take the last item of the end of the array
coolCars.pop();
console.log(coolCars.toString());

// Take the first item off the list
coolCars.shift();
console.log(coolCars.toString());

// remove something from a position in the array
coolCars.splice(3);
console.log(coolCars.toString());

// Change an element in an array
coolCars[1] = "Suzuki"
console.log(coolCars.toString());
