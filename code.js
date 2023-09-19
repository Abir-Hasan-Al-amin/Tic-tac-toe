const gameBoard = document.querySelector("#game-Board");
const info = document.querySelector("#info");
const startCells=[
    "","","","","","","","",""
];

let go="circle";
info.textContent="circle turn's";
function createBoard() {
    startCells.forEach((cell,idx)=>{
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id =idx;
        cellElement.addEventListener('click',addS);
        gameBoard.append(cellElement);
    });
}
createBoard();
function addS(e) {
    const sDisplay = document.createElement("div");
    sDisplay.classList.add(go);
    e.target.append(sDisplay);
    go = go === "circle" ? "cross" : "circle";
    info.textContent = go + " turn's";
    e.target.removeEventListener('click',addS);
    checkScore();
}
function checkScore() {
    const allSquares=document.querySelectorAll(".square");
    const winningCombos=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    winningCombos.forEach( array =>{
    const circleWins =  array.every(cell=>
        allSquares[cell].firstChild?.classList.contains("circle"));
    if(circleWins){
        info.textContent="Circle Wins !!!";
        allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)));
        return;
    }
    });

    winningCombos.forEach( array =>{
        const crossWins =  array.every(cell=>
            allSquares[cell].firstChild?.classList.contains("cross"));
        if(crossWins){
            info.textContent="CrossWins !!!";
            allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)));
            return;
        }
        });
}