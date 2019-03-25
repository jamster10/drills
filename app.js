'use strict';

function createGreeting (name, age){
  if (!name || !age) throw new Error('Arguments not valid');
  if (typeof name !== 'string') throw new Error('Name must be a string');
  if (isNaN(age)) throw new Error('Age needs to be a number');
  if (age < 0) throw new TypeError('Age cannot be negative');

  return `My name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}`;
}

function getYearOfBirth(age){
  return (2019 - age);
}

try {
  const returnedGreeting= createGreeting('Kristof', 20);
  console.log(returnedGreeting);
} catch (e){
  console.log(e.message);
}


// What happens if you pass "29" (string) as the age? What about "twenty nine"? Implement a check to ensure the name is a string and the age is a number. If not, throw new TypeError().