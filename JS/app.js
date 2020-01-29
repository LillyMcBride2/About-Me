'use strict';
var correctAnswers = 0;
var user = prompt('What is your name?');
alert('Hello ' + user + '!' + ' Welcome to my site!');
var question1 = prompt('Do you think I have more than one pet?');
question1 = question1.toUpperCase();
if (question1 === 'Y' || question1 === 'YES'){
  alert('That\'s correct!');
  correctAnswers++;
}
else if (question1 === 'N' || question1 === 'NO'){
  alert('WRONG!!! I have two pets!');
}
else if (question1){
  do{
    question1 = prompt('Please enter a Yes or a No');
    question1 = question1.toUpperCase();
    if (question1 === 'Y' || question1 === 'YES'){
      alert('That\'s correct!');
      correctAnswers++;
    }
    else if (question1 === 'N' || question1 === 'NO'){
      alert('WRONG!!! I have two pets!');
    }
  }
  while (question1 !== 'Y' && question1 !== 'YES' && question1 !== 'N' && question1 !== 'NO');
}

var question2 = prompt('Do you think I have any tattoos?');
question2 = question2.toUpperCase();
if (question2 === 'Y' || question2 === 'YES'){
  alert('WRONG!!! I don\'t have any tattoos yet!');
}
else if (question2 === 'N' || question2 === 'NO'){
  alert('That\'s correct!');
  correctAnswers++;
}
else if (question2){
  do {
    question2 = prompt('Please enter a Yes or a No');
    question2 = question2.toUpperCase();
    if (question2 === 'Y' || question2 === 'YES'){
      alert('WRONG!!! I don\'t have any tattoos yet!');
    }
    else if (question2 === 'N' || question2 === 'NO'){
      alert('That\'s correct!');
      correctAnswers++;
    }
  }
  while(question2 !== 'Y' && question2 !== 'YES' && question2 !== 'N' && question2 !== 'NO');

}
var question3 = prompt('Do you think I\'ve got a college degree?');
question3 = question3.toUpperCase();
if (question3 === 'Y' || question3 === 'YES'){
  alert('WRONG!!! I don\'t have a college degree!');
}
else if (question3 === 'N' || question3 === 'NO'){
  alert('That\'s correct!');
  correctAnswers++;
}
else if (question3){
  do {
    question3 = prompt('Please enter a Yes or a No');
    question3 = question3.toUpperCase();
    if (question3 === 'Y' || question3 === 'YES'){
      alert('WRONG!!! I don\'t have a college degree!');
    }
    else if (question3 === 'N' || question3 === 'NO'){
      alert('That\'s correct!');
      correctAnswers++;
    }
  }
  while(question3 !== 'Y' && question3 !== 'YES' && question3 !== 'N' && question3 !== 'NO');
}
var question4 = prompt('Do you think I purposely collect lint?');
question4 = question4.toUpperCase();
if (question4 === 'Y' || question4 === 'YES'){
  alert('WRONG!!! I don\'t collect lint purposely!');
}
else if (question4 === 'N' || question4 === 'NO'){
  alert('That\'s correct!');
  correctAnswers++;
}
else if(question4){
  do {
    question4 = prompt('Please enter a Yes or a No');
    question4 = question4.toUpperCase();
    if (question4 === 'Y' || question4 === 'YES'){
      alert('WRONG!!! I don\'t collect lint purposely!');
    }
    else if (question4 === 'N' || question4 === 'NO'){
      alert('That\'s correct!');
      correctAnswers++;
    }
  }
  while(question4 !== 'Y' && question4 !== 'YES' && question4 !== 'N' && question4 !== 'NO');
}
var question5 = prompt('Do you think I collect records?');
question5 = question5.toUpperCase();
if (question5 === 'Y' || question5 === 'YES'){
  alert('That\'s correct!');
  correctAnswers++;
}
else if (question5 === 'N' || question5 === 'NO'){
  alert('WRONG!!! I do collect records');
}
else if (question5){
  do {
    question5 = prompt('Please enter a Yes or a No');
    question5 = question5.toUpperCase();
    if (question5 === 'Y' || question5 === 'YES'){
      alert('That\'s correct!');
      correctAnswers++;
    }
    else if (question5 === 'N' || question5 === 'NO'){
      alert('WRONG!!! I do collect records');
    }
  }
  while(question5 !== 'Y' && question5 !== 'YES' && question5 !== 'N' && question5 !== 'NO');
}
var randomNumber = (Math.floor(Math.random()*10)) + 1;
for(var i=0; i<4; i++){
  var question6 = prompt('Guess a number between 1 and 10');
  question6 = parseInt(question6);
  if (question6 === randomNumber) {
    alert('That\'s correct!');
    correctAnswers++;
    break;
  }
  else if (question6 > randomNumber){
    alert('That\'s too high!');
  }
  else if (question6 < randomNumber){
    alert('That\'s too low!');
  }
}
if (question6 !== randomNumber){
  alert('Actually, the number was ' + randomNumber + '.');
}
var question7Answers = ['PAISLEY', 'FLANNEL', 'HAWAIIAN', 'CAMOUFLAGE'];
for (var x=0; x<6; x++){
  var question7 = prompt('Can you guess one of the four most influential fabric patterns of the day?');
  if (question7.toUpperCase() === question7Answers[0]){
    alert('That\'s a correct answer!');
    correctAnswers++;
    break;
  }
  else if (question7.toUpperCase() === question7Answers[1]){
    alert('That\'s a correct answer!');
    correctAnswers++;
    break;
  }
  else if (question7.toUpperCase() === question7Answers[2]){
    alert('That\'s a correct answer!');
    correctAnswers++;
    break;
  }
  else if (question7.toUpperCase() === question7Answers[1]){
    alert('That\'s a correct answer!');
    correctAnswers++;
    break;
  }
  else{
    alert('Sorry, that is not a correct answer!');
  }
}
alert('The correct answers were: paisley, flannel, hawaiian, and camouflage!');
alert('Your final score on my quiz is ' + correctAnswers + ' out of 7!')