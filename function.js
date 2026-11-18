/* 
a. function declaration
b. arrow functions
c. function expressions
*/

function printHello() {
    console.log("Hello World!");
}

printHello();

function calculateDiscount(price, discountPercent) {
    const discountPrice = price - (price * (discountPercent/100));
    console.log(`Discount price is ${discountPrice}; `);
}

calculateDiscount(150000, 25);
calculateDiscount(20000, 20);

function addTwoNumbers(x, y) {
    return x + y;
}
console.log(addTwoNumbers(6, 7));
const result = addTwoNumbers(8, 2); 
console.log(result);

const sumTwoNumbers = (num1, num2) => num1 + num2;
console.log(sumTwoNumbers(10, 12));


/* 
Create a function called calculateTotal that accepts 3 parameters - productName, price and quantity and returns the total cost of a product purchased by a given quantity.

It should returned as: 

The cost of [quantity] [productName] is [total]
*/

function calculateTotal(productName, price, qty) {
    const total = Number(price) * qty;
    return `The cost of ${qty} ${productName}(s) is ${total}`;
}
console.log(calculateTotal("egg-roll", 500, 4));