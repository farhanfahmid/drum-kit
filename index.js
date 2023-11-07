function handleClick(){
    var buttns = this.innerHTML;

    //handlePress(buttns);

    addAnimation(buttns);

    switch (buttns) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;       
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
     
    
        default:
            break;
    }
    
} //function to respond to mouse clicks on buttons with corresponding sounds

function handlePress(key){
    

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;       
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
     
    
        default:
            break;
    }
    
} //function to respond to keyboard presses with corresponding sounds

function addAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 100)
} //function to add animation both for key presses and button clicks


var buttons_arr = document.querySelectorAll(".drum");

for(let i=0; i<buttons_arr.length; i++){

    buttons_arr[i].addEventListener("click", handleClick);
     
}//using querySelectorAll to get all the drums gives us an array of those different drums
//so we use a for loop to iterate through that array of buttons/drums to listen for a click
//when click event is heard, the handleClick function is called


document.addEventListener("keypress", function(event){
    handlePress(event.key);
    addAnimation(event.key);
}) //the entire document is selected, and it listens for the event of a key press
//when key is pressed, that event is generated as an object with properties like
//which key was pressed, how long it was pressed for, etc.
//we only need to know which key was pressed. So we select that value by typing event.key 
//and pass event.key into the handlePress function.


//REMEMBER, IN YOUR HIGHER ORDER FUNCTION, IF THE 2ND PARAMETER, WHICH CALLS THE CALLBACK FUNCTION,
//HAS TO TAKE IN AN INPUT, USE ANONYMOUS FUNCTION TO DEFINE THAT CALLBACK FUNCTION.
//OTHERWISE, DON'T USE ANONYMOUS FUNCTION.

    








