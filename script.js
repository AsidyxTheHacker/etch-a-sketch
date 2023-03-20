const board = document.getElementById("board");
const range = document.getElementById("range");
const rangeText = document.getElementById("rangeText");
const gridItem = document.getElementsByClassName('grid-item');
const colorTrigger = document.getElementById("color");
const resetBtn = document.getElementById("resetBtn");
const eraserBtn = document.getElementById("eraserBtn");

function createGrid(size) {
    board.style.setProperty('--grid-rows', size);
    board.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        board.appendChild(cell).className = "grid-item";
    };
};

function clearGrid() {
    let element = document.querySelectorAll('.grid-item');
    element.forEach(item => {
        item.remove();
    });
};

function draw() {
    let isDown = false;
    Array.from(gridItem).forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
        item.addEventListener("mousedown", () => {
            isDown = true;
            item.style.backgroundColor = color;
            Array.from(gridItem).forEach(cell => {
                cell.addEventListener('mouseover', () => {
                    if(isDown == true) {
                        cell.style.backgroundColor = color;
                    };
                });
                cell.addEventListener('mouseup', () => {
                    isDown = false;
                });
            });
        });
    });
};

createGrid(16);
draw();
let color = "black";

eraserBtn.addEventListener('click', () => {
    color = "white";
})
resetBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(range.value);
    draw();
});
colorTrigger.addEventListener('input', () => {
    color = colorTrigger.value;
});
range.onchange = () => {
    rangeText.innerHTML = `Size: ${range.value} x ${range.value}`;
    clearGrid();
    createGrid(range.value);
    draw();
};