

"use strict";

let random;

let num=document.querySelector("#inputField");

function newGame(){
    random=Math.floor(Math.random()*20+1); 
    console.log(random);
}


let game=true;

if(game){
    newGame();
}

document.querySelector("#btn").addEventListener("click",(event)=>{
    event.preventDefault();
    num=num.value;
    if(num==random){
        document.querySelector("#result").innerHTML="you win the match";
        newGame();
    }else{
        if(num>random){
            document.querySelector("#hint").innerHTML="your number is too long....";
        }else if(num<random){
            document.querySelector("#hint").innerHTML="your number is too small....";
        }
    }

});
