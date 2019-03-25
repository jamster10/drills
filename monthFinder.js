'use strict';

function getMonth (month, leapYear = 0){
  const givenMonth = month.toLowerCase();

  if (typeof givenMonth !== 'string') throw new TypeError('Month must be a string');

  const months = {
    has30: ['september', 'april', 'june', 'november'],
    has31: ['january', 'march', 'may', 'july', 'august', 'october', 'december'],
  };

  let allMonths = ['february', ...months.has30, ...months.has31];
  console.log(allMonths);

  if (!allMonths.includes(givenMonth)) throw new Error('You did not enter a real month');


  let monthCount = 31;
  if (months.has30.includes(givenMonth)){
    monthCount = 30;
  } else if (givenMonth === 'february'){
    monthCount = leapYear === 0 ? 28 : 29;
  }

  switch (monthCount){
    case 30: return `${givenMonth} has 30 Days`;
    break;

    case 28: return `${givenMonth} has 28 Days`;
    break;

    case 29: return `${givenMonth} has 29 Days`;
    break;
    
    default: return `${givenMonth} has 31 Days`;
    break;
  }

}

console.log(getMonth('janukary'));

