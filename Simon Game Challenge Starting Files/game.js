var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;
var started = false;
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    

    
});
$(document).keypress(function(){
    if (!started)
    {
        jQuery("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
    
});
function nextSequence()
{
    var userClickedPattern =[];
    level++;
    jQuery("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}
function playSound(name)
{
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour)
{
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}
function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (gamePattern.length === userClickedPattern.length)
        {
            setTimeout(function()
            {
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        jQuery("h1").text("Game Over, Press Any Key to Restart");
    }
}
function startOver()
{
    gamePattern = [];
    level = 0;
    started = false;
}