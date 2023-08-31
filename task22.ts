const numbers = [1, 2, 3, 4];

// Intentional error: Accessing an index that doesn't exist (index 4)
const invalidNumber = numbers[4]; // This line will throw an error

// Correcting the error
const validIndex = 2; 
const validNumber = numbers[validIndex];
console.log("Valid Number:", validNumber);
