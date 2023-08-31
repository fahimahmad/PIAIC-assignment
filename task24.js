"use strict";
let str1 = "hello";
let str2 = "world";
// Test 1: Is str1 equal to "hello"? Prediction: true
console.log("Is str1 == 'hello'? Prediction: true.");
if (str1 == "hello") {
    console.log(true);
}
else {
    console.log(false);
}
// Test 2: Is str1 not equal to str2? Prediction: true
console.log("Is str1 != str2? Prediction: true.");
if (str1 != str2) {
    console.log(true);
}
else {
    console.log(false);
}
let str3 = "HELLO";
let str4 = "world";
// Test 3: Is str3 equal to "hello" in lower case? Prediction: true
console.log("Is str3 in lower case equal to 'hello'? Prediction: true.");
if (str3.toLowerCase() == "hello") {
    console.log(true);
}
else {
    console.log(false);
}
// Test 4: Is str4 not equal to "world" in lower case? Prediction: true
console.log("Is str4 in lower case not equal to 'world'? Prediction: true.");
if (str4.toLowerCase() != "world") {
    console.log(true);
}
else {
    console.log(false);
}
let num11 = 5;
let num2 = 10;
// Test 5: Is num111 less than num2? Prediction: true
console.log("Is num11 < num2? Prediction: true.");
if (num11 < num2) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 6: Is num2 greater than num11? Prediction: true
console.log("Is num2 > num11? Prediction: true.");
if (num2 > num11) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 7: Is num11 less than or equal to num2? Prediction: true
console.log("Is num11 <= num2? Prediction: true.");
if (num11 <= num2) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 8: Is num2 greater than or equal to num11? Prediction: true
console.log("Is num2 >= num11? Prediction: true.");
if (num2 >= num11) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 9: Is num11 equal to num2? Prediction: false
console.log("Is num11 == num2? Prediction: false.");
if (num11 == num2) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 10: Is num2 not equal to num11? Prediction: true
console.log("Is num2 != num11? Prediction: true.");
if (num2 != num11) {
    console.log(true);
}
else {
    console.log(false);
}
let bool1 = true;
let bool2 = false;
// Test 11: Is bool1 true and bool2 false? Prediction: false
console.log("Is bool1 true and bool2 false? Prediction: false.");
if (bool1 && bool2) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 12: Is bool1 true or bool2 false? Prediction: true
console.log("Is bool1 true or bool2 false? Prediction: true.");
if (bool1 || bool2) {
    console.log(true);
}
else {
    console.log(false);
}
let Arr = [1, 2, 3, 4, 5];
// Test 13: Is the number 3 in the array? Prediction: true
console.log("Is 3 in the array? Prediction: true.");
if (Arr.includes(3)) {
    console.log(true);
}
else {
    console.log(false);
}
let arr2 = [1, 2, 4, 5];
// Test 14: Is the number 3 not in the array? Prediction: true
console.log("Is 3 not in the array? Prediction: true.");
if (!arr2.includes(3)) {
    console.log(true);
}
else {
    console.log(false);
}
// Is str1 == 'hello'? Prediction: true.
// true
// Is str1 != str2? Prediction: true.
// true
// Is str3 in lower case equal to 'hello'? Prediction: true.
// true
// Is str4 in lower case not equal to 'world'? Prediction: true.
// false
// Is num11 < num2? Prediction: true.
// true
// Is num2 > num11? Prediction: true.
// true
// Is num11 <= num2? Prediction: true.
// true
// Is num2 >= num11? Prediction: true.
// true
// Is num11 == num2? Prediction: false.
// false
// Is num2 != num11? Prediction: true.
// true
// Is bool1 true and bool2 false? Prediction: false.
// false
// Is bool1 true or bool2 false? Prediction: true.
// true
// Is 3 in the array? Prediction: true.
// true
// Is 3 not in the array? Prediction: true.
// true
