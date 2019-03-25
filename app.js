'use strict';

function createGreeting (name, age){
  return `My name is ${name} and I am ${age} years old.`;
}

const returnedGreeting= createGreeting('Kristof', '28');
console.log(returnedGreeting);