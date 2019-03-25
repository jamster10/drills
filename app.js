'use strict';

function createGreeting (name, age){
  if (age < 0) throw new Error('Age cannot be negative');
  return `My name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}`;
  
}

function getYearOfBirth(age){
  return (2019 - Number(age));
}

try {
  const returnedGreeting= createGreeting('Kristof', -3);
  console.log(returnedGreeting);
} catch (e){
  console.log(e.message);
}


