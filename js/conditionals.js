/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

let a = 10,
  b = 20,
  c = 30;

if (a && b && c) {
  console.log(a + b + c);
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/

let z = 5,
  x = 6,
  v = 7;

if (z && x && !v) {
  console.log(z, x, v);
} else if (z && x && v) {
  console.log(z + x + v);
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

let y = 20;

switch (y) {
  case 10:
    console.log("The value is 10");
    break;
  case 20:
    console.log("The value is 20");
    break;
  default:
    console.log("The value is neither");
    break;
}
