const restartGame = document.getElementById('restartGame');
const user = localStorage.getItem('user');
const space = document.getElementById('userName');

space.textContent = user;
restartGame.addEventListener('click', () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        localStorage.removeItem(key);
    });
    window.location.href = '../index.html'
});