"use strict";
// Simple Conditional Tests Example
// Test 1: Checking if a number is positive
const num1 = 7;
console.log(`Test 1: Is ${num1} positive?`);
console.log("Prediction: True");
if (num1 > 0) {
    console.log("Result: True");
}
else {
    console.log("Result: False");
}
// Test 2: Checking if a string is empty
const emptyString = "";
console.log(`Test 2: Is the string empty?`);
console.log("Prediction: True");
if (emptyString === "") {
    console.log("Result: True");
}
else {
    console.log("Result: False");
}
// Test 3: Checking if a boolean is false
const isRaining = false;
console.log(`Test 3: Is it raining?`);
console.log("Prediction: False");
if (!isRaining) {
    console.log("Result: True");
}
else {
    console.log("Result: False");
}
