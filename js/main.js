//this file connects the RockPaperScissors class with the html

// global variable declared
var gameObject;
/**
 * load event of window.
 * this funtion varifies if all of the objects in the document have finished loading.
 */
window.onload = function() {

    if (document.readyState === "complete") {
        //declared variable convertes to an object of the class.
        gameObject = new RockPaperScissors(window, document);
    }
};