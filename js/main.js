$(document).ready(function() {
    /*----- app state ---------------------------*/
    let win = 0;
    let lose = 0;
    let category = ["fruits", "animals", "countries"];
    let fruits = ["apples", "bananas", "kiwi"];
    let animals = ["dogs", "cats", "monkeys"];
    let countries = ["Canada", "France", "China"];
    let hint = ["its red", "its yellow", "its green"];
    const draws = [
        'gallows',
        'head',
        'body',
        'rightHarm',
        'leftHarm',
        'rightLeg',
        'leftLeg',
        'rightFoot',
        'leftFoot',
    ]
    var step = 0;

    /*------------ cached elements ---------------*/

    const status = $("#status");
    const selectedCategory = $("#selectedcategory");
    const canvas = document.getElementById('hangman');
    const context = canvas.getContext("2d");
    const makeUnderline = $("#wordwrap");
    const alphabet = $("li"); //.eq selects the specific one
    const resetButton = $("#reset");
    const hintButton = $("#hint");
    const soundButton = $("#sound");
    /*-- need to fix--*/
    const updateNumOfWins = document.getElementById("#numOfWins")
    const updateNumOfLoses = document.getElementById("#numOfLoses")

    /*----------- events ------------------*/

    alphabet.click(function() {
        let getIndex = $(this).index();
        let getLetter = this.closest("li");
        console.log(getIndex);
        console.log(getLetter);

    })

    resetButton.click(function() {
        Draw(draws[step++])
        if (undefined === draws[step]);
    })

    hintButton.click(function() {
        clearCanvas()
        step = 0
    })

    soundButton.click(function() {
        console.log("sound")
    })

    /*----- HANGMAN DRAWING -------*/
    Draw = (part) => {
        switch (part) {
            case 'gallows':
                context.strokeStyle = '#444';
                context.lineWidth = 10;
                context.beginPath();
                context.moveTo(175, 195);
                context.lineTo(5, 195);
                context.moveTo(40, 195);
                context.lineTo(25, 5);
                context.lineTo(100, 5);
                context.lineTo(100, 25);
                context.stroke();
                break;

            case 'head':
                context.lineWidth = 5;
                context.beginPath();
                context.arc(100, 50, 25, 0, Math.PI * 2, true);
                context.closePath();
                context.stroke();
                break;

            case 'body':
                context.beginPath();
                context.moveTo(100, 75);
                context.lineTo(100, 140);
                context.stroke();
                break;

            case 'rightHarm':
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(60, 100);
                context.stroke();
                break;

            case 'leftHarm':
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(140, 100);
                context.stroke();
                break;

            case 'rightLeg':
                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(80, 190);
                context.stroke();
                break;

            case 'rightFoot':
                context.beginPath();
                context.moveTo(82, 190);
                context.lineTo(70, 185);
                context.stroke();
                break;

            case 'leftLeg':
                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(125, 190);
                context.stroke();
                break;

            case 'leftFoot':
                context.beginPath();
                context.moveTo(122, 190);
                context.lineTo(135, 185);
                context.stroke();
                break;
        }
    }

    /*----- function ------*/

    clearCanvas = () => {
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

    function startGame() {
        Math.floor(math.random)
    }
})