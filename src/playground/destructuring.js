//
// Object destructuring
//

// const person = {
//   name: "Miso",
//   age: 32,
//   location: {
//     city: "Belgrade",
//     temp: 15
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

// const address = ['Kolubarska 20', 'Belgrade', 'Serbia', '11000'];
// const [, city, state = 'New York'] = address;
// // const [street, city, state, zip] = address;
// // console.log(`You are in ${address[1]} ${address[2]}.`);
// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
