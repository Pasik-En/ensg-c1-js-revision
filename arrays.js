/* 
a. Using array literal
b. Using array constructor
*/

const strings = ["a", "b", "c", "d"];
console.log(strings);
console.log(`The length of the strings array is ${strings.length}`);

const numbers = new Array("1", "2", "3");
console.log(numbers);

console.table(strings);

// Accessing the elements of an array
console.log(strings[1]);

const users = ["john", "blessing", "dozie", "helen", "gozie"];
console.log(users[3]);

// Getting the length of an array
console.log(users.length);

// Array Methods
const fruits = ["Mango", "Guava"];
// Push()
fruits.push("Banana", "Orange");
console.log(fruits);

// Pop()
fruits.pop();
console.log(fruits);

// Unshift()
fruits.unshift("Lemon", "Apple");
console.log(fruits);

// shift()
fruits.shift();
console.log(fruits);

// slice(startIndex, endIndex)
const stack = ["HTML", "CSS", "JS", "Tailwind", "React", "Node", "Express", "PostgreSQL", "MongoDB"];

console.log(stack.slice(4));
console.log(stack.slice(0, 4));
console.log(stack.slice(0, 1));
console.log(stack.slice(2, 8));
console.log(stack);

// splice(startIndex, deleteCount, newItem(s))
const hobbies = ["running", "dancing", "reading", "walking"];

console.log(hobbies.splice(1, 0, "travelling"));
console.log(hobbies);


// Higher Order Functions (forEach, filter, map)
const cars = ["toyota", "nissan", "bmw", "audi", "honda", "ford"];

// forEach()
// Syntax: array.method(cb)

cars.forEach((_, index, array) => {
    console.log(`Car brand is ${array[index]}. It has an index position of ${index}.`);
});

// filter()
const filterResult = cars.filter(car => car !== "nissan");
console.log(filterResult);

const workers = [
    {name: "John Doe", age: 22},
    {name: "Sule Abraham", age: 25},
    {name: "Sandra Luis", age: 19},
    {name: "Cynthia Sax", age: 21}
];

const workersFilterResult = workers.filter((worker) => worker.age >= 22);
console.log(workersFilterResult);


// map()
const workersMapResult = workers.map(worker => {
    return {
        fullname: worker.name,
        age: worker.age,
        isEligible: worker.age >= 20 ? "Yes" : "No"
    }
});

console.log(workersMapResult);