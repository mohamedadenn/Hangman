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
    b.addEventListener("click", function() {
        checkGuess("b");
        b.classList.add("inactive");
    });

    let c = document.getElementById("c");
    c.addEventListener("click", function() {
        checkGuess("b");
        c.classList.add("inactive");
    });

    let d = document.getElementById("d");
    d.addEventListener("click", function() {
        checkGuess("d");
        d.classList.add("inactive");
    });

    let e = document.getElementById("e");
    e.addEventListener("click", function() {
        checkGuess("e");
        e.classList.add("inactive");
    });


    let f = document.getElementById("f");
    f.addEventListener("click", function() {
        checkGuess("f");
        f.classList.add("inactive");
    });

    let g = document.getElementById("g");
    g.addEventListener("click", function() {
        checkGuess("g");
        g.classList.add("inactive");
    });

    let h = document.getElementById("h");
    h.addEventListener("click", function() {
        checkGuess("h");
        h.classList.add("inactive");
    });

    let i = document.getElementById("i");
    i.addEventListener("click", function() {
        checkGuess("i");
        i.classList.add("inactive");
    });


    let j = document.getElementById("j");
    j.addEventListener("click", function() {
        checkGuess("j");
        j.classList.add("inactive");
    });

    let k = document.getElementById("k");
    k.addEventListener("click", function() {
        checkGuess("k");
        k.classList.add("inactive");
    });

    let l = document.getElementById("l");
    l.addEventListener("click", function() {
        checkGuess("l");
        l.classList.add("inactive");
    });

    let m = document.getElementById("m");
    m.addEventListener("click", function() {
        checkGuess("m");
        m.classList.add("inactive");
    });

    let n = document.getElementById("n");
    n.addEventListener("click", function() {
        checkGuess("n");
        n.classList.add("inactive");
    });

    let o = document.getElementById("o");
    o.addEventListener("click", function() {
        checkGuess("o");
        o.classList.add("inactive");
    });

    let p = document.getElementById("p");
    p.addEventListener("click", function() {
        checkGuess("p");
        p.classList.add("inactive");
    });

    let q = document.getElementById("q");
    q.addEventListener("click", function() {
        checkGuess("q");
        q.classList.add("inactive");
    });

    let r = document.getElementById("r");
    r.addEventListener("click", function() {
        checkGuess("r");
        r.classList.add("inactive");
    });

    let s = document.getElementById("s");
    s.addEventListener("click", function() {
        checkGuess("s");
        s.classList.add("inactive");
    });

    let t = document.getElementById("t");
    t.addEventListener("click", function() {
        checkGuess("t");
        t.classList.add("inactive");
    });

    let u = document.getElementById("u");
    u.addEventListener("click", function() {
        checkGuess("u");
        u.classList.add("inactive");
    });

    let v = document.getElementById("v");
    v.addEventListener("click", function() {
        checkGuess("v");
        v.classList.add("inactive");
    });

    let w = document.getElementById("w");
    w.addEventListener("click", function() {
        checkGuess("w");
        w.classList.add("inactive");
    });

    let x = document.getElementById("x");
    x.addEventListener("click", function() {
        checkGuess("x");
        x.classList.add("inactive");
    });

    let y = document.getElementById("y");
    y.addEventListener("click", function() {
        checkGuess("y");
        y.classList.add("inactive");
    });

    let z = document.getElementById("z");
    z.addEventListener("click", function() {
        checkGuess("z");
        z.classList.add("inactive");
    });


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