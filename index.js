const game = () => {
let playerScore = 0;
let computerscore = 0;
let moves = 0;
}
const playgame = () => {
    const rockbtn = document.querySelector('.rock');
    const paperbtn = document.querySelector('.paper');
    const scissorbtn = document.querySelector('.scissor');
    const playerOptions = [rockbtn, paperbtn, scissorbtn];
    const computerOptions = ['rock', 'paper', 'scissor']
}

playerOptions.foreach(option => {
    option.addEventlistener('click', function () {

        const movesleft =
        document.querySelector('moves left');
        moves++;
        movesleft.innertext = 'moves left: ${10 - moves}';

        const choiceNumber = Math.floor(math.random() * 3);
        const computerChoice =
        computerOptions[choiceNumber]

        winner(this.innertext, computerChoice)

        if (moves == 10) {
            gameover(playerOptions, movesleft);
        }
    })
})