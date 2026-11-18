
try {
    console.log("First line...");
    console.log(name);
    const name = "John Doe";
} catch (error) {
    console.log(error.stack);
    // console.log(error.name);
    // console.log(error.message);
}

const userName = "William James";
console.log(userName);
console.log("Other codes ...");

try {
    // code to be executed
} catch (e) {
    console.error(e.message);
}