// Declare a variable
let myAge;
let myName;

// Initialize a variable
myAge = 19;
myName = "faissal";

console.log(`Previous value: ${myAge}`);

// This is why we can access the value, but before this value it's undefined
favoritArtis = "Lizzy mcalpine";

function logSomething() {
  console.log(favoritArtis);
}

logSomething();

// var variable is hoisted (it get declared on the top file).
var favoritArtis;

/*
  Updating variable,
  change/update the value by giving different value.
*/
myAge = 20;
console.log(`Current value: ${myAge}`);

// check variable's data type
let song = "The elevator";

// use typeof operator to see what type of a variable.
console.log(typeof song);
