// document.querySelectorAll('.window__level-button').forEach(button => {
//     button.addEventListener('click', () => {
//         levelGameButton = this;
//         console.log('1')
//     });
// });

const levelGameButton = document.querySelectorAll('.window__level-button');
const startGameButton = document.getElementById('start_btn')

const initEventListener = () => {
    for (const levelButton of levelGameButton) {
        levelButton.addEventListener('click', () => {
            const level = levelButton.dataset.level
            console.log(level)
        })
    }
}
initEventListener();

startGameButton.addEventListener('click', () => {
    alert('выбранный уровень сложности'// + что то :D
    )
})


