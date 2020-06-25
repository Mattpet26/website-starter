'use strict'


function askUserName(){
    var internalUserName = prompt('What is your name?');
    document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
    '<h2>Welcome Roger</h2>'
    return internalUserName;
}

// askUserName(); // value of internalUserName not the variable name


// console.log(externalUserName);


function confirmContinue(userName){ // the function is accepting a parameter
    confirm(userName + " Welcome to our website!");
}

function dogAdopt(){
    var dogAdopt;
    dogAdopt = prompt('Are you looking to adopt a puppy today?');
    return dogAdopt
}

function checkLight(dogAdoptQuestion){
    if(dogAdoptQuestion === 'yes'){
        alert('Great! Check out the website and please email us with questions!')
    } else {
        alert('No worries, feel free to look around! We have some amazing dogs and staff');
    }
}

function adopt(dogAdoptQuestion){
    if(dogAdoptQuestion === 'no'){
        var adopt = prompt('Would you like to speak with a specialist?');

        if(adopt === 'yes'){
            alert('Great. An adoption specialist will be assigned shortly');
        } else if(adopt === 'no'){
            alert('That is ok.  Please visit us when you are ready or have questions!');
        } else {
            alert('We are sorry, but we are looking for a "yes" or "no"');
        }
    }
}



var externalUserName = askUserName(); // value of internalUserName not the variable name
confirmContinue(externalUserName);  // this is passing an argument
var dogAdoptQuestion = dogAdopt();
checkLight(dogAdoptQuestion);
adopt(dogAdoptQuestion);