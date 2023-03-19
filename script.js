let board = document.getElementById("board");

function createBoard(row, col) {
    board.style.setProperty('--slot-rows', row);
    board.style.setProperty('--slot-cols', col);
    for (b = 0; b < (row * col); b++) {
        let slot = document.createElement("div");
        board.appendChild(slot).className = 'square'
    }
}
createBoard(32, 32);