
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

let score = 0;

function A1() {
    let userName = prompt('May I know your name?');

    while (!userName) {
        userName = prompt('please tell me your name');
    }

    if (userName !== 'mohammed') {
        alert('too bad youre not mohammed');
    }

    alert('Hola ' + userName + ' glad to have you here');
} A1();

function A2() {

    let answer = prompt('is my favourtie city Prag', 'answer with yes or no');

    console.log(answer);

    if (answer.toLowerCase() === 'yes') {
        alert('good job');
        score++;
    } else {
        alert('no thats wrong');

    }
} A2();

function A3() {
    let cityArry = ['Prag', 'Medina', 'Amman', 'Jerusalem', 'Moscow', 'Dubai', 'Doha'];
    let check = true;
    for (let i = 1; i < 7; i++) {
        let questionOne = prompt('what is most city i visit?');

        for (let ix = 0; ix < cityArry.length; ix++) {

            if (questionOne == cityArry[ix]) {
                console.log(questionOne, cityArry[ix])
                alert('that\s right');
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
        alert('most city i visited' + cityArry);
    }
    alert('most city i visited' + cityArry);
}
let question2 = prompt('how many city i like');

 A3();
function A4() {
    let question2 = prompt('how many city i like');
 

    if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
        score++;
        alert('good job');

    } else {
        alert('wrong');
    }
    console.log(score);
} A4();

function A5() {
    let correctNumber = 20;
    for (let i = 10; i < 14; i++) {

        let gussingGame = prompt('guess a numbber between 10-30');
        if (gussingGame == correctNumber) {
            alert('nice answer');
            score++;
            break;
        } else if (gussingGame > correctNumber) { alert('too high'); }
        else if (gussingGame < correctNumber) {
            alert('too low ');
        } else {
            alert('pleas input number');
        }
    }

    alert('the corect number is ' + correctNumber);
} A5();

    let gussingGame = prompt('guess a numbber between 10-30')
    if (gussingGame == correctNumber) {
        alert('nice answer');
        score++;
        
    } else if (gussingGame > correctNumber) { alert('too high') }
    else if (gussingGame < correctNumber) {
        alert('too low ')
    } else ('pleas input number')
    if (i == 15) {
        alert('the corect number is ' + correctNumber);

alert('score is ' + score);
    }
    