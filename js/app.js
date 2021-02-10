
'use strict';


//let city = 0;
//do (city === 5) {
//   alert('you are to far');
//} else if (city > 5) {
//    alert('welcome')
//} else {
//   alert('ywellcome');

//console.log(city);
//}

// switch(city<=7){
//     case '1':
//         do code...
//         break;
//      case '7':
//          do  else.console.log();
//          break;
//      default:
//          do if nothing matches the casses
//          break;

let score = 0



let userName = prompt('May I know your name?');

while (!userName) {
    userName = prompt('please tell me your name');
}

if (userName !== 'mohammed') {
    alert('too bad youre not mohammed');
}

alert('Hola ' + userName + ' glad to have you here');

let answer = prompt('is my favourtie city Prag', 'answer with yes or no');

console.log(answer);

if (answer.toLowerCase() === 'yes') {
    alert('good job');
    score++
} else {
    alert('no thats wrong');

}

console.log(score);

let cityArry = ['Prag', 'Medina', 'Amman', 'Jerusalem', 'Moscow', 'Dubai', 'Doha'];

let check = true;


for (let i = 1; i < 7; i++) {
    let questionOne = prompt('what is most city i visit?');

    for (let ix = 0; ix < cityArry.length; ix++) {

        if (questionOne == cityArry[ix]) {
            console.log(questionOne, cityArry[ix])
            check = false
            score++;
            break;
        }


        // let anothercity = 'Prag';

        console.log(cityArry[ix]);
    }
    if (check == false) {
        break;
    }
    alert('most city i visited'+ cityArry);
}
let question2 = prompt('how many city i like');

if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    score++
    score = score + 1
    alert('good job')

} else {
    alert('wrong')
}
console.log(score);

alert('score is ' + score);


let correctNumber = 20
for (let i = 10; i < 20; i++) {

    let gussingGame = prompt('guess a numbber between 10-30')
    if (question6 == correctNumber) {
        alert('nice answer');
        score++;
        break;
    } else if (question6 > correctNumber) { alert('too high') }
    else if (question6 < correctNumber) {
        alert('too low ')
    } else ('pleas input number')
    if (i == 15)
    {alert ('the corect number is ' + correctNumber);
}
}
/*let i = 0;
do {
    let z= prompt('giss number between 10 to 30 ?')
    if (z < 30) {
        alert('to low')
    }
    else if (z > 30) {
        alert('to high')
    }

    while (i < 30) {
        score++;
    }
    console.log('nice try');
}
