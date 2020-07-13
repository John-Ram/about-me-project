'use strict';

/*
  guessing game about John
  Ask their name ('Hi there! What\'s your name?)
  1.Am I originally from Southern California?  (y/n)
    if they answer y - "yup! and the heat rediculous! Rain is way better than a desert!"
    else - "I wish i wasn't"
  2.What game did i play most as a kid? sonic adventure or mario 64?
    if sonic adventure- "Heck yea! It was the best! and the soundtrack is wonderful!"
    if mario 64 -"I mean i played it, but it was never my first pick hehe."
    else - "I do play a lot of games, but this was more just to show what team I was on. (#\teamsonic #\hashtag)"
  3.At what age did i get the family heirloom, a 200 year old machete? (1-10) (5)
    if 0 - i wasn't even born yet!
    if 1 to 3- close, add a couple years. 
    if 4 - almost there
    if 5 - Yup! Grandpa said "if you can sharpen it on your own and it can cut cactus, it's yours."
    if 6 - maybe subtract a year there bud.
    else - not even in the ballpark
  4.What kind of music do i like? (Instrumentals or rap?)
  if instrumentals - You know me so well! are you stalking me?
  if rap - no no no no NO! to each their own, but i dislike rap.
  5. Did i or did i not yell at john cleese? (y/n)
  if y - indeed! i didn't know who he was at the time but that was quickly remedied afterwards!
  if n - no no i did hehe, he was not too thrilled about it. 
  
  give up you're a failure you failed you're gonna die alone poor and worthless cause you can't learn code john good job wasting everyone's time and money.
*/

function askName(){
var UserName = prompt('Hi there! What\'s your name?');{
    alert('It\'s to meet you, ' + UserName + ' I hope we can be friends! But first, I must ask ye these questions many to see if I can call you buddy.');
    console.log(UserName);
}
}
console.log()

askName();

function askCaliQuestion(){
var californiaanswer = prompt('Am I originally from Southern California? (y/n)');

if(californiaanswer.toLowerCase() === 'y'){
  alert('Yup! and the heat is rediculous! Rain is way better than a desert!');
  console.log(californiaanswer);
  score = score + 1;
} else {
  alert('I wish i wasn\'t.');
}
}
askCaliQuestion();

function askGameQuestion(){
var gameanswer = prompt('What game did i play most as a kid? sonic adventure or mario 64?');

if(gameanswer.toLowerCase() === 'sonic adventure'){
  alert('Heck yea! It was the best! and the soundtrack is wonderful!');
  console.log(gameanswer);
  score = score + 1;
} else if(gameanswer.toLowerCase() === 'mario 64' ){
  alert('I mean i played it, but it was never my first pick hehe.');
} else {
  alert('I do play a lot of games, but this was more just to show what team I was on. (#\teamsonic #\hashtag)');
}
}
askGameQuestion();

function askHierloomQuestion(){
var hierloomanswer = prompt('At what age did i earn my family heirloom, a 200 year old machete? (0-5)');

switch(hierloomanswer){
case '5':
  alert('yup! Grandpa said "if you can sharpen it on your own and it can cut cactus, it\'s yours."');
  console.log(hierloomanswer);
  score = score + 1;
  break;
case '0':
  alert('i wasn\'t even born yet!');
  break;
case '1':
  alert('A year old and wielding a machete? I\'m not Rambo.');
  break;
case '2':
  alert('I\'m glad you have such faith in me. but no.');
  break; 
case '3':
  alert('close, add a couple years.');
  break;
case '4':
  alert('almost there');
  break  
default:
  alert('not even in the ballpark');
  break;

}
}
askHierloomQuestion();

function askMusicQuestion(){
var musicanswer = prompt('What kind of music do i like? (Instrumentals or rap?)');

if(musicanswer.toLowerCase() === 'instrumentals'){
  alert('You know me so well! are you stalking me?');
  console.log(musicanswer);
  score = score + 1;
} else if(musicanswer.toLowerCase() === 'rap' ){
  alert('no no no no NO! to each their own, but i dislike rap.');
} else {
  alert('I do enjoy many different types, but i do have a preference.');
}
}
askMusicQuestion();

function askyellingquestion(){
var yellinganswer = prompt('Did i or did i not yell at john cleese? (y/n)');

if(yellinganswer.toLowerCase() === 'y'){
  alert('indeed! i didn\'t know who he was at the time but that was quickly remedied afterwards!');
  console.log(yellinganswer);
  score = score + 1;
} else {
  alert('no no i did hehe, he was not too thrilled about it.');
}
}
askyellingquestion();

function askDungeonQuestion(){
var dungeonanddragonanswer = prompt('Do I play Dungeons and Dragons? (y/n)');

if(dungeonanddragonanswer.toLowerCase() === 'y'){
  alert('Indeed I do! it\'s super fun!');
  console.log(dungeonanddragonanswer);
  score = score + 1;
} else {
  alert('Clearly you rolled low on your insight check!');
}
}
askDungeonQuestion();


  
  var colorsAnswers = ['black', 'blue', 'white', 'red'];

  var colorsquestion = prompt('Can you guess the 4 colors I like?');
  if(colorsquestion.toLowerCase() === colorsAnswers){
    alert('Wow! You know me like the back of your hand!');
    break;
  }
