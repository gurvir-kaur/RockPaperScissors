class RockPaperScissors {
    constructor(pWindow, pDoc) {

        this.doc = pDoc;
        this.win = pWindow;
        this.userChoice = '';
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
        this.SetScreenValue("value", this.determineWinner());
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

        var computerChoice = this.getComputerChoice();

        if (this.userChoice === computerChoice) {
            return 'This game is a tie!';
        }
        if (this.userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer won.';
            } else {
                this.SetScreenValue('stars', 'Gold stars: ' + ++this.score);
                return 'You won.';
            }
        }
        if (this.userChoice === 'paper') {
            if (computerChoice === 'rock') {
                this.SetScreenValue('stars', 'Gold stars: ' + ++this.score);
                return 'You won.';
            } else {
                return 'Computer won.';
            }
        }
        if (this.userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Computer won.';
            } else {
                this.SetScreenValue('stars', 'Gold stars: ' + ++this.score);
                return 'You won';
            }
        }
    }

    SetScreenValue(pFielName, pValue) {

        if (pValue != " ") {
            console.log(pFielName, pValue);
            this.doc.getElementById(pFielName).innerHTML = pValue;
        }
    }

}