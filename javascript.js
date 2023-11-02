let fruits =["apple", "banana", "orange"];
fruits.splice(1, 'pear');
console.log(fruits);
fruits.push("grape");
fruits[1]="pear";
// console.log("second fruit in array update to pear");
console.log(fruits);

//Object
let person ={  name: "John", age: 30, city: "New York"}
console.log(person);
 //remove age from objrct

 delete person.age;
 console.log(person.age, "- age deleted",);
 person.job="Engineer"; 
 console.log(person.job, "- Job added");
 person.city="San Francisco";
 console.log(person.city, "- City updated");
 console.log(person);

 //Array of Objects Operations
 let cars = [
    { make: "Toyota", model: "Camry", year: 2018},
    {make: "Honda", model: "Civic", year: 2020},
];
console.log(cars[0], "Created objects 1");
console.log(cars[1], "Created objects 2");
delete cars[0];
console.log(cars, "deleted");

cars[1].model="Accord";
console.log(cars[1]);

console.log(cars);