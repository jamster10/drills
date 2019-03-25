'use strict';

function createGreeting (name, age){
  
  return `My name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}`;
  
}

function getYearOfBirth(age){
  return (2019 - Number(age));
}

const returnedGreeting= createGreeting('Kristof', '28');
console.log(returnedGreeting);

