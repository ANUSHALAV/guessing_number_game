

"use strict";

let random;

function newGame() {
    random = Math.floor(Math.random() * 20 + 1);
    document.querySelector("#remaining").innerHTML = 10;
    document.querySelector("#hint").innerHTML = "";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#preview-number").innerHTML = "";
    document.querySelector("#inputField").disabled = false;
    document.querySelector("#btn").disabled = false;
}


// game start here.....
newGame();


// this code run when user click submit guess button....
document.querySelector("#btn").addEventListener('click', (event) => {
    event.preventDefault();
    let num = document.querySelector("#inputField").value;
    if (num.length == 0) {
        alert("enter the number");
    } else if (num > 20) {
        alert("please enter 1 to 20 values....");
        document.querySelector("#inputField").value = "";
    } else if (num == random) {
        document.querySelector("#result").innerHTML = "you win the match";
        document.querySelector("#inputField").disabled = true;
        document.querySelector("#btn").disabled = true;
        document.querySelector("#inputField").value = "";
        document.querySelector("#hint").innerHTML = "";
        document.querySelector("#start").innerHTML = "start new game";
    } else {
        let remaining = document.querySelector("#remaining").innerHTML;
        remaining = remaining - 1;
        if (remaining > 0) {
            document.querySelector("#remaining").innerHTML = remaining;
        } else {
            document.querySelector("#remaining").innerHTML = remaining;
            document.querySelector("#result").innerHTML = "you lost the game....";
            document.querySelector("#hint").innerHTML = "random number is = " + random;
            document.querySelector("#inputField").disabled = true;
            document.querySelector("#btn").disabled = true;
            document.querySelector("#start").innerHTML = "start new game";
            return false;
        }

        document.querySelector("#inputField").value = "";
        if (num > random) {
            document.querySelector("#hint").innerHTML = "your number is too long....";
        } else if (num < random) {
            document.querySelector("#hint").innerHTML = "your number is too small....";
        }
    }

});



// this code run when user click start new game button.....
document.querySelector("#start").addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
    document.querySelector("#start").innerHTML = "";
});