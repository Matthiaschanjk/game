var buttonColours = ["red", "blue", "green", "yellow"];
var gamepattern =[];
var userClickPattern = [];
var level = 0;
var i = 0;

$(".btn").click(function(event) {
    var color = event.target.id;
    $("#" + color).fadeOut(100).fadeIn(100);
    playAudio(color);
    userClickPattern.push(color);
    if (userClickPattern.length === gamepattern.length) {
        checker(userClickPattern, gamepattern, level);
    }
});

document.addEventListener("keydown", function(){
    if (level == 0) {
        nextSequence();
    }
});

//Pick random sequences
function nextSequence() {
        $("#level-title").text("Level " + level);
        level++;
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamepattern.push(randomChosenColour);
        userClickPattern = [];
        setTimeout(function() {
            show(gamepattern);
        }, 1000)
}

//play Audio of buttons
function playAudio(colour) {
    switch(colour) {
        case "red":
            var redSound = new Audio('./sounds/red.mp3');
            redSound.play();
            break;

        case "blue":
            var BlueSound = new Audio('./sounds/blue.mp3');
            BlueSound.play();
            break;

        case "green":
            var greenSound = new Audio('./sounds/green.mp3');
            greenSound.play();
            break;

        case "yellow":
            var yellowSound = new Audio('./sounds/yellow.mp3');
            yellowSound.play();
            break;
        
        default:
    }
}

//checks winning conditions of the game
function checker(userClickPattern, gamepattern, level) {
    var array1 = JSON.stringify(userClickPattern);
    var array2 = JSON.stringify(gamepattern);
    if (level > 20) {
        $("#level-title").text("You Win! Refresh to play again!")
        var gamepattern =[];
        var userClickPattern =[];
        var level = 0;

    }

    else {
        if (array1 === array2) {
            nextSequence();
        }
    
        else {
            $("#level-title").text("You Lost! Refresh to play again.");
            var gamepattern =[];
            var userClickPattern =[];
            var level = 0;
        }
    }
}

//shows the gamepattern that user is suppose to follow
function show(gamepattern) {   
    if (i < gamepattern.length) {
        var button = gamepattern[i];
        $("#" + button).fadeOut(100).fadeIn(100);
        playAudio(button)
        i++;
    }
}
