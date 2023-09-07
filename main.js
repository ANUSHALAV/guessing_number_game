

"use strict";


let btn = document.querySelector("#btn");
let inputField = document.querySelector("#inputField");
let result = document.querySelector("#result");
let preNumber = document.querySelector("#preview-number");
let remain = document.querySelector("#remaining").innerHTML;



let randomNumber = Math.floor((Math.random() * 20) + 1);

function preview() {
    document.querySelector("#preview-number").innerHTML = inputField;
    return false;
}

function remaining() {

    if (remain > 0) {
        remain--;
        document.querySelector("#remaining").innerHTML = remain;
    }
    else {
        return false;
    }

}

function hint() {
    if (inputField > randomNumber) {
        document.querySelector("#hint").innerHTML = "your number is too long...";
        return false;
    } else if (inputField < randomNumber) {
        document.querySelector("#hint").innerHTML = "your number is too small";
        return false;
    }
}


// this code run when user click on button......
btn.addEventListener("click", (event) => {
    event.preventDefault();
    inputField = parseInt(document.querySelector("#inputField").value);


    if (inputField === randomNumber) {
        document.querySelector("#inputField").value = "";
        document.querySelector("#hint").innerHTML = "";
        result.innerText = "you win the game...";

        return false;
    } else {
        preview();
        remaining();
        hint();
        document.querySelector("#inputField").value = "";
        return false;
    }
});