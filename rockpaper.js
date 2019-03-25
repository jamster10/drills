'use strict';

function playme (playerSelection){

    if (isNaN(playerSelection))
    {
       throw new Error('must be integer between 1 and 3 inclusive');

    }
 
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if (randomNo===1 && playerSelection===2)
        return "Player wins with paper";
    if (randomNo===1 && playerSelection===3)
        return "Computer wins with rock";
    if (randomNo===2 && playerSelection===1)
        return "Computer wins with paper";
    if (randomNo===2 && playerSelection===3)
        return "Player wins with scissors";
    if (randomNo===3 && playerSelection===1)
        return "Player wins with rock";
    if (randomNo===3 && playerSelection===2)
        return "Computer wins with scissors";
    return 'same choice play again';
}

console.log(playme(3));
