let a = [1, 2, 3];
let b = {};

console.log(a[0]);
console.log(a.length);

for (let i = 0; i < a.length; i++) {}
a.push(4); //dodadi 4 na poslednata adresa
a.pop(); //izbrishi element na poslednata adresa
a.unshift(0); // izbrishi element na 0 adresa
a.shift();

//calls with callback function as a parametar
a.forEach(function () {});

console.log(a);
