/* Write an object that consists from these key-value pairs:
k: name v: your name
k: age v: your age
k: address v: your address (as Object) --> k: street v: your street name k: number v: your street number k: city v: your city
*/
let info = {
  name: "Boban",
  age: "21",
  adress: { street: "C.M", number: "47", city: "Tetovo" },
};

/* Write few arrays that consists of these elements:
1. list of numbers from 1 to 10
2. list of names
3. mixed content
*/
let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ["John", "Jack", "Robin", "Tessa"];

/* Assign the created object and array to new variables. 
Then try to change some values inside this newly created complex data structures with this sintax:

    For the object:
    NewObject.property = some value; (NewObject is the newly created object after the assignment expression)

    For the array:
    NewArray[index] = some value; (NewArray is the newly created array after the assignment expression)

*/

let NewObject = new Object();
let NewArray = new Array();

NewObject = info;
NewArray = names;

NewObject.name = "Goran";
NewArray[0] = "Jessica";

/* Expected results */
//console.log(OriginalObject) --> ?
//console.log(OriginalArrray) --> ?
//console.log(NewObject) --> ?
//console.log(NewArray) --> ?

console.log(info);
console.log(names);
console.log(NewObject);
console.log(NewArray);

// Reassign reference type example

/*
let obj = { first: 'reference' };
let obj2 = obj;

obj = { second: 'ref2' }

console.log(obj2) --> ?
*/
