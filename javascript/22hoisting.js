var a = 10;
var b = 20;
console.log(add(a, b));

function add(a, b) {
  return a + b;
}
var a;
console.log(a)

// node 22hoisting.js
// output = 30


// how js is executed this code
var a;
var b;
function add(a, b) {
    return a + b;
}
a= 10
b= 20
console.log(add(a, b));

// hoisting happens before the code is executed- hosting