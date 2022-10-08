'use strict';
"use strict";
qName();
function qName() {
  let username = prompt("What is your name?");
  while(username===''){
     username=prompt('You can\'t leave this answer blank. What is your name pretty please?');
  }  
  let greet=alert("Hi " + username + ", welcome to my About Me page");
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


qTaco();
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

qAnime();
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

qApple();
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

qTravel();
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

