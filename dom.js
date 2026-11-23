// alert("This is external")
console.dir(document);

const person = {
    name: "John Doe",
    age: 21
}

person.age = 88;

// Accessing elements
// getElementById
const headingElement = document.getElementById("heading");
console.dir(headingElement);
headingElement.textContent = `${person.name} is ${person.age} years old`;
headingElement.title = `This is a desscription about ${person.name}`;

// getElementsByClassName
const allFruits = document.getElementsByClassName("fruits");
console.log(allFruits);
Array.from(allFruits).forEach(fruit => {
    fruit.style.color = "purple";
    fruit.style.fontSize = "3.5rem";
});

// querySelector
const paragraphElement = document.querySelector(".box p");

paragraphElement.textContent = "JavaScript is beautiful";

const box = document.querySelector(".box");
box.innerHTML = `
    <h2 class="text-red-700 font-bold text-6xl">Frontend Development</h2>
    <a href="https://www.linkedin.com" class="underline text-blue-600 font-medium text-xl" target="_blank">Learn More</a>
`;

// querySelectorAll
// const allFruit = document.querySelectorAll(".fruits");
// allFruit.forEach(fruit => {
//     fruit.style.color = "green";
//     fruit.style.fontSize = "3.5rem";
// });


// Modifying DOM Elements
const introElement = document.getElementById("intro");
console.dir(introElement);

function changeIntroTextContent() {
    introElement.textContent = "Learning to modify the DOM is a crucial skill in JavaScript";
}

changeIntroTextContent();