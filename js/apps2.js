"use strict";

function game1() {
  let begin = alert("Let's play another game!");
  const randomNumber = Math.floor(Math.random() * 15) + 1;
  
  let finalScore1 = 0;
  let attempts = 5;
  let intro =
    alert(
      `I'm thinking of a number between 1 and 15 right now. What number am I thinking?`
    );
  for(let i=attempts; i>0; i--){
    let guessNumber = prompt(
      `Pick a number. You have ${attempts} attempts left`);
    if (parseInt(guessNumber) === randomNumber) {
        alert("You guessed the correct number! Congratulations! You get " +   attempts + " point(s).");
        break;
  } else if (parseInt(guessNumber) !== randomNumber && parseInt(guessNumber) > randomNumber){
        attempts--;
        alert("Your guess was too high.");
  } else if (parseInt(guessNumber) !== randomNumber&&parseInt(guessNumber) < randomNumber) {
        attempts--;
        alert("Your guess was too low.");
  } else if (parseInt(guessNumber) !== randomNumber&&isNaN(parseInt(guessNumber))) {
        attempts--;
        alert("You can only guess a numerical value.");
      }
    if(attempts===0){
        alert(`You used all you guesses. You get ${attempts} points this round. Try again next time.`)
        break;
    }
  }
  finalScore1 = +attempts;
}
game1();


function game2(){

  let lastQ = alert("I promise this is the last game we will play");
  let mcdmenu = ['BIG MAC', 'DOUBLE CHEESEBURGER', 'CHICKEN SANDWICH', 'MCNUGGETS', 'QUARTER POUNDER', 'MCFLURRY', 'SPICY MCCHICKEN'];
  const random = Math.floor(Math.random() * 6) + 1;
  let answer = mcdmenu[parseInt(random)];
  let tries1 = 6;
  let finalScore2=0;
  
  alert(`Guess my favorite menu from McDonalds.`);
  
  
  let guess=prompt(`You have ${tries1} guesses left. Pick one from the MENU: ${mcdmenu}`);
  guess=guess.toUpperCase();
  for(let i=6; i>0; i--){
    
  while(mcdmenu.indexOf(guess)>-1){
    let guess=prompt(`You have ${tries1} guesses left. Pick one from the MENU: ${mcdmenu}`);
  guess=guess.toUpperCase();
    if(guess!==answer){
      tries1--;
      alert=(`Eh, I rarely order ${guess}.`)
    }
    if(guess===answer){
      alert(`Correct! I always order ${answer}.`);
    }}
  if(mcdmenu.indexOf(guess)===-1){
    tries1--;
    prompt(`incorrect. Try again.You have ${tries1} guesses left. Pick one from the MENU: ${mcdmenu}`);
  guess=guess.toUpperCase();}
  }
  finalScore2 = tries1;
let total = finalScore1 + finalScore2
console.log(`You got ${finalScore2} point from this quiz. Your total score is ${total}`);
alert(`You got ${finalScore2} from this quiz. Your total score is ${total}`)
}

game2();
