var NumberOfDrumButtons = document.querySelectorAll(".drum").length;


//Detecting button press

for (var i = 0; i < NumberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // This --> is the click object
        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press 
//Event that triggered the event listener 
document.addEventListener("keydown", function(event) {
    
    makesound(event.key);

    buttonAnimation(event.key);
});

function makesound(key) {
    
    //Switch compares the value of one expression to a case instance,
    //and executes statements associated with that case.

    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

// Animation Button 

function buttonAnimation(key){
    
    var ActiveButton =  document.querySelector("." + key);

    ActiveButton.classList.add("pressed");
    
    setTimeout(function() {
        ActiveButton.classList.remove("pressed");
    }, 100)

}