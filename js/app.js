'use strict';
"use strict";
function qName() {
  let username = prompt("What is your name?");
  while(username===''){
     username=prompt('You can\'t leave this answer blank. What is your name pretty please?');
  }  
  let greet=alert("Hi " + username + ", welcome to my About Me page");
qNames();
  alert("I am going to ask you 5 questions and lets see if we are alike or not.");


let likeMarvel = prompt("Do you like Marvel movies?");
  while(likeMarvel===''){
    likeMarvel=prompt("It's a yes or no question. Do you like Marvel movies?");
    likeMarvel = likeMarvel.toLowerCase();
  }
    if (likeMarvel === "yes" || likeMarvel === "y") {
    alert("So do I! It is my favorite movie franchise. Do you like Marvel movies?");
  } else if (likeMarvel === "no" || likeMarvel === "n") {
    //console.log(('It\'s ok, to each its own');
    alert("It's ok, to each its own");
    }
}
likeMarvel();

function qTaco() {
  let likeTacos = prompt("Do you like tacos?");
  while(likeTacos===''|| !isNaN(likeTacos)){
    likeTacos=prompt('It\'s a yes or no question. Do you like Tacos?');
  }  
  likeTacos = likeTacos.toLowerCase();
  if (likeTacos === "yes" ||likeTacos === "y") {
    alert("I love tacos, I can probably eat it 24/7");
  } else if (likeTacos === "no" || likeTacos === "n") {
  alert("It was never a right or wrong question. You do you!");
  } 
}
qTaco();

function qAnime() {
  let watchAnime = prompt("Do you watch animes?");
  while(watchAnime===''|| !isNaN(watchAnime)){
    watchAnime=prompt("It's a yes or no question. Do you watch animes?");
  }  
  watchAnime = watchAnime.toLowerCase();
  if (watchAnime === "yes" ||watchAnime === "y") {
  alert("Me too! my favorite anime is One Piece");
  } else if (watchAnime === "no" || watchAnime === "n") {
    alert("I understand. There are so many other things to watch these days!");
  } 
}
qAnime();

function qApple() {
  let iPhone = prompt("Do you use an iPhone?");
  while(iPhone===''|| !isNaN(iPhone)){
    iPhone=prompt("It's a yes or no question. Do you use an iPhone?");
  }  
  iPhone = iPhone.toLowerCase();
  if (iPhone=== "yes" ||iPhone === "y") {
    alert("Me too! Apple ecosystem is pretty amazing");
  } else if (iPhone === "no" || iPhone === "n") {
    alert("Android is ok, I guess...!");
  } 

}
qApple();

function qTravel() {
  let likeTravel = prompt("Do you like to travel?");
  while(likeTravel===''|| !isNaN(likeTravel)){
    likeTravel=prompt("It's a yes or no question. Do you like to travel?");
  }  
  likeTravel = likeTravel.toLowerCase();
  if (likeTravel=== "yes" ||likeTravel === "y") {
    alert("Me too! its a great way to recharge mentally and physically"
);
  } else if (likeTravel === "no" || likeTravel === "n") {
    alert("You should plan for a travel in the near future. You earned it!");
  } 
alert(username + ", thank you for participating in this short survey!");
}
aTravel();

function game1() {
  let begin = alert("Let's play another game!");
  const randomNumber = Math.floor(Math.random() * 15) + 1;

  let finalScore1 = 0;
  let attempts = 5;
  let intro =
  
    alert(
      `I'm thinking of a number between 1 and 15 right now. What number am I thinking?`
    );
  for(i=attempts; i>0; i--){
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

function game2() {

  let lastQ = alert("I promise this is the last game we will play");
  let mcdmenu = ['BIG MAC', 'DOUBLE CHEESEBURGER', 'CHICKEN SANDWICH', 'MCNUGGETS', 'QUARTER POUNDER', 'MCFLURRY', 'SPICY MCCHICKEN'];
  const random = Math.floor(Math.random() * 6) + 1;
  let answer = mcdmenu[parseInt(random)];
  let tries1 = 6;

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
}
let finalScore2 = tries1;
let total = finalScore1 + finalScore2
console.log(`You got ${finalScore2} point from this quiz. Your total score is ${total}`);
alert(`You got ${finalScore2} from this quiz. Your total score is ${total}`)
game2();
