//17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



const guestList2 = ["mohsin", "hamas", "ali", "bilal"];


const guestsCantMakeIt = ["ali"];

for (let a= 0 ;a< guestsCantMakeIt.length;a++) {
    console.log(`${guestsCantMakeIt} can't make it to the dinner.`);
}
const newGuests = ["Eve", "Frank", "Grace"];

for (let a =0;a<guestsCantMakeIt.length;a++) {
    const indexOfGuest = guestList2.indexOf(guestsCantMakeIt[a]);
    if (indexOfGuest !== -1) {
        guestList2[indexOfGuest] = newGuests.shift() || guestList2[indexOfGuest];
    }
}

console.log("Great news! We've found a bigger dinner table!");

guestList2.unshift("Zoe");

guestList2.splice(2, 0, "Henry");

guestList2.push("Isabella");

console.log("New Invitation Messages:");

for (let a= 0;a<guestList2.length;a++) {
    console.log(`Dear ${guestList2[a]}, please join us for dinner.`);
}
