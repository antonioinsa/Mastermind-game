
const savedColor1 = localStorage.getItem('color1');
const box1 = document.getElementById('box1');
box1.style.backgroundColor = savedColor1;
const savedColor2 = localStorage.getItem('color2');
const box2 = document.getElementById('box2');
box2.style.backgroundColor = savedColor2;
const savedColor3 = localStorage.getItem('color3');
const box3 = document.getElementById('box3');
box3.style.backgroundColor = savedColor3;


// Función para obtener una clave de localStorage y almacenarla en un array
const localStorageData = (color, localStorageArray) => {
    const colors = localStorage.getItem(color);
    if (colors !== null) {
        localStorageArray.push(colors);
        //localStorage.removeItem(color); // Opcional: eliminar la clave de localStorage si se desea
    }
};

// Crear un array para almacenar las claves
const colorsArray = [];
// Llamar a la función para obtener y almacenar una clave en el array
localStorageData('color1', colorsArray);
localStorageData('color2', colorsArray);
localStorageData('color3', colorsArray);


// Mostrar el array resultante
//console.log(colorsArray);

// Función para mezclar aleatoriamente un array
const arrayMixer = (array) => {
    const arrayMixed = [...array]; // Clonar el array original para no modificarlo directamente
    for (let i = arrayMixed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayMixed[i], arrayMixed[j]] = [arrayMixed[j], arrayMixed[i]];
    }
    return arrayMixed;
}
// Llamar a la función para mezclar el array original
const justArrayMixed = arrayMixer(colorsArray);

console.log("Array Original:", colorsArray);
console.log("Array Mezclado:", justArrayMixed);

// Agregar un evento clic al div de selección
document.getElementById("box1").addEventListener("click", function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem("choiceColor", hexColor);
});
document.getElementById("box2").addEventListener("click", function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem("choiceColor", hexColor);
});
document.getElementById("box3").addEventListener("click", function () {
    const choiceColor = window.getComputedStyle(this).backgroundColor;
    const hexColor = rgbToHex(choiceColor);
    localStorage.setItem("choiceColor", hexColor);
});
function rgbToHex(rgb) {
    const value = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!value) return rgb;
    const r = parseInt(value[1]).toString(16).padStart(2, '0');
    const g = parseInt(value[2]).toString(16).padStart(2, '0');
    const b = parseInt(value[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};
//Obtener los cuatro divs diferentes por sus IDs
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
//const color4 = document.getElementById("color4");

// Agregar un evento clic a cada uno de los cuatro divs
color1.addEventListener("click", function () {
    const choiceColor = localStorage.getItem("choiceColor");
     this.style.backgroundColor = choiceColor;
});
color2.addEventListener("click", function () {
    const choiceColor = localStorage.getItem("choiceColor");
    this.style.backgroundColor = choiceColor;
});
color3.addEventListener("click", function () {
    const choiceColor = localStorage.getItem("choiceColor");
    this.style.backgroundColor = choiceColor;
});
//color4.addEventListener("click", function() {
//  const colorSeleccionado = localStorage.getItem("colorSeleccionado");
//  this.style.backgroundColor = colorSeleccionado;
//});
