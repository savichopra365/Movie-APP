// ASSIGNMENT 1 Array operations
fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);
fruits.push("grape");
console.log(fruits);
fruits[1] = "pear";
console.log(fruits);

// ASSIGNMENT 2 object operations

let person = {
  name: "john",
  age: 30,
  city: "new york",
};
person.job = "engineer";
person.city = "san francisco";
delete person.age;
console.log(person);

// ASSIGNMENT 3 array of objects

cars = [
  { make: "toyota", model: "camary", year: 2018 },
  { make: "honda", model: "civic", year: 2020 },
];
console.log(cars[1]);
cars[1].model = "accord";
console.log(cars);
