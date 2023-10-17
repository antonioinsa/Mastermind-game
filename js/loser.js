const playAgain = document.getElementById('playAgain');
const storedColors = localStorage.getItem('randomArray');
if (storedColors) {
    const randomArray = JSON.parse(storedColors);
    randomArray.forEach((color, index) => {
        const id = `color${index + 1}`;
        const div = document.getElementById(id);
        if (div) {
            div.style.backgroundColor = color;
        }
    });
}

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
});