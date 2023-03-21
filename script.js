const board = document.getElementById("board");
const range = document.getElementById("range");
const night = document.getElementById("nightMode");
const rangeText = document.getElementById("rangeText");
const gridItem = document.getElementsByClassName('grid-item');
const colorTrigger = document.getElementById("color");
const resetBtn = document.getElementById("resetBtn");
const eraserBtn = document.getElementById("eraserBtn");
const saveBtn = document.getElementById("saveBtn");

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
    eraserBtn.classList.add('active');
    resetBtn.classList.remove('active');
})
resetBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(range.value);
    draw();
});
colorTrigger.addEventListener('input', () => {
    eraserBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    color = colorTrigger.value;
});
range.onchange = () => {
    rangeText.innerHTML = `Size: ${range.value} x ${range.value}`;
    clearGrid();
    createGrid(range.value);
    draw();
};

const body = document.querySelector('body');
const video = document.querySelector('video');
const toggle = document.querySelector('#nightMode');
toggle.addEventListener('click', () => {
    video.classList.toggle('dark');
    body.classList.toggle('dark2');
})

const colorPalette = document.getElementById('colorBtns');
function colorCreator(swatch) {
    for (c = 0; c < swatch; c++) {
        let paint = document.createElement('div');
        paint.id = 'paint-' + c;
        colorPalette.appendChild(paint).className = 'paint-cell';
    }
}

colorCreator(10);
document.getElementById('paint-0').style.backgroundColor = 'rgb(255, 33, 33)';
document.getElementById('paint-1').style.backgroundColor = 'rgb(30, 135, 255)';
document.getElementById('paint-2').style.backgroundColor = 'rgb(43, 202, 29)';
document.getElementById('paint-3').style.backgroundColor = 'rgb(242, 165, 40)';
document.getElementById('paint-4').style.backgroundColor = 'rgb(242, 225, 40)';
document.getElementById('paint-5').style.backgroundColor = 'rgb(171, 40, 242)';
document.getElementById('paint-6').style.backgroundColor = 'rgb(243, 61, 213)';
document.getElementById('paint-7').style.backgroundColor = 'rgb(113, 83, 41)';
document.getElementById('paint-8').style.backgroundColor = 'rgb(127, 127, 127)';
document.getElementById('paint-9').style.backgroundColor = 'rgb(29, 29, 29)';