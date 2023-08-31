"use strict";
//4 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
// of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const nameWithWhitespace = "\t   \nJohn Doe   \t\n";
console.log(nameWithWhitespace);
const nameParts = nameWithWhitespace.split(/\s+/);
console.log(nameParts);
const strippedName = nameParts.join(" ");
console.log(strippedName);
