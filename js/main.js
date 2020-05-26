    /*----- app state -----*/
    let win, lose; //scorekeeping varaibles
    let category = ["fruits"]
    let words = ["apples", "bananas", "kiwi"];

    /*----- cached elements -----*/

    const status = $("#status");
    const selectedCategory = $("#selectedcategory");
    const canvas = $("canvas");
    const makeUnderline = $("#wordwrap");
    const alphabet = $("li"); //.eq selects the specific one
    const resetButton = $("#reset");
    const hintButton = $("#hint");
    /*-- need to fix--*/
    const updateNumOfWins = $("#numofWins");
    const updateNumOfLoses = $("#numofLoses");

    // /* events */


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

    $(document).ready(function() {

        const listClick = $("ul")

        listClick.click(function(x) {
            listClick.addClass("active");
        })
    })