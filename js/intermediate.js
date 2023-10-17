//Obtener los cuatro divs de seleccion diferentes por sus IDs
const row1Color1 = document.getElementById('color1-0');
const row1Color2 = document.getElementById('color1-1');
const row1Color3 = document.getElementById('color1-2');
const row1Color4 = document.getElementById('color1-3');
const row2Color1 = document.getElementById('color2-0');
const row2Color2 = document.getElementById('color2-1');
const row2Color3 = document.getElementById('color2-2');
const row2Color4 = document.getElementById('color2-3');
const row3Color1 = document.getElementById('color3-0');
const row3Color2 = document.getElementById('color3-1');
const row3Color3 = document.getElementById('color3-2');
const row3Color4 = document.getElementById('color3-3');
const row4Color1 = document.getElementById('color4-0');
const row4Color2 = document.getElementById('color4-1');
const row4Color3 = document.getElementById('color4-2');
const row4Color4 = document.getElementById('color4-3');

// Agregar un evento clic a cada uno de los divs
const rowColorClick = function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
};
row1Color1.addEventListener('click', rowColorClick);
row1Color2.addEventListener('click', rowColorClick);
row1Color3.addEventListener('click', rowColorClick);
row1Color4.addEventListener('click', rowColorClick);
row2Color1.addEventListener('click', rowColorClick);
row2Color2.addEventListener('click', rowColorClick);
row2Color3.addEventListener('click', rowColorClick);
row2Color4.addEventListener('click', rowColorClick);
row3Color1.addEventListener('click', rowColorClick);
row3Color2.addEventListener('click', rowColorClick);
row3Color3.addEventListener('click', rowColorClick);
row3Color4.addEventListener('click', rowColorClick);
row4Color1.addEventListener('click', rowColorClick);
row4Color2.addEventListener('click', rowColorClick);
row4Color3.addEventListener('click', rowColorClick);
row4Color4.addEventListener('click', rowColorClick);

//comprobar array
const check11 = document.getElementById('check1-1');
const check21 = document.getElementById('check2-1');
const check31 = document.getElementById('check3-1');
const check41 = document.getElementById('check4-1');
const check12 = document.getElementById('check1-2');
const check22 = document.getElementById('check2-2');
const check32 = document.getElementById('check3-2');
const check42 = document.getElementById('check4-2');
const check13 = document.getElementById('check1-3');
const check23 = document.getElementById('check2-3');
const check33 = document.getElementById('check3-3');
const check43 = document.getElementById('check4-3');
const check14 = document.getElementById('check1-4');
const check24 = document.getElementById('check2-4');
const check34 = document.getElementById('check3-4');
const check44 = document.getElementById('check4-4');

//Obtener colores localStorage
const savedColor1 = localStorage.getItem('color1');
const box1 = document.getElementById('box1');
box1.style.backgroundColor = savedColor1;
const savedColor2 = localStorage.getItem('color2');
const box2 = document.getElementById('box2');
box2.style.backgroundColor = savedColor2;
const savedColor3 = localStorage.getItem('color3');
const box3 = document.getElementById('box3');
box3.style.backgroundColor = savedColor3;
const savedColor4 = localStorage.getItem('color4');
const box4 = document.getElementById('box4');
box4.style.backgroundColor = savedColor4;

// Obtener clave/valor localStorage y almacenarla en array
const localStorageDat = (color, localStorageArray) => {
    const colors = localStorage.getItem(color);
    if (colors !== null) {
        localStorageArray.push(colors);
    }
};
const colorsArray = [];
localStorageDat('color1', colorsArray);
localStorageDat('color2', colorsArray);
localStorageDat('color3', colorsArray);
localStorageDat('color4', colorsArray);
const randomArray = [];
const numberRandomElements = 4;
for (let i = 0; i < numberRandomElements; i++) {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    const randomElement = colorsArray[randomIndex];
    randomArray.push(randomElement);
};

