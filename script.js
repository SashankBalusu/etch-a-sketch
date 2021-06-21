const container = document.querySelector("#container")
const button1 = document.querySelector("#reset");
const submit = document.querySelector("#submit");
//const text = document.querySelector("#text");
const pen = document.querySelector("#pen");
const eraser = document.querySelector("#eraser");
const rainbowpen = document.querySelector("#rainbowpen");

const maxSize = 650;

let red = "";
let green = "";
let blue = "";
let currentMode = 0;
let numSq = prompt("Choose your grid height and width (1-100)");
let div;
let px = maxSize/numSq;
let string = "repeat(" + numSq + (", " + px + "px)");


changeSquare(numSq);


const gridpiece = document.querySelectorAll(".gridpiece");
gridpiece.forEach(div => div.addEventListener("mouseover", makeWhite));
button1.addEventListener("click", reset);
pen.addEventListener("click", function (){
    currentMode = 0;
});
eraser.addEventListener("click", function (){
    currentMode = 1;
});
rainbowpen.addEventListener("click", function (){
    currentMode = 2;
});
//submit.addEventListener("click", changeSquare);


function makeWhite(e){
    if (currentMode == 0){
        this.style.background = "black";
    }
    else if (currentMode == 1){
        this.setAttribute('style', 'background: transparent; border: thin solid #000000;');
    }
    else if (currentMode == 2){
        red = Math.floor(Math.random() * 257);
        green = Math.floor(Math.random() * 257);
        blue = Math.floor(Math.random() * 257);
        let color = "rgb(" + red + ", " + green + ", " + blue + ")";
        this.style.background = color;
        //this.setAttribute('style', 'background: white; border: thin solid #0000FF;');
    }
}
function reset (){
    for (let i = 0; i <gridpiece.length; i++){
        gridpiece[i].style.background = "transparent";
    }
}
function changeSquare (numSq){
    px = maxSize/numSq;

    string = "repeat(" + numSq + (", " + px + "px)");
    document.getElementById("container").style.gridTemplateColumns = string;
    document.getElementById("container").style.gridTemplateRows = string;
    console.log(container.getAttribute('style', 'grid-template-rows'));   

    for (let i = 0; i < (numSq*numSq); i++){
        div = document.createElement("div");
        div.classList.add("gridpiece");
        div.style.borderWidth = "2px";
        div.style.border = "thin solid #000000";
        div.style.width = px;
        div.style.height = px;  
        container.appendChild(div);
    }

}







