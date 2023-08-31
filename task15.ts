//18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// Original list of places to visit
const placesToVisit = ["Macca", "Tokyo", "Riyadh", "Istambol", "New York"];
// Print the original list
console.log("Original Order:");
console.log(placesToVisit);
// Print the list in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());
// Print the original list to show it's still in its original order
console.log("\nOriginal Order After Sorting:");
console.log(placesToVisit);
// Print the list in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
// Print the original list to show it's still in its original order
console.log("\nOriginal Order After Reverse Sorting:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the list to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
// Print the list to show it's back to its original order
console.log("\nOriginal Order After Double Reversing:");
console.log(placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort().reverse();
// Print the array to show that its order has been changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
