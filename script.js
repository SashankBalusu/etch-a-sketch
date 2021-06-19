const container = document.querySelector("#container")
const button1 = document.querySelector("button");
const submit = document.querySelector("#submit");
const text = document.querySelector("#text");

let numSq = 0;
let div;
for (let i = 0; i < (256); i++){
    div = document.createElement("div");
    div.classList.add("gridpiece");
    div.style.borderWidth = "2px";
    div.style.border = "thin solid #0000FF";
    div.style.width = "20px";
    div.style.height = "20px";  
    container.appendChild(div);
}
function makeWhite(e){
    this.style.background = "white";
}
function reset (){
    for (let i = 0; i <gridpiece.length; i++){
        gridpiece[i].style.background = "blueviolet";
    }
}
function changeSquare (){
    numSq = (Number(text.value));
    for (let i = 0; i < (numSq*numSq); i++){
        div = document.createElement("div");
        div.classList.add("gridpiece");
        div.style.borderWidth = "2px";
        div.style.border = "thin solid #0000FF";
        div.style.width = "20px";
        div.style.height = "20px";  
        container.appendChild(div);
    }
    let string = "repeat(" + numSq + (", 20px)");
    
}


const gridpiece = document.querySelectorAll(".gridpiece");
gridpiece.forEach(div => div.addEventListener("mouseover", makeWhite));

button1.addEventListener("click", reset);
submit.addEventListener("click", changeSquare);




