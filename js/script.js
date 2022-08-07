var elForm = document.querySelector(".site-form");
var elTemp = elForm.querySelector(".site-temp");
var elCheck = elForm.querySelector(".site-check");

var elResult = document.querySelector(".result");

const EMPT = "";
const MIN_TEMP = 5;
const MAX_TEMP = 40;

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let privillage = elCheck.checked;

   if (elTemp.value === EMPT) {
     elResult.textContent = "Please, enter number";
   } else if (elTemp.value < MIN_TEMP || privillage) {
        elResult.textContent = "You can not run";
    } else if (elTemp.value > MAX_TEMP || privillage) {
        elResult.textContent = "You can not run";
    } else {
        elResult.textContent = "You can go running";
    } 
   
    
})