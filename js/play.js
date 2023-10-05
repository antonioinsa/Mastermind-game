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

let fila = 1;


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
const color1 = document.getElementById('color1-1');
const color2 = document.getElementById('color2-1');
const color3 = document.getElementById('color3-1');
const color4 = document.getElementById('color4-1');

const color5 = document.getElementById('color1-2');
const color6 = document.getElementById('color2-2');
const color7 = document.getElementById('color3-2');
const color8 = document.getElementById('color4-2');

const color9 = document.getElementById('color1-3');
const color10 = document.getElementById('color2-3');
const color11 = document.getElementById('color3-3');
const color12 = document.getElementById('color4-3');

const color13 = document.getElementById('color1-4');
const color14 = document.getElementById('color2-4');
const color15 = document.getElementById('color3-4');
const color16 = document.getElementById('color4-4');

const color17 = document.getElementById('color1-5');
const color18 = document.getElementById('color2-5');
const color19 = document.getElementById('color3-5');
const color20 = document.getElementById('color4-5');

const color21 = document.getElementById('color1-6');
const color22 = document.getElementById('color2-6');
const color23 = document.getElementById('color3-6');
const color24 = document.getElementById('color4-6');

const color25 = document.getElementById('color1-7');
const color26 = document.getElementById('color2-7');
const color27 = document.getElementById('color3-7');
const color28 = document.getElementById('color4-7');
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
color5.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color6.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color7.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
color8.addEventListener("click", function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
