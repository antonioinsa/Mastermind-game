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
const row5Color1 = document.getElementById('color5-0');
const row5Color2 = document.getElementById('color5-1');
const row5Color3 = document.getElementById('color5-2');
const row5Color4 = document.getElementById('color5-3');
const row6Color1 = document.getElementById('color6-0');
const row6Color2 = document.getElementById('color6-1');
const row6Color3 = document.getElementById('color6-2');
const row6Color4 = document.getElementById('color6-3');
const row7Color1 = document.getElementById('color7-0');
const row7Color2 = document.getElementById('color7-1');
const row7Color3 = document.getElementById('color7-2');
const row7Color4 = document.getElementById('color7-3');
const row8Color1 = document.getElementById('color8-0');
const row8Color2 = document.getElementById('color8-1');
const row8Color3 = document.getElementById('color8-2');
const row8Color4 = document.getElementById('color8-3');
const row9Color1 = document.getElementById('color9-0');
const row9Color2 = document.getElementById('color9-1');
const row9Color3 = document.getElementById('color9-2');
const row9Color4 = document.getElementById('color9-3');
const row10Color1 = document.getElementById('color10-0');
const row10Color2 = document.getElementById('color10-1');
const row10Color3 = document.getElementById('color10-2');
const row10Color4 = document.getElementById('color10-3');
// Agregar un evento clic a cada uno de los divs
let  row = 0;
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
row5Color1.addEventListener('click', rowColorClick);
row5Color2.addEventListener('click', rowColorClick);
row5Color3.addEventListener('click', rowColorClick);
row5Color4.addEventListener('click', rowColorClick);
row6Color1.addEventListener('click', rowColorClick);
row6Color2.addEventListener('click', rowColorClick);
row6Color3.addEventListener('click', rowColorClick);
row6Color4.addEventListener('click', rowColorClick);
row7Color1.addEventListener('click', rowColorClick);
row7Color2.addEventListener('click', rowColorClick);
row7Color3.addEventListener('click', rowColorClick);
row7Color4.addEventListener('click', rowColorClick);
row8Color1.addEventListener('click', rowColorClick);
row8Color2.addEventListener('click', rowColorClick);
row8Color3.addEventListener('click', rowColorClick);
row8Color4.addEventListener('click', rowColorClick);
row9Color1.addEventListener('click', rowColorClick);
row9Color2.addEventListener('click', rowColorClick);
row9Color3.addEventListener('click', rowColorClick);
row9Color4.addEventListener('click', rowColorClick);
row10Color1.addEventListener('click', rowColorClick);
row10Color2.addEventListener('click', rowColorClick);
row10Color3.addEventListener('click', rowColorClick);
row10Color4.addEventListener('click', rowColorClick);
//comprobar array
const check11 = document.getElementById('check1-1');
const check12 = document.getElementById('check2-1');
const check13 = document.getElementById('check3-1');
const check14 = document.getElementById('check4-1');
const check21 = document.getElementById('check1-2');
const check22 = document.getElementById('check2-2');
const check23 = document.getElementById('check3-2');
const check24 = document.getElementById('check4-2');
const check31 = document.getElementById('check1-3');
const check32 = document.getElementById('check2-3');
const check33 = document.getElementById('check3-3');
const check34 = document.getElementById('check4-3');
const check41 = document.getElementById('check1-4');
const check42 = document.getElementById('check2-4');
const check43 = document.getElementById('check3-4');
const check44 = document.getElementById('check4-4');
const check51 = document.getElementById('check1-5');
const check52 = document.getElementById('check2-5');
const check53 = document.getElementById('check3-5');
const check54 = document.getElementById('check4-5');
const check61 = document.getElementById('check1-6');
const check62 = document.getElementById('check2-6');
const check63 = document.getElementById('check3-6');
const check64 = document.getElementById('check4-6');
const check71 = document.getElementById('check1-7');
const check72 = document.getElementById('check2-7');
const check73 = document.getElementById('check3-7');
const check74 = document.getElementById('check4-7');
const check81 = document.getElementById('check1-8');
const check82 = document.getElementById('check2-8');
const check83 = document.getElementById('check3-8');
const check84 = document.getElementById('check4-8');
const check91 = document.getElementById('check1-9');
const check92 = document.getElementById('check2-9');
const check93 = document.getElementById('check3-9');
const check94 = document.getElementById('check4-9');
const check101 = document.getElementById('check1-10');
const check102 = document.getElementById('check2-10');
const check103 = document.getElementById('check3-10');
const check104 = document.getElementById('check4-10');
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
}
// Imprimir el nuevo array con elementos aleatorios
console.log("combinacion ganadora", randomArray);


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
//Array de selccion
let arraySelect = ['', '', '', ''];
    const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
        box.addEventListener('click', () => {
        const id = box.getAttribute('id');
        const idlength = id[id.length - 1];
        const hexColor = rgbToHex(box.style.backgroundColor);
        arraySelect[idlength] = hexColor
        console.log(arraySelect);
        })  
    });
