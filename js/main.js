$(document).ready(function() {
    /*----- app state ---------------------------*/
    let win, lose; //scorekeeping varaibles
    let category = ["fruits"]
    let words = ["apples", "bananas", "kiwi"];

    /*------------ cached elements ---------------*/

    const status = $("#status");
    const selectedCategory = $("#selectedcategory");
    const canvas = $("canvas");
    const makeUnderline = $("#wordwrap");
    const alphabet = $("li"); //.eq selects the specific one
    const resetButton = $("#reset");
    const hintButton = $("#hint");
    const soundButton = $("#sound");
    /*-- need to fix--*/
    const updateNumOfWins = $("#numOfWins");
    const updateNumOfLoses = $("#numOfLoses");

    /*----------- events ------------------*/

    alphabet.click(function() {
        let getIndex = $(this).index();
        let getLetter = this.closest("li");
        console.log(getIndex);
        console.log(getLetter);

    })

    resetButton.click(function() {
        console.log("reset")
    })

    hintButton.click(function() {
        console.log("hint")
    })

    soundButton.click(function() {
        console.log("sound")
    })

    // on click erc
    // /*----- function ------*/
    // init() - getting the game going

    // function render() {
    //     //if letter used then grey out button - .style.color = .includes ? grey : blue

    // }


    // function init() {

    //     resets game


    //     array.forEach() => { //looping through array
    //     });
    // winner = null

    // render()
    // }

    // render
    //     -
    //     hide my letters as I click them -


})