const inNumberEl = document.getElementById("in-number");
const outNumberEl = document.getElementById("out-number");
const resetBtnEl = document.getElementById("reset-btn");
const onBtnEl = document.getElementById("on-btn");
const offBtnEl = document.getElementById("off-btn");
const displayBtnEl = document.getElementById("display-btn");
const inInputFieldEl = document.getElementById("in-input-field");
const inInputFieldBtn = document.getElementById("in-input-field-btn");
const outInputFieldEl = document.getElementById("out-input-field");
const outInputFieldBtn = document.getElementById("out-input-field-btn");
const n0El = document.getElementById("n0");
const n1El = document.getElementById("n1");
const n2El = document.getElementById("n2");
const n3El = document.getElementById("n3");
const n4El = document.getElementById("n4");
const n5El = document.getElementById("n5");
const n6El = document.getElementById("n6");
const n7El = document.getElementById("n7");
const n8El = document.getElementById("n8");
const n9El = document.getElementById("n9");

let inInputFieldNumber = "";
let outInputFieldNumber = "";
let isIn = false;

onBtnEl.addEventListener("click", function(){
    console.log("button is working");
    if (inInputFieldNumber != "" && outInputFieldNumber != ""){
        inInputFieldEl.value= inInputFieldNumber;
        outInputFieldEl.value= outInputFieldNumber;
    } else {
        inInputFieldEl.value= "0";
        outInputFieldEl.value= "0";
    }
})

offBtnEl.addEventListener("click", function(){
    inInputFieldEl.value= "";
    outInputFieldEl.value= "";
})

resetBtnEl.addEventListener("click", function(){
    inInputFieldEl.value= "0";
    outInputFieldEl.value= "0";
})

inInputFieldBtn.addEventListener("click", function(){
    isIn = true;
    inInputFieldEl.value = "-";
})

outInputFieldBtn.addEventListener("click", function(){
    isIn = false;
    outInputFieldEl.value = "-";
})

n0El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "0";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "0"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n1El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "1";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "1"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n2El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "2";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "2"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n3El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "3";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "3"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n4El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "4";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "4"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n5El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "5";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "5"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n6El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "6";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "6"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n7El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "7";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "7"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n8El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "8";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "8"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

n9El.addEventListener("click", function(){
    if (isIn) {
        inInputFieldEl.value = "";
        inInputFieldNumber += "9";
        inInputFieldEl.value = inInputFieldNumber;
    } else {
        outInputFieldEl.value = "";
        outInputFieldNumber += "9"
        outInputFieldEl.value = outInputFieldNumber;
    }
})

displayBtnEl.addEventListener("click", function(){
    if (inInputFieldNumber != "" && outInputFieldNumber != ""){
        inNumberEl.textContent = inInputFieldEl.value;
        inNumberEl.style.color = "green";
        outNumberEl.textContent = outInputFieldEl.value;
        outNumberEl.style.color = "red";
    }
    
})



