let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    console.log("hello, world")
    whiteBoard(16);

    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", function(){
        let size = getSize();
        whiteBoard(size);
    })
})

function whiteBoard(size){
    let board = document.querySelector("#board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div =  document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Type the size of the Board");
    let message = document.querySelector(".message");
    if(input == " "){
        message.innerHTML = "Please provide a number";
    } else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now you can Play!";
        return input;
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "black";
    }
}

function setColor(choice){
    color = choice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}