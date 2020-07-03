class RockPaperScissors {
    constructor(pWindow, pDoc) {

        this.Doc = pDoc;
        this.win = pWindow;
        this.userChoice = '';
        this.computerChoice = this.getComputerChoice();
        this.score = 0;

    }

    navigateTo(pScreen) {
        if (pScreen == 'home') {
            this.win.location.href = "./home.html";
        }
    }

    userOption(pChoice) {
        if (pChoice == 'rock') {
            this.userChoice = 'rock';
        } else {
            if (pChoice == 'paper') {
                this.userChoice = 'paper';
            } else {
                this.userChoice = 'scissors';
            }
        }

        this.determineWinner();
    }

    getComputerChoice() {
        var choice = Math.floor(Math.random() * 3);
        switch (choice) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    }

    determineWinner() {
        console.log(this.userChoice, this.computerChoice);
        if (this.userChoice === this.computerChoice) {
            this.SetScreenValue('This game is a tie!');
        }
        if (this.userChoice === 'rock') {
            if (this.computerChoice === 'paper') {
                this.SetScreenValue('Computer won.');
            } else {
                ++this.score;
                this.SetScreenValue('You won.');
            }
        }
        if (this.userChoice === 'paper') {
            if (this.computerChoice === 'rock') {
                ++this.score;
                this.SetScreenValue('You won.');
            } else {
                this.SetScreenValue('Computer won.');
            }
        }
        if (this.userChoice === 'scissors') {
            if (this.computerChoice === 'rock') {
                this.SetScreenValue('Computer won.');
            } else {
                ++this.score;
                this.SetScreenValue('You won.');
            }
        }
    }

    SetScreenValue(pValue) {

        if (pValue != " ") {
            this.doc.getElementById("value").value = pValue;
        }
    }

}