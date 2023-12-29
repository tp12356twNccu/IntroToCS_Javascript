function start(){
    var button = document.getElementById("rollButton");
    button.addEventListener("click", rollDice, false);
    die1Image = document.getElementById("die1");
}

var frequencies = [0, 0, 0, 0, 0, 0];
function rollDice(){
    setImage(die1Image);
    
}

var pictures = ["die1.png", "die2.png", "die3.png", "die4.png", "die5.png", "die6.png"]; 
function setImage(dieImage){
    var dieValue = Math.floor(Math.random() * 6);
    if(dieImage instanceof Element){
        dieImage.setAttribute("src", pictures[dieValue]);
        dieImage.setAttribute("alt", "die image with" + dieValue + " spot(s) ");
    }
    frequencies[dieValue -1]++;
    
}


// ! not used
var updateCounter = 0;
function updateFrequencyTable(){
    updateCounter++;
    var tableCells = document.querySelectorAll('tbody td:nth-child(2)'); 
    var tableCells2 = document.querySelectorAll('tbody td:nth-child(3)');
    for (var i = 0; i < frequencies.length; i++) {
        tableCells2[i].textContent = (frequencies[i]).toFixed(0);
        tableCells[i].textContent = (frequencies[i] / (12*updateCounter) * 100).toFixed(2) ;
    }
    


}
window.addEventListener("load", start, false);