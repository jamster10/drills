'use strict';

function jediName (firstName, lastName) {
  return lastName.slice(0, 3)+firstName.slice(0, 2);

}


console.log(jediName("Jonathan", "Lassen"));


// Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

// If num is infinite (either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.

function beyond(num){
  return num === Infinity || num === -Infinity ? 'and beyond' : num > 0 ? 'To Infinity' : num < 0 ? 'To Negative Infinity' : 'Staying Home';
}

console.log(beyond(0));
