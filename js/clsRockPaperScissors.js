class RockPaperScissors {
    constructor(pWindow, pDoc) {

        this.Doc = pDoc;
        this.win = pWindow;

    }

    navigateTo(pScreen) {
        if (pScreen == 'home') {
            this.win.location.href = "./home.html";
        }
    }


}