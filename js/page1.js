const userName = document.getElementById('userName');
userName.addEventListener('input', () => {
    localStorage.setItem('user', userName.value);

    //console.log(userName.value);
});
const colorSelect1 = document.getElementById('colorSelect1');
const caja1 = document.getElementById('box1');
colorSelect1.addEventListener('input', () => {
    caja1.style.backgroundColor = colorSelect1.value;
    localStorage.setItem('color1', colorSelect1.value);
});
const colorSelect2 = document.getElementById('colorSelect2');
const caja2 = document.getElementById('box2');
colorSelect2.addEventListener('input', () => {
    caja2.style.backgroundColor = colorSelect2.value;
    localStorage.setItem('color2', colorSelect2.value);
});
const colorSelect3 = document.getElementById('colorSelect3');
const caja3 = document.getElementById('box3');
colorSelect3.addEventListener('input', () => {
    caja3.style.backgroundColor = colorSelect3.value;
    localStorage.setItem('color3', colorSelect3.value);
});
// Función para obtener una clave de localStorage y almacenarla en un array
function localStorageData(color, localStorageArray) {
    const colors = localStorage.getItem(color);
    if (colors !== null) {
        localStorageArray.push(colors);
        //localStorage.removeItem(color); // Opcional: eliminar la clave de localStorage si se desea
    }
}

// Crear un array para almacenar las claves
const colorsArray = [];
// Llamar a la función para obtener y almacenar una clave en el array
localStorageData('color1', colorsArray);
localStorageData('color2', colorsArray);
localStorageData('color3', colorsArray);


// Mostrar el array resultante
    //console.log(colorsArray);

// Función para mezclar aleatoriamente un array
function arrayMixer(array) {
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

