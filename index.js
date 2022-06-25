var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // this iterates and selects all the items individuallly that has the .drum class in it then performs this action on the one that is clicked

    var buttonInnerHTML = this.innerHTML; //"this" is the id of the button that was pressed.

    makeSound(buttonInnerHTML); //the function 'makesound'works for the button that was pressed.

    buttonAnimation(buttonInnerHTML); //the function works on the button that was clicked.

  });

}

document.addEventListener("keypress", function(event) { // if any key is pressed on the entire webpage

  makeSound(event.key); // this function takes the keyboard event and relates it to the key 
  //for example w is replaced ny key and if 'w' is pressed it makes the corresponding sound for w
  //a makes sound a , j makes sound j and so on

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //this is the javascript code that allows you to play audio
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) { //currentKey takes position of the drum that was clicked or the keyboard key pressed

  var activeButton = document.querySelector("." + currentKey); // this is used to select the class e.g . + "w" = .w

  activeButton.classList.add("pressed"); // becomes .w.pressed because the class pressed was added

  setTimeout(function() { // this makes the event last for only 100ms i.e 0.1s, the function the removes after 100ms
    activeButton.classList.remove("pressed");
  }, 100);

}
