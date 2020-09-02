let firstVariable;

let result;

firstVariable = "Bobi's Portfolio";

15 + 15; // 30

"hello" + "world"; //Hello World

let booleanVariable = true;
let booleanVariableF = false;

/* Function declaration statement */
function addFunction(a, b) {
  result = a + b;
}

addFunction(2, 5);

console.log("Result: " + result);

/* variable o will have similar structure to this one:
{
    a: 1,
    b: 2,
    hello: "hello world"
    ...

}
*/
let o = new Object();

/*
variable a will have similar structure to this one:
["1", 5, true, "hello world"]
*/
let a = new Array();

// find the h1 tag inside indexedDB.html
let h1_firstVariable = document.querySelector("h1");

h1_firstVariable.textContent = firstVariable;
