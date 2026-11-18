// arrays
let users = ["sax", "williams", "james"];
users = [...users, "Emma", "Phillip"];

console.log(users);


// objects
const person = {
    name: "Andrew Santa",
    age: 44,
}

const copy = {...person, name: "Andrew James", role: "Data Engineer"};
console.log(copy);

