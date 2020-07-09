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
*/

function askName(){
var UserName = prompt('Hi there! What\'s your name?');{
    alert('It\'s to meet you, ' + UserName + ' I hope we can be friends! But first, I must ask ye these questions many to see if I can call you buddy.');
}
}
askName();

function askCaliQuestion(){
var californiaanswer = prompt('Am I originally from Southern California? (y/n)');

if(californiaanswer === 'y'){
  alert('Yup! and the heat rediculous! Rain is way better than a desert!');
} else {
  alert('I wish i wasn\'t.');
}
}
askCaliQuestion();

function askGameQuestion(){
var gameanswer = prompt('What game did i play most as a kid? sonic adventure or mario 64?');

if(gameanswer === 'sonic adventure'){
  alert('Heck yea! It was the best! and the soundtrack is wonderful!');
} else if(gameanswer === 'mario 64' ){
  alert('I mean i played it, but it was never my first pick hehe.');
} else {
  alert('I do play a lot of games, but this was more just to show what team I was on. (#\teamsonic #\hashtag)');
}
}
askGameQuestion();

function askHierloomQuestion(){
var hierloomanswer = prompt('At what age did i earn my family heirloom, a 200 year old machete? (1-10)');

switch(hierloomanswer){
case '5':
  alert('yup! Grandpa said "if you can sharpen it on your own and it can cut cactus, it\'s yours."');
  break;
case '0':
  alert('i wasn\'t even born yet!');
  break;
case '1':
  alert('A year old and wielding a machete? I\'m not Rambo.');
  break;
case '2':
  alert('I\'m glad you have such faith in me. but no.')  
case '3':
  alert('close, add a couple years.');
  break;
case '4':
  alert('almost there')  
default:
  alert('not even in the ballpark');

}
}
askHierloomQuestion();

function askMusicQuestion(){
var musicanswer = prompt('What kind of music do i like? (Instrumentals or rap?)');

if(musicanswer === 'instrumentals'){
  alert('You know me so well! are you stalking me?');
} else if(musicanswer === 'rap' ){
  alert('no no no no NO! to each their own, but i dislike rap.');
} else {
  alert('I do enjoy many different types, but i do have a preference.');
}
var yellinganswer = prompt('Did i or did i not yell at john cleese? (y/n)');

if(yellinganswer === 'y'){
  alert('indeed! i didn\'t know who he was at the time but that was quickly remedied afterwards!');
} else {
  alert('no no i did hehe, he was not too thrilled about it.');
}
}
askMusicQuestion();

function askDungeonQuestion(){
var dungeonanddragonanswer = prompt('Do I play Dungeons and Dragons?');

if(dungeonanddragonanswer === 'y'){
  alert('Indeed I do! it\'s super fun!');
} else {
  alert('Clearly you rolled low on your insight check!')
}
}
askDungeonQuestion();

var didthishappenarray = ['(A) I got my first kiss from a Parrot.', '(B) Was stranded on a boat with no food or water for two days.', '(C) Got ran over by my own ATV 3 times in the same day.', '(D) Accidentally set a field on fire and almost lit up the house next to it.', '(E) Lead and Coordinated the arrival for Air Force One to Seattle During the Obama Administration.', '(F) Took a nap underwater while Scuba Diving.', '(G) Spent my first date in High School shoplifting because my Girlfriend was a Kleptomanic.', '(H) Survived a whole month eating nothing but Hot Pockets.'];
didthishappenarray[A] === 'I got my first kiss from a Parrot.';
didthishappenarray[A];

didthishappenarray[B] === 'Was stranded on a boat with no food or water for two days.';
didthishappenarray[B];

didthishappenarray[C] === 'Got ran over by my own ATV 3 times in the same day.';
didthishappenarray[C];

didthishappenarray[D] === 'Accidentally set a field on fire and almost lit up the house next to it.';
didthishappenarray[D];

didthishappenarray[E] === 'Lead and Coordinated the arrival for Air Force One to Seattle During the Obama Administration.';
didthishappenarray[E];

didthishappenarray[F] === 'Took a nap underwater while Scuba Diving.';
didthishappenarray[F];

didthishappenarray[G] === 'Spent my first date in High School shoplifting because my Girlfriend was a Kleptomanic.';
didthishappenarray[G];

didthishappenarray[H] === 'Survived a whole month eating nothing but Hot Pockets.';
didthishappenarray[H];

var didthishappenquiz = prompt('Which of the following situations do you think has *not* happened to me? (A) I got my first kiss from a Parrot. (B) Was stranded on a boat with no food or water for two days. (C) Got ran over by my own ATV 3 times in the same day. (D) Accidentally set a field on fire and almost lit up the house next to it. (F) Took a nap underwater while Scuba Diving. (G) Spent my first date in High School shoplifting because my Girlfriend was a Kleptomanic. Or (H) Survived a whole month eating nothing but Hot Pockets.');

if(didthishappenquiz === didthishappenarray[F]){
 console.log('Correct! I\'ve never actually slept with the fishes, probably for the best. But I am a Diver.');
} else(didthishappenquiz === didthishappenarray[A] || didthishappenarray[B] || didthishappenarray[C] || didthishappenarray[D] || didthishappenarray[E] || didthishappenarray[G] || didthishappenarray[H]);{
  console.log('No that actually happened, try again?')
}

