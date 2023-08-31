let personName2 = "eric Jhonsen"

//2 Name Cases: Store a person’s name in a variable, and then print 
// that person’s name in lowercase, uppercase, and titlecase.


console.log(personName2.toLocaleLowerCase())
console.log(personName2.toLocaleUpperCase())

function toTitleCase(input: string): string {
    return input.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(toTitleCase(personName2))