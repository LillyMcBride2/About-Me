'use strict';

var user = prompt('What is your name?');
alert('Hello ' + user + '!' + ' Welcome to my site!');
var question1 = prompt('Do you think I have more than one pet?');
question1 = question1.toUpperCase();
if (question1 === 'Y' || question1 === 'YES'){
  alert('That\'s correct!');
}
else if (question1 === 'N' || question1 === 'NO'){
  alert('WRONG!!! I have two pets!');
}
else{
  while(question1 !== 'Y' && question1 !== 'YES' && question1 !== 'N' && question1 !== 'NO'){
    prompt('Please enter a Yes or a No');
    if (question1 === 'Y' || question1 === 'YES'){
      alert('That\'s correct!');
    }
    else if (question1 === 'N' || question1 === 'NO'){
      alert('WRONG!!! I have two pets!');
    }
  }

}
var question2 = prompt('Do you think I have any tattoos?');
question2 = question2.toUpperCase();
if (question2 === 'Y' || question2 === 'YES'){
  alert('WRONG!!! I don\'t have any tattoos yet!');
}
else if (question2 === 'N' || question2 === 'NO'){
  alert('That\'s correct!');
}
else{
  while(question2 !== 'Y' && question2 !== 'YES' && question2 !== 'N' && question2 !== 'NO'){
    prompt('Please enter a Yes or a No');
    if (question2 === 'Y' || question2 === 'YES'){
      alert('WRONG!!! I don\'t have any tattoos yet!');
    }
    else if (question2 === 'N' || question2 === 'NO'){
      alert('That\'s correct!');
    }
  }

}
var question3 = prompt('Do you think I\'ve got a college degree?');
question3 = question3.toUpperCase();
if (question3 === 'Y' || question3 === 'YES'){
  alert('WRONG!!! I don\'t have a college degree!');
}
else if (question3 === 'N' || question3 === 'NO'){
  alert('That\'s correct!');
}
else{
  while(question3 !== 'Y' && question3 !== 'YES' && question3 !== 'N' && question3 !== 'NO'){
    prompt('Please enter a Yes or a No');
    if (question3 === 'Y' || question3 === 'YES'){
      alert('WRONG!!! I don\'t have a college degree!');
    }
    else if (question3 === 'N' || question3 === 'NO'){
      alert('That\'s correct!');
    }
  }

}
var question4 = prompt('Do you think I purposely collect lint?');
question4 = question4.toUpperCase();
if (question4 === 'Y' || question4 === 'YES'){
  alert('WRONG!!! I don\'t collect lint purposely!');
}
else if (question4 === 'N' || question4 === 'NO'){
  alert('That\'s correct!');
}
else{
  while(question4 !== 'Y' && question4 !== 'YES' && question4 !== 'N' && question4 !== 'NO'){
    prompt('Please enter a Yes or a No');
    if (question4 === 'Y' || question4 === 'YES'){
      alert('WRONG!!! I don\'t collect lint purposely!');
    }
    else if (question4 === 'N' || question4 === 'NO'){
      alert('That\'s correct!');
    }
  }

}
var question5 = prompt('Do you think I\'ve got a college degree?');
question5 = question5.toUpperCase();
if (question5 === 'Y' || question5 === 'YES'){
  alert('That\'s correct!');
}
else if (question5 === 'N' || question5 === 'NO'){
  alert('WRONG!!! I do collect records');
}
else{
  while(question5 !== 'Y' && question5 !== 'YES' && question5 !== 'N' && question5 !== 'NO'){
    prompt('Please enter a Yes or a No');
  }
  if (question5 === 'Y' || question5 === 'YES'){
    alert('That\'s correct!');
  }
  else if (question5 === 'N' || question5 === 'NO'){
    alert('WRONG!!! I do collect records');
  }
}