// Agregar evento clic al div de selección
document.getElementById('box1').addEventListener('click', function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem('choiceColor', hexColor);
});
document.getElementById('box2').addEventListener('click', function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem('choiceColor', hexColor);
});
document.getElementById('box3').addEventListener('click', function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem('choiceColor', hexColor);
});
document.getElementById('box4').addEventListener('click', function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem('choiceColor', hexColor);
});
const rgbToHex = (rgb) => {
    const value = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!value) return rgb;
    const r = parseInt(value[1]).toString(16).padStart(2, '0');
    const g = parseInt(value[2]).toString(16).padStart(2, '0');
    const b = parseInt(value[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};

let row = 0;
let numRow = 1;

//Deshabilito row's
const selectRow = (rowNumber) => {
    for (let i = 1; i <= 4; i++) {
        const rowElement = document.querySelector('.row' + i);
        rowElement.style.pointerEvents = "none";
        rowElement.style.opacity = "0.8";
    }
    // Habilito row específico
    const selectedRow = document.querySelector('.row' + rowNumber);
    selectedRow.style.pointerEvents = "auto";
    selectedRow.style.opacity = "1";
}
selectRow(numRow);

//Array de selccion
let arraySelect = ['', '', '', ''];
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const id = box.getAttribute('id');
        const idlength = id[id.length - 1];
        const hexColor = rgbToHex(box.style.backgroundColor);
        arraySelect[idlength] = hexColor
    })
});

const checkButtom = document.getElementById('check');
checkButtom.addEventListener('click', () => {

    if (JSON.stringify(arraySelect) === JSON.stringify(randomArray)) {
        row = 0;
        window.location.href = './winner.html?from=intermediate';
    } else {
        row++;
        numRow = 'row' + row;
        if (row === 1) {
            if (arraySelect.some(elemento => elemento.trim() === "")) {
                row--;
                alert("¡Falta algun color!");
                return;

            } else if (arraySelect.every(elemento => elemento.trim() !== "")) {

                if (arraySelect[0] === randomArray[0]) {
                    check11.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check11.style.backgroundColor = 'orange'
                }

                if (arraySelect[1] === randomArray[1]) {
                    check21.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check21.style.backgroundColor = 'orange'
                }

                if (arraySelect[2] === randomArray[2]) {
                    check31.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[2])) {
                    check31.style.backgroundColor = 'orange'
                }

                if (arraySelect[3] === randomArray[3]) {
                    check41.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])) {
                    check41.style.backgroundColor = 'orange'
                }
                selectRow(2);
            }
            arraySelect = ['', '', '', ''];
        }

        if (row === 2) {
            if (arraySelect.some(elemento => elemento.trim() === "")) {
                row--;
                alert("¡Falta algun color!");
                return;

            } else if (arraySelect.some(elemento => elemento.trim() !== "")) {

                if (arraySelect[0] === randomArray[0]) {
                    check12.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check12.style.backgroundColor = 'orange'
                }

                if (arraySelect[1] === randomArray[1]) {
                    check22.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check22.style.backgroundColor = 'orange'
                }

                if (arraySelect[2] === randomArray[2]) {
                    check32.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[2])) {
                    check32.style.backgroundColor = 'orange'
                }

                if (arraySelect[3] === randomArray[3]) {
                    check42.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])) {
                    check42.style.backgroundColor = 'orange'
                }
                selectRow(3);
            }
            arraySelect = ['', '', '', ''];
        }

        if (row === 3) {
            if (arraySelect.some(elemento => elemento.trim() === "")) {
                row--;
                alert("¡Falta algun color!");
                return;

            } else if (arraySelect.some(elemento => elemento.trim() !== "")) {

                if (arraySelect[0] === randomArray[0]) {
                    check13.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check13.style.backgroundColor = 'orange'
                }

                if (arraySelect[1] === randomArray[1]) {
                    check23.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check23.style.backgroundColor = 'orange'
                }

                if (arraySelect[2] === randomArray[2]) {
                    check33.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[2])) {
                    check33.style.backgroundColor = 'orange'
                }

                if (arraySelect[3] === randomArray[3]) {
                    check43.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])) {
                    check43.style.backgroundColor = 'orange'
                }
                selectRow(4);
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 4) {
            if (arraySelect.some(elemento => elemento.trim() === "")) {
                row--;
                alert("¡Falta algun color!");
                return;

            } else if (arraySelect.some(elemento => elemento.trim() !== "")) {

                if (arraySelect[0] === randomArray[0]) {
                    check14.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check14.style.backgroundColor = 'orange'
                }

                if (arraySelect[1] === randomArray[1]) {
                    check24.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check24.style.backgroundColor = 'orange'
                }

                if (arraySelect[2] === randomArray[2]) {
                    check34.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[2])) {
                    check34.style.backgroundColor = 'orange'
                }

                if (arraySelect[3] === randomArray[3]) {
                    check44.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])) {
                    check44.style.backgroundColor = 'orange'
                }
            }
            arraySelect = ['', '', '', ''];
        }

    }

    if (row === 4) {
        localStorage.setItem('randomArray', JSON.stringify(randomArray));
        window.location.href = './loser.html?from=intermediate';
        return;
    }
});
