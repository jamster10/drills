'use strict';

function createGreeting (name, age){
  const yearOfBirth = 2019 - Number(age);
  console.log(yearOfBirth);
  return `My name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
  
}

const returnedGreeting= createGreeting('Kristof', '28');
console.log(returnedGreeting);

