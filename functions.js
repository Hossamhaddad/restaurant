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


var stars=prompt('What star rating would you give our menu, 1-5?');

 function userTime(star_rate){
  for(i=1; i<=star_rate; i++){
        document.write('<p>' + i +  '</p>' + '<img src="menu-3.jpg" alt="" width="200" height="200">')
            }
 }  
 userTime(stars);
