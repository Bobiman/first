/**
 * Basic call using XHR (legacy code)
 */

// let button = document.getElementById("btn");

// button.onclick = loadDoc();

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       //   document.getElementById("demo").innerHTML = this.responseText;
//       let ul = document.getElementById("todos");

//       for (let todo of JSON.parse(this.responseText)) {
//         let li = document.createElement("li");

//         li.innerHTML = todo.title;

//         ul.appendChild(li);
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhttp.send();
// }

/**
 * Ajax with fetch API
 */

function loadDocWithFetch() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

let result = loadDocWithFetch();
console.log(result instanceof Promise);

result
  .then(function (result) {
    result.json();
  })
  .then(function (data) {
    console.log(data);
  });
