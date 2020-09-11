/* Write a for loop that will fill an array with the value of the iterating variable
 */

// let i;
// let a = [];

// for (i = 0; i > 10; i++) {
//   a[i] = i;
// }

// console.log(a);

// Write for in loop for an object nested in another object

let person = {
  name: "Bobi",
  lastname: "Madzoski",
  adress: { street: "ul.C.M", number: "47", city: "Tetovo" },
};

for (let nestedObject in person.adress) {
  console.log(nestedObject);
}

/* Write for in loop for the following object {a: 1, b: 2, c: 3} that will log the following:
"a is 1" "b is 2" "c is 3"
*/

for (let n in person.adress) {
  console.log(n + " is " + person.adress[n]);
}

/* Write a for loop that will fill an array with anonimous functions and than another loop
that will execute those functions. In the first loop use the iterating value inside the anonimous functions.
*/
