$(document).ready(function() {
    /*----- app state ---------------------------*/
    let win = 0;
    let lose = 0;
    let category = ["fruits", "animals", "countries"];
    let word = ["apples", "bananas", "kiwi"];
    let word2 = ["cow", "cat", "dog"];
    let word3 = ["canada", "usa", "kenya"];
    let hint1 = ["its red", "its yellow", "its green"];
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
    var step = 0; //9 steps 
    var lives = 9;

    /*------------ cached elements ---------------*/

    const status = $("#status"); //Status message, where you know if you won or loss 
    const selectedCategory = $("#selectedcategory"); //Selecting category - needs to be a drop down bar
    const canvas = document.getElementById('hangman');
    const context = canvas.getContext("2d");
    const makeUnderline = $("#wordwrap"); // where the __ ___ __ are stired
    const alphabet = $("li"); //alphabet
    const resetButton = $("#reset");
    const hintButton = $("#hint");
    const soundButton = $("#sound");
    const updateNumOfWins = document.getElementById("numOfWins")
    const updateNumOfLoses = document.getElementById("numOfLoses")
    const livesLeft = document.getElementById("livesleft")

    /*----------- events ------------------*/
    alphabet.click(function() {
        let a = document.getElementById("a");
        checkGuess("a");


    })

    document.addEventListener('keypress', (event) => {
        let keyword = event.keyCode;
        console.log(keyword);
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
        chosenCategory = category[Math.floor(Math.random() * category.length)];
        categoryWord = word[Math.floor(Math.random() * word.length)];
        hiddenWord = categoryWord.replace(/./g, "-");
        console.log(hiddenWord);
        makeUnderline.append('<div id="und">' + hiddenWord + '</div>')
        selectedCategory.text(chosenCategory)
        clearCanvas()
    };

    function checkGuess(guess) {
        if (categoryWord.indexOf(guess) > -1) {
            console.log("yes");
            let domUnd = document.getElementById("und");
            domUnd.innerHtml = "a";
        } else {
            console.log("no");
            let domUnd = document.getElementById("und");
            domUnd[0].innerHtml = "x";
        }
    }


    startGame()
});