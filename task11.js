"use strict";
//11 Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
const guests = ["Albert Einstein", "Maya Angelou", "Elon Musk"];
for (let a = 0; a < guests.length; a++) {
    console.log(`Dear ${guests[a]},\nYou are invited to a dinner at my place.\n
     It would be an honor to have you join us for an evening of engaging conversations and delightful cuisine.\n
     Please let me know your availability.\nBest regards,\nFahim Ahmad`);
    console.log("");
}
