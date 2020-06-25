var human = prompt('This is a test, are you a human?');
var welcome;
    if (human == "yes") {
        welcome = "Welcome to our site! Please check out our doggos!";
    } else if (human != "yes") {
        welcome = "We apologize, robots cannot own dogs.";
    }
    document.write(welcome);