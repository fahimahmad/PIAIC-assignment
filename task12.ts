
//15 Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list


const guests2: string[] = ["Albert Einstein", "Maya Angelou", "Elon Musk"];

const replaceGuest = "Mark Zuckerberg"

guests2.shift() // first one is removed 

guests2.unshift("Mark Zuckerberg") //  this one is added to the begining of the list  


for (let a =0;a<guests2.length;a++) {
    console.log(`Dear ${guests2[a]},\nYou are invited to a dinner at my place.\n
     It would be an honor to have you join us for an evening of engaging conversations and delightful cuisine.\n
     Please let me know your availability.\nBest regards,\nFahim Ahmad`);
    console.log("");
}