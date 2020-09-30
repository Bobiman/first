/**
 * Basic call using XHR (legacy code)
 */

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       //document.getElementById("demo").innerHTML = this.responseText;
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhttp.send();
// }

// loadDoc();

/**
 * Ajax with fetch API
 */

// function loadDocWithFetch() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1");
// }

// let res = loadDocWithFetch();

// res.then((res) => res.json()).then((data) => console.log(data));
