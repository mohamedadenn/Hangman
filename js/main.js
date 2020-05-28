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
    let underscore = [];

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
    const updateNumOfWins = $("numOfWins");
    const updateNumOfLoses = $("numOfLoses");
    const livesLeft = $("livesleft");
    let domUnderscore = document.getElementsByClassName("domunderscore");
    /*----------- events ------------------*/

    let a = document.getElementById("a");
    a.addEventListener("click", function() {
        checkGuess("a");
        a.classList.add("inactive");

    });

    let b = document.getElementById("b");
    b.addEventListener("click", function() { checkGuess("b"); });

    let c = document.getElementById("c");
    c.addEventListener("click", function() { checkGuess("c"); });

    let d = document.getElementById("d");
    d.addEventListener("click", function() { checkGuess("d"); });

    let e = document.getElementById("e");
    e.addEventListener("click", function() { checkGuess("e"); });

    let f = document.getElementById("f");
    f.addEventListener("click", function() { checkGuess("f"); });

    // let b = document.getElementById("b").closest("li");
    // checkGuess("b");
    // let c = document.getElementById("c").closest("li");
    // checkGuess("c");
    // let d = document.getElementById("d").closest("li");
    // checkGuess("d");
    // let e = document.getElementById("e").closest("li");
    // checkGuess("e");
    // let f = document.getElementById("f").closest("li");
    // checkGuess("f");
    // let g = document.getElementById("g").closest("li");
    // checkGuess("g");
    // let h = document.getElementById("h").closest("li");
    // checkGuess("h");
    // let i = document.getElementById("i").closest("li");
    // checkGuess("i");
    // let j = document.getElementById("j").closest("li");
    // checkGuess("j");
    // let k = document.getElementById("k").closest("li");
    // checkGuess("k");
    // let l = document.getElementById("l").closest("li");
    // checkGuess("l");
    // let m = document.getElementById("m").closest("li");
    // checkGuess("m");
    // let n = document.getElementById("n").closest("li");
    // checkGuess("n");
    // let o = document.getElementById("o").closest("li");
    // checkGuess("o");
    // let p = document.getElementById("p").closest("li");
    // checkGuess("p");
    // let q = document.getElementById("q").closest("li");
    // checkGuess("q");
    // let r = document.getElementById("r").closest("li");
    // checkGuess("r");
    // let s = document.getElementById("s").closest("li");
    // checkGuess("s");
    // let t = document.getElementById("t").closest("li");
    // checkGuess("t");
    // let u = document.getElementById("u").closest("li");
    // checkGuess("u");
    // let v = document.getElementById("v").closest("li");
    // checkGuess("v");
    // let w = document.getElementById("w").closest("li");
    // checkGuess("w");
    // let x = document.getElementById("x").closest("li");
    // checkGuess("x");
    // let y = document.getElementById("y").closest("li");
    // checkGuess("y");
    // let z = document.getElementById("z").closest("li");
    // checkGuess("z");

    document.addEventListener('keypress', (event) => {
        let keyword = event.keyCode;
        console.log(keyword);
    })

    resetButton.click(function() {

    })

    hintButton.click(function() {
        clearCanvas()
        step = 0
    })

    soundButton.click(function() {
        Draw(draws[step++])
        if (undefined === draws[step]);
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

    clearCanvas = () => {
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

    /*----- function ------*/

    function generateUnderscore(selected) {
        for (let i = 0; i < selected; i++) {
            underscore.push('_');
        }
        return underscore;

    }

    function startGame() {
        chosenCategory = category[Math.floor(Math.random() * category.length)];
        categoryWord = word[Math.floor(Math.random() * word.length)];
        hiddenWord = categoryWord.replace(/./g, "-");
        console.log(hiddenWord);
        generateUnderscore(hiddenWord.length);
        makeUnderline.append("<div class='domunderscore'>" + generateUnderscore(hiddenWord).join(' ') + "</div>")
        selectedCategory.text(chosenCategory);
        domUnderscore.innerHTML = underscore.join(' ');

        clearCanvas()
        step = 0;
        win = 0;
        loss = 0;
    };


    function checkGuess(guess) {
        if (categoryWord.indexOf(guess) > -1) {
            underscore[categoryWord.indexOf(guess)] = guess;
            console.log(underscore);
            if (categoryWord.lastIndexOf(guess) > categoryWord.indexOf(guess)) {
                let multipleCharacter = categoryWord.lastIndexOf(guess);
                let counter = 0;
                while (counter <= multipleCharacter) {
                    if (categoryWord[counter] == guess) {
                        underscore[counter] = guess;
                    }
                    counter++;
                }
                underscore[categoryWord.lastIndexOf(guess)] = guess;
                console.log(underscore);
            }

            console.log(categoryWord.indexOf(guess));
        } else {
            Draw(draws[step++])
            if (undefined === draws[step]);

        }
        if (checkWinner()) {
            console.log("win");
        } else {
            lives--;

        }

        console.log(lives);
        livesLeft.text(lives);

    }
}

function checkWinner() {
    let emptyUnderscore = true;
    for (let i = 0; i < underscore.length; i++) {
        if (underscore[i] == "_") {
            emptyUnderscore = false;
        }
    }
    if (lives === 0 && emptyUnderscore == true) {
        lose++
        console.log(lose);
        updateNumOfLoses.text(lose);
        status.text("sorry you have lost");
        return false;

    } else {
        return true;
    }
}
startGame()
});