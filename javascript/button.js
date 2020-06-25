function myFunction() {
    var dog = prompt('Please enter your dogs name!');
    if (dog != null) {
        document.getElementById("ddog").innerHTML =
        "Why, " + dog + "! What an excellent name!";
      }
  }