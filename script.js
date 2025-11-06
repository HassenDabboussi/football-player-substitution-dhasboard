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

let inInputFieldNumber = "0";
let outInputFieldNumber = "0";
let isIn = false;

onBtnEl.addEventListener("click", function(){
    console.log("button is working");
    inInputFieldEl.value= inInputFieldNumber;
    outInputFieldEl.value= outInputFieldNumber;
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



