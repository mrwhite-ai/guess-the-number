var randomNumber=Math.floor(Math.random()*101);
var guessNumber=document.getElementById("guessNumber");
var prevGuess=document.getElementById("prevGuesses");
var upordown=document.getElementById("upordown");
var restart=document.getElementById("restartGame");
var getNumber=document.getElementById("getNumber")
var guessCount=1;


getNumber.addEventListener("click",checkNumber);

function checkNumber(){
    
    if(guessNumber.value<1 || guessNumber.value>100  ){
        upordown.textContent="Please enter a number 1-100";
        upordown.style.color="grey";
    }else if(isNaN(guessNumber.value)){
        upordown.textContent="Guess is not a number";
        upordown.style.color="grey";
    }
    else{
        prevGuess.textContent+= guessNumber.value+" ";
    if(randomNumber==guessNumber.value){
        upordown.textContent="Congratulations, Your guess is right"
        upordown.style.color="green";
        gameOver();
    }else if (guessCount==10){
        upordown.textContent="Game Over!";
        upordown.style.color="red";
        gameOver();
    }else{
        if(randomNumber>guessNumber.value){
            upordown.textContent="GO HIGHER";
            upordown.style.color="orange";
        }else if(randomNumber<guessNumber.value){
            upordown.textContent="GO LOWER"
            upordown.style.color="purple";
        }
    }
}
    console.log(randomNumber);
    guessNumber.value="";
    guessCount++;
}

function gameOver(){
    restart.classList="btn btn-secondary";
    getNumber.classList="btn btn-primary d-none";
}

restart.addEventListener("click",restartGame);

function restartGame(){
    guessCount=1;
    restart.classList="btn btn-secondary d-none";
    getNumber.classList="btn btn-primary";
    prevGuess.textContent="";
    upordown.textContent="HIGH or LOW"
    upordown.style.color="black";
    randomNumber=Math.floor(Math.random()*101);
}
