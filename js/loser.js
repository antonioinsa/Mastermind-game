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
playAgain.addEventListener('click', () => {
    window.location.href = './play.html'
    localStorage.removeItem('randomArray');
});