const restartGame = document.getElementById('restartGame');

restartGame.addEventListener('click', () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        localStorage.removeItem(key);
    });
    window.location.href = '../index.html'
});