

'use strict';

console.log('hi');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console');
}

/*
&& — is the 'logical and'
One false with an && and it will not run
|| — is the 'logical or' (double pipe)
One true and it will run
! - 'logical not' often called 'bang'
*/

let trueValue = true;
let falseValue = false;

if (trueValue || falseValue) {
  console.log('it evaluated to true');
}
/*
&& - is the 'logical and'
One false with an && and it will not run

|| - is the 'logical or' (double pipe)
One true and it will run
! - 'logical not' often call 'bang'
*/
//let trueValue=true;
//let falseValue=false;

//if (trueValue && falseValue){
//  console.log('it evaluated to true');
//}

let username = prompt('What is your name?');
let greet=alert('Hi '+username+', welcome to my About Me page');
alert("This page contains more information about who I am.")

let likeMarvel=prompt('Do you like Marvel movies?');
likeMarvel = likeMarvel.toLowerCase();
//console.log(likeMarvel);

if(likeMarvel=== 'yes' || likeMarvel=== 'y'){
	//console.log('So do I! It is my favorite movie franchise');
	alert('So do I! It is my favorite movie franchise');
}else if(likeMarvel ==='no'|| likeMarvel==='n'){
	//console.log(('It\'s ok, to each its own');
	alert('It\'s ok, to each its own');
}

let likeTacos=prompt('Do you like tacos?');
likeTacos=likeTacos.toLowerCase();
if(likeTacos=== 'yes' || likeTacos=== 'y'){
 //console.log('Taco is my favorite food, I can probably eat it 24/7');
 alert('Taco is my favorite food, I can probably eat it 24/7');
}else if(likeTacos=== 'no' || likeTacos=== 'n'){
 //console.log('It was never a right or wrong question.You do you!');
 alert('It was never a right or wrong question. You do you!');
}

let likeAnime=prompt('Do you watch animes?');
likeAnime=likeAnime.toLowerCase();
if(likeAnime==='yes'|| likeAnime==='y'){
  //console.log('Me too, my favorite one is One Piece');
  alert('Me too, my favorite one is One Piece');
}else if(likeAnime==='no'||likeAnime==='n'){
  //console.log('There are so many things to watch these days!');
  alert('There are so many things to watch these days!');
}

let likeApple=prompt('Do you have an iPhone?');
likeApple=likeApple.toLowerCase();
if(likeApple==='yes'|| likeApple==='y'){
  //console.log('Me too, Apple ecosystem is pretty amazing');
  alert('Me too, Apple ecosystem is pretty amazing');
}else if(likeApple==='no'||likeApple==='n'){
  //console.log('Android is ok, I guess...!');
  alert('Android is ok, I guess...!');
}

let likeTravel=prompt('Have you traveled anywhere in the past 6 months?');
likeTravel=likeTravel.toLowerCase();
if(likeTravel==='yes'|| likeTravel==='y'){
  //console.log('Me too, it\s a great way to take a break and recharge mentally and physically');
  alert('Me too, it\s a great way to take a break and recharge mentally and physically');
}else if(likeTravel==='no'||likeTravel==='n'){
  //console.log('You should plan for a travel in the near future.');
  alert('You should plan for a travel in the near future.');
}

alert(username+', thank you for participating in this short survey!');
