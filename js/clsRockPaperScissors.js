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
        this.playerPoints = 0;
        this.computerPoints = 0;
        this.computerChoice = '';
        this.continue = 0;
    }

    /**
     * computer vs computer
     */
    play() {

        while (this.continue < 100) {
            var comp1 = this.getComputerChoice();
            var comp2 = this.getComputerChoice();

            this.determineWinner(comp1, comp2);
            this.getMedia('compChoice1', comp1);
            this.getMedia('compChoice2', comp2);

            if (this.continue === 1) {
                break;
            }
            ++this.continue;
        }
    }


    /**
     * this function controls the navigation between different screens
     * @param {String} pScreen 
     */
    navigateTo(pScreen) {
        if (pScreen == 'playerVScomputer') {
            this.win.location.href = "./playerVScomputer.html";
        }
        if (pScreen == 'index') {
            this.win.location.href = "./index.html";
        }
        if (pScreen == 'computerVScomputer') {
            this.win.location.href = "./computerVScomputer.html";
        }
    }

    /**
     * resets the score
     */
    restart() {
        this.computerPoints = this.playerPoints = 0;
        this.SetScreenValue('computerPoints', this.computerPoints);
        this.SetScreenValue('playerPoints', this.playerPoints);
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
        this.computerChoice = this.getComputerChoice();
        this.getMedia('compChoice', this.computerChoice);
        this.SetScreenValue("value", this.determineWinner(this.userChoice, this.computerChoice));
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
    determineWinner(option1, option2) {

        //option1 can be player or computer1
        //option2 can be computer or computer2

        if (option1 === option2) {
            return 'This game is a tie!';
        }
        if (option1 === 'rock') {
            if (option2 === 'paper') {
                this.SetScreenValue('computerPoints', ++this.computerPoints);
                return 'Computer won.';
            } else {
                this.SetScreenValue('playerPoints', ++this.playerPoints);
                return 'You won.';
            }
        }
        if (option1 === 'paper') {
            if (option2 === 'rock') {
                this.SetScreenValue('playerPoints', ++this.playerPoints);
                return 'You won.';
            } else {
                this.SetScreenValue('computerPoints', ++this.computerPoints);
                return 'Computer won.';
            }
        }
        if (option1 === 'scissors') {
            if (option2 === 'rock') {
                this.SetScreenValue('computerPoints', ++this.computerPoints);
                return 'Computer won.';
            } else {
                this.SetScreenValue('playerPoints', ++this.playerPoints);
                return 'You won';
            }
        }
    }

    /**
     * to get the images
     * @param {String} pField 
     * @param {String} pOption 
     */
    getMedia(pField, pOption) {
        if (pOption === 'rock') {
            this.SetScreenValue(pField, "<img src='./media/rock.png' width = 200px/>");
        }
        if (pOption === 'paper') {
            this.SetScreenValue(pField, "<img src='./media/paper.png' width = 200px/>");
        }
        if (pOption === 'scissors') {
            this.SetScreenValue(pField, "<img src='./media/scissors.png' width = 200px/>");
        }
    }

    /**
     * assigns a new value to the element. 
     * @param {String} pFielName 
     * @param {*} pValue 
     */
    SetScreenValue(pFielName, pValue) {

        this.doc.getElementById(pFielName).innerHTML = pValue;

    }

}