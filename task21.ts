const fruits = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Sweet" },
    { name: "Grapes", color: "Purple", taste: "Juicy" },
    { name: "Orange", color: "Orange", taste: "Citrusy" },
    { name: "Strawberry", color: "Red", taste: "Sweet" },
];

const fruitObjects: { [key: string]: { name: string; color: string; taste: string } } = {};

for (const fruit of fruits) {
    fruitObjects[fruit.name] = fruit;
}

console.log(fruitObjects);

