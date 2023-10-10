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



// Obtener clave localStorage y almacenarla en array
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
const numeroElementosAleatorios = 4;
for (let i = 0; i < numeroElementosAleatorios; i++) {
    const indiceAleatorio = Math.floor(Math.random() * colorsArray.length);
    const elementoAleatorio = colorsArray[indiceAleatorio];
    randomArray.push(elementoAleatorio);
}
// Imprimir el nuevo array con elementos aleatorios
console.log(randomArray);


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

//Obtener los cuatro divs diferentes por sus IDs
const color1 = document.getElementById('color0-1');
const color2 = document.getElementById('color1-1');
const color3 = document.getElementById('color2-1');
const color4 = document.getElementById('color3-1');

//const color1 = document.getElementById('color1-2');
//const color2 = document.getElementById('color2-2');
//const color3 = document.getElementById('color3-2');
//const color4 = document.getElementById('color4-2');
//
//const color9 = document.getElementById('color1-3');
//const color10 = document.getElementById('color2-3');
//const color11 = document.getElementById('color3-3');
//const color12 = document.getElementById('color4-3');
//
//const color13 = document.getElementById('color1-4');
//const color14 = document.getElementById('color2-4');
//const color15 = document.getElementById('color3-4');
//const color16 = document.getElementById('color4-4');
//
//const color17 = document.getElementById('color1-5');
//const color18 = document.getElementById('color2-5');
//const color19 = document.getElementById('color3-5');
//const color20 = document.getElementById('color4-5');
//
//const color21 = document.getElementById('color1-6');
//const color22 = document.getElementById('color2-6');
//const color23 = document.getElementById('color3-6');
//const color24 = document.getElementById('color4-6');
//
//const color25 = document.getElementById('color1-7');
//const color26 = document.getElementById('color2-7');
//const color27 = document.getElementById('color3-7');
//const color28 = document.getElementById('color4-7');
// Agregar un evento clic a cada uno de los divs
color1.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color2.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color3.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color4.addEventListener("click", function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
const arraySelect = ['', '', '', ''];
boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const id = box.getAttribute('id');
        const idlength = id[id.length - 3];
        console.log(idlength);
        const hexColor = rgbToHex(box.style.backgroundColor);
        arraySelect[idlength] = hexColor
        console.log(arraySelect);
    });
});
const check1 = document.querySelector('#check1-1');
const check2 = document.querySelector('#check2-1');
const check3 = document.querySelector('#check3-1');
const check4 = document.querySelector('#check4-1');


//comprobar array
const checkButton = document.getElementById('check');
checkButton.addEventListener('click', () => {

    const isArrayEqual = (randomArray, arraySelect) => {
        //if (randomArray.length !== arraySelect.length) {
        //    return; 'Te falta seleccionar algun color';
        //}
        for (let i = 0; i < randomArray.length; i++) {
            if (randomArray[i]=arraySelect[i]) {
                window.location.href = './winner.html'
            
            if (randomArray[0] === arraySelect[0]) {
                check1.style.backgroundColor = 'white';
            } else if(randomArray.includes(arraySelect[i])) {
                check1.style.backgroundColor = 'red';              
            }
            if (randomArray[1] === arraySelect[1]) {
                check2.style.backgroundColor = 'white';
            } else if(arraySelect.includes(randomArray[i])) {
                check2.style.backgroundColor = 'red';
            }
            if (randomArray[2] === arraySelect[2]) {
                check3.style.backgroundColor = 'white';
            } else if(arraySelect.includes(randomArray[i])) {
                check3.style.backgroundColor = 'red';
            }
            if (randomArray[3] === arraySelect[3]) {
                check4.style.backgroundColor = 'white';
            } else if(arraySelect.includes(randomArray[i])) {
                check4.style.backgroundColor = 'red';
            }
            }
        }
    };
    isArrayEqual(randomArray, arraySelect);
});

