$(document).ready(function() {
    /*----- app state ---------------------------*/
    let win = 0;
    let lose = 0;
    let category = [" Fruits"];
    let word = ["apple", "banana", "kiwi", "orange", "pear", "cherry", "grape", "strawberry", "peach"];
    let hint1 = ["its red", "its yellow", "its green"]; //not used
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]; //not used but will implement to clean up code + identify which letters have been used

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
    var step = 0; //9 parts to the draw 
    var lives = 9; // you have a max of 9 lives before you die.
    let underscore = []; //empty array the words are pushed to and each letter is replaced with "_"

    /*------------ cached elements ---------------*/

    const status = $("#status"); //Status message, where you know if you won or loss 
    const selectedCategory = $("#selectedcategory"); //Selecting category, will eventually need to be a drop down bar
    const canvas = document.getElementById('hangman');
    const context = canvas.getContext("2d");
    const makeUnderline = $("#wordwrap"); // where the __ ___ __ are stired
    const resetButton = $("#reset");
    const hintButton = $("#hint");
    let domUnderscore = document.getElementsByClassName("domunderscore");

    /*----------- events ------------------*/

    function addActive() {
        document.querySelector('ul').addEventListener("click", function(evt) {
            if (evt.target.tagName !== 'LI') {
                return;
            }
            checkGuess(evt.target.innerHTML)
            evt.target.classList.add('inactive')
        });
    }

    resetButton.click(function() {
        reset();
    })

    hintButton.click(function() {
        alert("oops doesnt work yet");
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
        generateUnderscore(hiddenWord.length);
        makeUnderline.append("<div class='domunderscore'>" + generateUnderscore(hiddenWord).join(' ') + "</div>")
        selectedCategory.text(chosenCategory);
        domUnderscore.innerHTML = underscore.join(' ');
        addActive();
        clearCanvas();

        step = 0;
        win = 0;
        loss = 0;
    };


    function checkGuess(guess) {
        // checks if the charc is exisiting in the hidden word & lives is greater than 0 
        if (categoryWord.indexOf(guess) > -1 && lives > 0) {
            underscore[categoryWord.indexOf(guess)] = guess;
            //checks for multiple charc present
            if (categoryWord.lastIndexOf(guess) > categoryWord.indexOf(guess)) {
                let multipleCharacter = categoryWord.lastIndexOf(guess);
                let counter = 0;
                while (counter <= multipleCharacter) {
                    if (categoryWord[counter] == guess) {
                        underscore[counter] = guess;
                    }
                    counter++;
                }
            }
            let domUnderscore = document.getElementsByClassName("domunderscore");
            domUnderscore[0].innerHTML = underscore.join(' ');

            if (underscore.indexOf('_') == -1) {
                win++;
                let numOfWins = document.getElementById("numOfWins");
                numOfWins.innerHTML = win;
                status.text("You have WON, please wait 5 seconds before a new game begins");
                setTimeout(reset, 5000);
            }
            return true;

        } else {

            Draw(draws[step++])
            if (undefined === draws[step]);
            if (lives > 1) {
                lives--;
                let livesLeft = document.getElementById("livesleft");
                livesLeft.innerHTML = "You have " + lives + " lives left";
            } else if (lives == 1) {
                lives--;
                lose++;
                let livesLeft = document.getElementById("livesleft");
                livesLeft.innerHTML = "You have " + lives + " lives left";
                let numOfLoses = document.getElementById("numOfLoses");
                numOfLoses.innerHTML = lose;
                status.text("You have LOST, please wait 5 seconds before a new game begins");
                setTimeout(reset, 5000);

            } else if (lives == 0) {
                let livesLeft = document.getElementById("livesleft");
                livesLeft.innerHTML = "You have " + lives + " lives left";
                reset();
            }

            return false;
        }


    }

    function reset() {
        lives = 9;
        clearCanvas();
        step = 0;
        let livesLeft = document.getElementById("livesleft");
        livesLeft.innerHTML = "You have " + lives + " lives left";
        underscore = [];
        let a = document.getElementById("a");
        a.classList.replace("inactive", "active");

        let b = document.getElementById("b");
        b.classList.replace("inactive", "active");

        let c = document.getElementById("c");
        c.classList.replace("inactive", "active");

        let d = document.getElementById("d");
        d.classList.replace("inactive", "active");

        let e = document.getElementById("e");
        e.classList.replace("inactive", "active");

        let f = document.getElementById("f");
        f.classList.replace("inactive", "active");

        let g = document.getElementById("g");
        g.classList.replace("inactive", "active");

        let h = document.getElementById("h");
        h.classList.replace("inactive", "active");

        let i = document.getElementById("i");
        i.classList.replace("inactive", "active");

        let j = document.getElementById("j");
        j.classList.replace("inactive", "active");

        let k = document.getElementById("k");
        k.classList.replace("inactive", "active");


        let l = document.getElementById("l");
        l.classList.replace("inactive", "active");

        let m = document.getElementById("m");
        m.classList.replace("inactive", "active");

        let n = document.getElementById("n");
        n.classList.replace("inactive", "active");

        let o = document.getElementById("o");
        o.classList.replace("inactive", "active");

        let p = document.getElementById("p");
        p.classList.replace("inactive", "active");

        let q = document.getElementById("q");
        q.classList.replace("inactive", "active");

        let r = document.getElementById("r");
        r.classList.replace("inactive", "active");

        let s = document.getElementById("s");
        s.classList.replace("inactive", "active");

        let t = document.getElementById("t");
        t.classList.replace("inactive", "active");

        let u = document.getElementById("u");
        u.classList.replace("inactive", "active");

        let v = document.getElementById("v");
        v.classList.replace("inactive", "active");

        let w = document.getElementById("w");
        w.classList.replace("inactive", "active");

        let x = document.getElementById("x");
        x.classList.replace("inactive", "active");

        let y = document.getElementById("y");
        y.classList.replace("inactive", "active");

        let z = document.getElementById("z");
        z.classList.replace("inactive", "active");

        status.text("Use the alphabet below to guess the word in the listed category!");

        chosenCategory = category[Math.floor(Math.random() * category.length)];
        categoryWord = word[Math.floor(Math.random() * word.length)];
        hiddenWord = categoryWord.replace(/./g, "-");
        generateUnderscore(hiddenWord.length);

        let domUnderscore = document.getElementsByClassName("domunderscore");
        domUnderscore[0].innerHTML = "";
        domUnderscore[0].innerHTML = generateUnderscore(hiddenWord).join(' ');

        selectedCategory.text(chosenCategory);

    }

    startGame()
});