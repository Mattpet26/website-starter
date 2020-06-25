'use strict'

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, unfortunately our offices are currently closed!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, we are open until 6pm!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {    
    greeting = 'Welcome!';
}

document.write('<h5>' + greeting + '</h5>');
