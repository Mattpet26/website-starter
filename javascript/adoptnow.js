'use strict'

function askUserName(){
    var internalUserName = prompt('What is your name?');
    document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
    return internalUserName;
}

function confirmContinue(userName){ // the function is accepting a parameter
    confirm(userName + " Welcome to our website!");
}

function getDogAdoptQuestion(){
    var dogAdopt;
    dogAdopt = prompt('Are you looking to adopt a puppy today? "yes" or "no"');
    //here is a while loop
    while (dogAdopt.toLowerCase() != 'no' && dogAdopt != 'yes'){  //to.LowerCase makes the answer lowercase to work
        dogAdopt = prompt('Are you looking to adopt a puppy today?');
    }
    return dogAdopt
}

function checkLight(dogAdoptQuestion){
    if(dogAdoptQuestion === 'yes'){
        alert('Great! Check out the website and a specialist will be with you soon!')
    } else {
        alert('No worries, feel free to look around! We have some amazing dogs and staff');
    }
}

function forceTest(){ // for loop
    for(var i =0; i < 15; i++){
    var userAnswer = prompt('Please verify you are human, enter the number ""72"')
    //parseInt changes answer into intiger
    if(parseInt(userAnswer) === 72){
        alert('You passed our test, you are human!')
        break; 
    //5 chances to guess a number between 1 and 100
    // If they pass they can adopt a puppy, if not no adoption
    } else{
        alert('Sorry, please try again!')
    }

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
var dogAdoptQuestion = getDogAdoptQuestion();
checkLight(dogAdoptQuestion);
adopt(dogAdoptQuestion);
forceTest();