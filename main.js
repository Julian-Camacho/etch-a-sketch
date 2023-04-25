document.addEventListener("DOMContentLoaded", function(){
    console.log("hello, world")
    whiteBoard(16);
})

function whiteBoard(size){
    let board = document.querySelector("#board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div =  document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
    }
}

