
const locations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Cairo"];

console.log("Original order:", locations);
console.log("Alphabetical order:", [...locations].sort());
console.log("Still in original order:", locations);

console.log("Still in original order:", locations);


locations.reverse();
console.log("Reversed order:", locations);


locations.reverse();
console.log("Back to original order:", locations);


locations.sort();
console.log("Sorted in alphabetical order:", locations);


locations.sort().reverse();
console.log("Sorted in reverse alphabetical order:", locations);
