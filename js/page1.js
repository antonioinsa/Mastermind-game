const nombreUsuario = document.getElementById('nombreUsuario');
nombreUsuario.addEventListener('input', () => {
    localStorage.setItem('nombre usuario', nombreUsuario.value);

    console.log(nombreUsuario.value);
});
const colorSeleccionado1 = document.getElementById('colorSeleccionado1');
const caja1 = document.getElementById('caja1');
colorSeleccionado1.addEventListener('input', () => {
    caja1.style.backgroundColor = colorSeleccionado1.value;
    localStorage.setItem('color1', colorSeleccionado1.value);

    //console.log(colorSeleccionado1.value);

});
const colorSeleccionado2 = document.getElementById('colorSeleccionado2');
const caja2 = document.getElementById('caja2');
colorSeleccionado2.addEventListener('input', () => {
    caja2.style.backgroundColor = colorSeleccionado2.value;
    localStorage.setItem('color2', colorSeleccionado2.value);

    //console.log(colorSeleccionado2.value);

});
const colorSeleccionado3 = document.getElementById('colorSeleccionado3');
const caja3 = document.getElementById('caja3');
colorSeleccionado3.addEventListener('input', () => {
    caja3.style.backgroundColor = colorSeleccionado3.value;
    localStorage.setItem('color3', colorSeleccionado3.value);

    //console.log(colorSeleccionado3.value);
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

