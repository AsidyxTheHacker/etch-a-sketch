const board = document.getElementById("board");
const range = document.getElementById("range");
const night = document.getElementById("nightMode");
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
    eraserBtn.classList.add('active');
    resetBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
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

let dye = document.getElementById('paint-0');
dye.style.backgroundColor = 'rgb(255, 33, 33)';
let dye1 = document.getElementById('paint-1');
dye1.style.backgroundColor = 'rgb(30, 135, 255)';
let dye2 = document.getElementById('paint-2');
dye2.style.backgroundColor = 'rgb(43, 202, 29)';
let dye3 = document.getElementById('paint-3');
dye3.style.backgroundColor = 'rgb(242, 165, 40)';
let dye4 = document.getElementById('paint-4');
dye4.style.backgroundColor = 'rgb(242, 225, 40)';
let dye5 = document.getElementById('paint-5');
dye5.style.backgroundColor = 'rgb(171, 40, 242)';
let dye6 = document.getElementById('paint-6');
dye6.style.backgroundColor = 'rgb(243, 61, 213)';
let dye7 = document.getElementById('paint-7');
dye7.style.backgroundColor = 'rgb(113, 83, 41)';
let dye8 = document.getElementById('paint-8');
dye8.style.backgroundColor = 'rgb(127, 127, 127)';
let dye9 = document.getElementById('paint-9');
dye9.style.backgroundColor = 'rgb(29, 29, 29)';

const allDyes = [dye, dye1, dye2, dye3, dye4, dye5, dye6, dye7, dye8, dye9];
dye.addEventListener('click', () => {
    color = 'rgb(255, 33, 33)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye.classList.add('selected');
})
dye1.addEventListener('click', () => {
    color = 'rgb(30, 135, 255)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye1.classList.add('selected');
})
dye2.addEventListener('click', () => {
    color = 'rgb(43, 202, 29)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye2.classList.add('selected');
})
dye3.addEventListener('click', () => {
    color = 'rgb(242, 165, 40)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye3.classList.add('selected');
})
dye4.addEventListener('click', () => {
    color = 'rgb(242, 225, 40)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye4.classList.add('selected');
})
dye5.addEventListener('click', () => {
    color = 'rgb(171, 40, 242)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
      dye5.classList.add('selected');
})
dye6.addEventListener('click', () => {
    color = 'rgb(243, 61, 213)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
    dye6.classList.add('selected');
})
dye7.addEventListener('click', () => {
    color = 'rgb(113, 83, 41)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
    dye7.classList.add('selected');
})
dye8.addEventListener('click', () => {
    color = 'rgb(127, 127, 127)';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
    dye8.classList.add('selected');
})
dye9.addEventListener('click', () => {
    color = 'black';
    eraserBtn.classList.remove('active');
    allDyes.forEach(function(el) {
        el.classList.remove("selected")
      })
    dye9.classList.add('selected');
})