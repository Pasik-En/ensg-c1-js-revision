function printHello() {
    console.log("Hello World!");
}

// setTimeout(fn delay(ms))
// 1000ms === 1s
// setTimeout(printHello, 3000);

// console.log("First");
// console.log("Second");
// console.log("Third");
// console.log("Fourth");



// Synchronous programming

// Problem of synchronous programming - It leads to code blocking.

// Callback function
function getData() {
    return {
        name: "John Doe",
        age: 12,
        role: "Software Dev"
    };
}

function displayUserData(cb) {
    const {name, role} = cb();
    console.log(`The user name is ${name} and the user is a ${role}`);
}

// displayUserData(getData);


// Creating promise
const fetchUsers = new Promise((resolve, reject) => {
    const users = ["john", "doe", "andrew", "kelvin"];

    if (!users) {
        reject("Users data not available");
    }

    resolve(users);
});

fetchUsers
    .then(result => result)
    .then(data => {
        const [user1, user2, ...restUsers] = data;
        // console.log(user1);
        // console.log(user2);
        // console.log(restUsers);
    })
    .catch((err) => console.log(err));

let loading = false;
function fetchUser() {
    loading = true;
    if (loading) console.log("Loading...");
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            loading = false;
            console.log("fetch process completed!!!");
        });
}
// fetchUser();


function fetchProducts() {
    fetch("https://dummyjson.com/new")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Unable to fetch products: ${res.status}`);
            }

            return res.json();
        })
        .then((data) => console.log(data))
        .catch((e) => console.error(e));
}

// fetchProducts();


// Async and await
/* 
async function functionName() {
    try {
    
    } catch(e) {
     
    }    
}

==== Arrow function ====
const functionName = async () => {
        try {
        
        } catch(e) {
         
        }    
    
    }

*/

async function printName() {
    return "John Doe";
}

async function welcomeUser() {
    const user = await printName();
    console.log(user);
}
// welcomeUser();


const fetchRecipes = async () => {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.log(e);
    }
}

fetchRecipes();