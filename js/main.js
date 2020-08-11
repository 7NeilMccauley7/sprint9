console.log("Hello this is a console massage");

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    /*itt paraméterben adom meg(paraméterként) a showSumPrice 2 function két argumentumát */
    
    showSumPrice(price, amountNumber);
}
function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    
        if (amountNumber > 10) {
            alert("Maximum 10 terméket vásárolhat!");
           
        } else if (amountNumber < 1) {
            alert("Minimum 1 terméket kell vásárolnia!");
        } else {
    
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
     
    }   
}


/*event hogy mi történtjen ha az elemre kattintok*/ 

let sendButton = document.querySelector("#orderForm > button");

/*event az addEventLisener-rel. Ezzel több eseményt lehet megadni*/
/*sendButton.addEventListener("click", function() {
    alert("Hello JS!");

});
*/


//Űrlap
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("Submit", function(ev){
    /*ez azt csinálja hogyha rákattintanak a gombra akkor le fog frissülni az oldal*/
  
    ev.preventDefault();
    console.log( this );

});








/* lekéri az ablak méretét a console log-ba
window.addEventListener("resize", function() {
        console.log(this.innerHeight, this.innerWidth);

    })
*/

/*
sendButton.onclick = function () {
        alert("Hello JS!");
}*/

/*

//Add helptext - hozzáad egy új elemet a html-nek
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);
*/
/*
//elvesz szülőelemből egy elemet a html-nek
parent.removeChild(helpText);*/