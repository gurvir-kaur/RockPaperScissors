/**
 * this class contains all the necessary funtions for the game.
 */
class RockPaperScissors {

    /**
     * constructor of the class with necessary variables.
     * @param {Window} pWindow 
     * @param {Document} pDoc 
     */
    constructor(pWindow, pDoc) {

        this.doc = pDoc;
        this.win = pWindow;
        this.userChoice = '';
        this.score = 0;
        this.computerChoice = '';
    }

    /**
     * this function controls the navigation between different screens
     * @param {String} pScreen 
     */
    navigateTo(pScreen) {
        if (pScreen == 'home') {
            this.win.location.href = "./home.html";
        }
    }

    /**
     * this method stores user's choice to a variable called userChoice
     * @param {String} pChoice 
     */
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

    /**
     * this method returns a random choice --> computer's choice
     */
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

    /**
     * with this method the winner is declared by comparing choice/options
     */
    determineWinner() {

        this.computerChoice = this.getComputerChoice();
        if (this.computerChoice === 'rock') {
            this.SetScreenValue('compChoice', "<img src='./media/rock.png'width = 300px/>");
        }
        if (this.computerChoice === 'paper') {
            this.SetScreenValue('compChoice', "<img src='./media/paper.png'width = 300px/>");
        }
        if (this.computerChoice === 'scissors') {
            this.SetScreenValue('compChoice', "<img src='./media/scissors.png'width = 300px/>");
        }

        if (this.userChoice === this.computerChoice) {
            return 'This game is a tie!';
        }
        if (this.userChoice === 'rock') {
            if (this.computerChoice === 'paper') {
                return 'Computer won.';
            } else {
                this.SetScreenValue('points', 'Points: ' + ++this.score);
                return 'You won.';
            }
        }
        if (this.userChoice === 'paper') {
            if (this.computerChoice === 'rock') {
                this.SetScreenValue('points', 'Points: ' + ++this.score);
                return 'You won.';
            } else {
                return 'Computer won.';
            }
        }
        if (this.userChoice === 'scissors') {
            if (this.computerChoice === 'rock') {
                return 'Computer won.';
            } else {
                this.SetScreenValue('points', 'Points: ' + ++this.score);
                return 'You won';
            }
        }
    }

    /**
     * assigns a new value to the element. 
     * @param {String} pFielName 
     * @param {*} pValue 
     */
    SetScreenValue(pFielName, pValue) {

        if (pValue != " ") {
            console.log(pFielName, pValue);
            this.doc.getElementById(pFielName).innerHTML = pValue;
        }
    }

}