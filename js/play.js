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
console.log("combinscion ganadora", randomArray);


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

//Obtener los cuatro divs de selccion diferentes por sus IDs
const row1Color1 = document.getElementById('color0-1');
const row1Color2 = document.getElementById('color1-1');
const row1Color3 = document.getElementById('color2-1');
const row1Color4 = document.getElementById('color3-1');
const row2Color1 = document.getElementById('color0-2');
const row2Color2 = document.getElementById('color1-2');
const row2Color3 = document.getElementById('color2-2');
const row2Color4 = document.getElementById('color3-2');
const row3Color1 = document.getElementById('color0-3');
const row3Color2 = document.getElementById('color1-3');
const row3Color3 = document.getElementById('color2-3');
const row3Color4 = document.getElementById('color3-3');
const row4Color1 = document.getElementById('color0-4');
const row4Color2 = document.getElementById('color1-4');
const row4Color3 = document.getElementById('color2-4');
const row4Color4 = document.getElementById('color3-4');
const row5Color1 = document.getElementById('color0-5');
const row5Color2 = document.getElementById('color1-5');
const row5Color3 = document.getElementById('color2-5');
const row5Color4 = document.getElementById('color3-5');
const row6Color1 = document.getElementById('color0-6');
const row6Color2 = document.getElementById('color1-6');
const row6Color3 = document.getElementById('color2-6');
const row6Color4 = document.getElementById('color3-6');
const row7Color1 = document.getElementById('color0-7');
const row7Color2 = document.getElementById('color1-7');
const row7Color3 = document.getElementById('color2-7');
const row7Color4 = document.getElementById('color3-7');
const row8Color1 = document.getElementById('color0-8');
const row8Color2 = document.getElementById('color1-8');
const row8Color3 = document.getElementById('color2-8');
const row8Color4 = document.getElementById('color3-8');
const row9Color1 = document.getElementById('color0-9');
const row9Color2 = document.getElementById('color1-9');
const row9Color3 = document.getElementById('color2-9');
const row9Color4 = document.getElementById('color3-9');
const row10Color1 = document.getElementById('color0-10');
const row10Color2 = document.getElementById('color1-10');
const row10Color3 = document.getElementById('color2-10');
const row10Color4 = document.getElementById('color3-10');
// Agregar un evento clic a cada uno de los divs
row1Color1.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row1Color2.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row1Color3.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row1Color4.addEventListener("click", function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row2Color1.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row2Color2.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row2Color3.addEventListener('click', function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
row2Color4.addEventListener("click", function () {
    const choiceColor = localStorage.getItem('choiceColor');
    this.style.backgroundColor = choiceColor;
});
////row3Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row3Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row3Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row3Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row4Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row4Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row4Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row4Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row5Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row5Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row5Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row5Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row6Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row6Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row6Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row6Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row7Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row7Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row7Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row7Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row8Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row8Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row8Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row8Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row9Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row9Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row9Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row9Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
////row10Color1.addEventListener('click', function () {
////    const choiceColor = localStorage.getItem('choiceColor');
////    this.style.backgroundColor = choiceColor;
////});
//row10Color2.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row10Color3.addEventListener('click', function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
//row10Color4.addEventListener("click", function () {
//    const choiceColor = localStorage.getItem('choiceColor');
//    this.style.backgroundColor = choiceColor;
//});
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
let  row = 1;

//comprobar array
const checkButton = document.getElementById('check');
checkButton.addEventListener('click', () => {
    
    
    //console.log(arraySelect);
    //console.log(randomArray);
    if(JSON.stringify(arraySelect) === JSON.stringify(randomArray)){
        window.location.href = './winner.html';
        //console.log('ganador');
        row = 1;
    } else {
        row++
    }

    // if (arraySelect.every ((color) => color !== "")) {
    //     comprobar(randomArray, arraySelect);

    // } else {
    //     alert("Introduce todos los colores")
    // }
    
});

//const isArrayEqual = (randomArray, arraySelect) => {
//if (randomArray.length !== arraySelect.length) {
//    return; 'Te falta seleccionar algun color';
//}
//function comprobar(randomArray, arraySelect){
//    for (let i = 0; i < 4; i++) {
//        let check = document.getElementbyId(`check${i}`);
//        if (randomArray[i] === arraySelect[i]) {
//            check.style.backgroundColor = 'white';
//        } else if (randomArray.includes(arraySelect[i])) {
//            check.style.backgroundColor = 'black';
//        }
//    }
//};
//isArrayEqual(randomArray, arraySelect);


