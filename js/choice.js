const userName = document.getElementById('userName');
const colorSelect1 = document.getElementById('colorSelect1');
const colorSelect2 = document.getElementById('colorSelect2');
const colorSelect3 = document.getElementById('colorSelect3');
const colorSelect4 = document.getElementById('colorSelect4');
const caja1 = document.getElementById('box1');
const caja2 = document.getElementById('box2');
const caja3 = document.getElementById('box3');
const caja4 = document.getElementById('box4');
const startButton = document.getElementById('start');

userName.addEventListener('input', () => {
    localStorage.setItem('user', userName.value);
});
colorSelect1.addEventListener('input', () => {
    caja1.style.backgroundColor = colorSelect1.value;
    localStorage.setItem('color1', colorSelect1.value);
});
colorSelect2.addEventListener('input', () => {
    caja2.style.backgroundColor = colorSelect2.value;
    localStorage.setItem('color2', colorSelect2.value);
});
colorSelect3.addEventListener('input', () => {
    caja3.style.backgroundColor = colorSelect3.value;
    localStorage.setItem('color3', colorSelect3.value);
});
colorSelect4.addEventListener('input', () => {
    caja4.style.backgroundColor = colorSelect4.value;
    localStorage.setItem('color4', colorSelect4.value);
});
startButton.addEventListener('click', () => {
    if (localStorage.getItem('user') &&
        localStorage.getItem('color1') &&
        localStorage.getItem('color2') &&
        localStorage.getItem('color3') &&
        localStorage.getItem('color4')) {
        if ((localStorage.getItem('color1') ===
            localStorage.getItem('color2')) ||
            (localStorage.getItem('color2') ===
                localStorage.getItem('color3')) ||
            (localStorage.getItem('color1') ===
                localStorage.getItem('color3')) ||
            (localStorage.getItem('color1') ===
                localStorage.getItem('color4')) ||
            (localStorage.getItem('color2') ===
                localStorage.getItem('color4')) ||
            (localStorage.getItem('color3') ===
                localStorage.getItem('color4'))) {
            alert('Seleccione diferentes colores')
        } else {
            window.location.href = './levels.html';
        }
    } else {
        alert('Debe rellena el nombre de jugador y seleccionar diferentes colores para poder empezar la partida');
    }

});
