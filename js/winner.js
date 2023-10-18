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

document.getElementById('playAgain').addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');

    if (from === 'beginer') {
        window.location.href = './beginer.html';
    } else if (from === 'intermediate') {
        window.location.href = './intermediate.html';
    } else if (from === 'advanced') {
        window.location.href = './advanced.html';
    }
    localStorage.removeItem('randomArray');
});