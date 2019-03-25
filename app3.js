'use strict';

function crackCode(sentence) {
    const words = sentence.split(' ');
    let returnedLetter = '';
    for (let i=0; i<words.length; i++){   
        switch(words[i][0]) {
            case 'a':
                returnedLetter += words[i][1];
              break;
            case 'b':
                returnedLetter += words[i][2];
              break;
            case 'c':
                returnedLetter += words[i][3];
              break;
            case 'd':
                returnedLetter += words[i][4];
            break;
            default:
                returnedLetter += ' ';
          }
    }
    return returnedLetter;
}


console.log(crackCode('craft block argon meter bells brown croon droop'));