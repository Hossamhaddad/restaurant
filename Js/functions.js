function validateUserInput(){
    var userInput;
    while (userInput === '' || userInput === null || userInput === undefined){
    userInput=prompt('enter your name');}
    return userInput;
    }


alert('hello dear customer');
var customerName;
customerName= validateUserInput ();

document.write('welcome  '  + customerName +  ' to our restaurant');
var message;

var time = prompt('what time is it');

if (time<12) {
    message='you should check our breakfast meals';
} else {
    message='you should check our lunch meals';
}
alert(message);