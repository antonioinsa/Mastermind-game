const userName = document.getElementById('userName');
userName.addEventListener('input', () => {
    localStorage.setItem('user', userName.value);
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
const colorSelect4 = document.getElementById('colorSelect4');
const caja4 = document.getElementById('box4');
colorSelect4.addEventListener('input', () => {
    caja4.style.backgroundColor = colorSelect4.value;
    localStorage.setItem('color4', colorSelect4.value);
});
const startButton = document.getElementById('start');
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
            window.location.href = './play.html';
        }
    } else {
        alert('Debe rellena el nombre de jugador y seleccionar diferentes colores para poder empezar la partida');
    }

});