console.log(row);



//const stopEvents = (select1, select2, select3, select4) => {
//    select1.style.pointerEvents = "none";
//    select2.style.pointerEvents = "none";
//    select3.style.pointerEvents = "none";
//    select4.style.pointerEvents = "none";
//}
//const backgroundCircule = (circle) => {
//    return window.getComputedStyle(circle).backgroundColor
//}
//const empty = (select1, select2, select3, select4) => {
//    if (backgroundCircule(select1) ===    'white'
//        || backgroundCircule(select2) === 'white'
//        || backgroundCircule(select3) === 'white'
//        || backgroundCircule(select4) === 'white') {
//       return true;
//    }
//}
const isArrayEqual = (randomArray, arraySelect) => {
    return randomArray.length === arraySelect.length;
}
//const arraysVerify = () => {
//    const button = document.getElementById('check');
//    if (isArrayEqual(randomArray, arraySelect)) {
//        button.disabled = false; // Habilitar el botón
//    } else {
//        alert("Los arrays no son iguales");
//        button.disabled = true; // Deshabilitar el botón
//    }
//}

const checkButtom = document.getElementById('check');
checkButtom.addEventListener('click', () => {
    
    if(JSON.stringify(arraySelect) === JSON.stringify(randomArray)){
        window.location.href = './winner.html';
        row = 0;
    }else {
        row++;
        console.log(row);
    
        if (row === 1) {
            if (isArrayEqual(row1Color1, row1Color2, row1Color3, row1Color4) === true) {
                alert("¡Falta un color!");
            } else if (isArrayEqual(row1Color1, row1Color2, row1Color3, row1Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check11.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check11.style.backgroundColor = 'orange'
                } else {
                    check11.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check12.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check11.style.backgroundColor = 'orange'
                } else {
                    check12.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check13.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check11.style.backgroundColor = 'orange'
                } else {
                    check13.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check14.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])) {
                    check11.style.backgroundColor = 'orange'
                }else {
                    check14.style.backgroundColor = 'white'
                }
                //rowColorClick(row1Color1, row1Color2, row1Color3, row1Color4);
                //row++;
                //stopEvents(row1Color1, row1Color2, row1Color3, row1Color4)
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 2) {
            if (empty(row2Color1, row2Color2, row2Color3, row2Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(row2Color1, row2Color2, row2Color3, row2Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check21.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check21.style.backgroundColor = 'orange'
                }else {
                    check21.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check22.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check21.style.backgroundColor = 'orange'
                }else {
                    check22.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check23.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check21.style.backgroundColor = 'orange'
                }else {
                    check23.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check24.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check21.style.backgroundColor = 'orange'
                }else {
                    check24.style.backgroundColor = 'white'
                }
                //selectColor(row2Color1, row2Color2, row2Color3, row2Color4);
                //row++;
                //stopEvents(row2Color1, row2Color2, row2Color3, row2Color4)
            
            }
            arraySelect = ['', '', '', ''];
        }     
        if (row === 3) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check31.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check31.style.backgroundColor = 'orange'
                }else {
                    check31.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check32.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check31.style.backgroundColor = 'orange'
                }else {
                    check32.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check33.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check21.style.backgroundColor = 'orange'
                }else {
                    check33.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check34.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check31.style.backgroundColor = 'orange'
                }else {
                    check34.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 4) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check41.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check41.style.backgroundColor = 'orange'
                }else {
                    check41.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check42.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check41.style.backgroundColor = 'orange'
                }else {
                    check42.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check43.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check41.style.backgroundColor = 'orange'
                }else {
                    check43.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check44.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check41.style.backgroundColor = 'orange'
                }else {
                    check44.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 5) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check51.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check51.style.backgroundColor = 'orange'
                }else {
                    check51.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check52.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check51.style.backgroundColor = 'orange'
                }else {
                    check52.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check53.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check51.style.backgroundColor = 'orange'
                }else {
                    check53.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check54.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check51.style.backgroundColor = 'orange'
                }else {
                    check54.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 6) {
            if (isArrayEqual(row1Color1, row1Color2, row1Color3, row1Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(row1Color1, row1Color2, row1Color3, row1Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check61.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check61.style.backgroundColor = 'orange'
                }else {
                    check61.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check62.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check61.style.backgroundColor = 'orange'
                }else {
                    check62.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check63.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check61.style.backgroundColor = 'orange'
                }else {
                    check63.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check64.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check61.style.backgroundColor = 'orange'
                }else {
                    check64.style.backgroundColor = 'white'
                }
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 7) {
            if (empty( row2Color1, row2Color2, row2Color3, row2Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row2Color1, row2Color2, row2Color3, row2Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check71.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check71.style.backgroundColor = 'orange'
                }else {
                    check71.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check72.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check71.style.backgroundColor = 'orange'
                }else {
                    check72.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check73.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check71.style.backgroundColor = 'orange'
                }else {
                    check73.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check74.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check71.style.backgroundColor = 'orange'
                }else {
                    check74.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }     
        if (row === 8) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check81.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check81.style.backgroundColor = 'orange'
                }else {
                    check81.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check82.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check81.style.backgroundColor = 'orange'
                }else {
                    check82.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check83.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check81.style.backgroundColor = 'orange'
                }else {
                    check83.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check84.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check81.style.backgroundColor = 'orange'
                }else {
                    check84.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 9) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check91.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check91.style.backgroundColor = 'orange'
                }else {
                    check91.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check92.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check91.style.backgroundColor = 'orange'
                }else {
                    check92.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check93.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check91.style.backgroundColor = 'orange'
                }else {
                    check93.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check94.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check91.style.backgroundColor = 'orange'
                }else {
                    check94.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
        if (row === 10) {
            if (empty( row3Color1, row3Color2, row3Color3, row3Color4) === true) {
                alert("¡Falta un color!");
            } else if (empty(  row3Color1, row3Color2, row3Color3, row3Color4) !== true) 
            { 
                if (arraySelect[0] === randomArray[0]) {
                    check101.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[0])) {
                    check101.style.backgroundColor = 'orange'
                }else {
                    check101.style.backgroundColor = 'white'
                }
                if (arraySelect[1] === randomArray[1]) {
                    check102.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[1])) {
                    check101.style.backgroundColor = 'orange'
                }else {
                    check102.style.backgroundColor = 'white'
                }
                if (arraySelect[2] === randomArray[2]) {
                    check103.style.backgroundColor = 'green'
                }  else if (randomArray.includes(arraySelect[2])) {
                    check101.style.backgroundColor = 'orange'
                }else {
                    check103.style.backgroundColor = 'white'
                }
                if (arraySelect[3] === randomArray[3]) {
                    check104.style.backgroundColor = 'green'
                } else if (randomArray.includes(arraySelect[3])){
                    check101.style.backgroundColor = 'orange'
                }else {
                    check104.style.backgroundColor = 'white'
                }
            
            }
            arraySelect = ['', '', '', ''];
        }
    }  
           
   
    if (row === 11) {   
        localStorage.setItem('randomArray', JSON.stringify(randomArray));
        window.location.href = './loser.html';
        return;
    }
});
