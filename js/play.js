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

const fila = 'row' + 1;

// Función para obtener una clave de localStorage y almacenarla en un array
const localStorageDat = (color, localStorageArray) => {
    const colors = localStorage.getItem(color);
    if (colors !== null) {
        localStorageArray.push(colors);
        //localStorage.removeItem(color); // Opcional: eliminar la clave de localStorage si se desea
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
console.log(colorsArray);

// Agregar un evento clic al div de selección
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

//comprobar array
//const array2 = ['#e01a1a', '#2b2727', '#e8d4d4', '#3a0303']
//const checkButton = document.getElementById('check');
//checkButton.addEventListener('click', () => {
//
//    const isArrayEqual = (randomArray, array2) => {
//    if (randomArray.length !== array2.length) {
//    return 'Te falta seleccionar algun color';
//    }
//    // Recorre ambos arrays
//    for (let i = 0; i < randomArray.length; i++) {
//    // Comprueba si el color en la posición 'i' de array1 existe en array2
//    if (array2.includes(randomArray[i])) {
//        // Si existe, verifica si está en la misma posición
//        if (randomArray[i] === array2[i]) {
//            console.log('El color "${randomArray[i]}" está en la misma posición en los 2 arrays');
//        } else {
//            console.log(`El color "${randomArray[i]}" está en una posición diferente en ambos arrays.`);
//        }
//    } else {
//        console.log(`El color "${randomArray[i]}" no está en el segundo array.`);
//    }
//}
//};
//// Llama a la función de comparación
//isArrayEqual(randomArray, array2);
//});

