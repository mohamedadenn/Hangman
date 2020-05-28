$(document).ready(function() {
    /*----- app state ---------------------------*/
    let win = 0;
    let lose = 0;
    let category = ["fruits", "animals", "countries"];
    let word = ["apples", "bananas", "kiwi", "oranges"];
    let word2 = ["cow", "cat", "dog"];
    let word3 = ["canada", "usa", "kenya"];
    let hint1 = ["its red", "its yellow", "its green"];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

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

    // alphabet.forEach(function(letter) {
    //         if (letter.target.tagName !== 'LI') {
    //             return;
    //         }
    //         checkGuess(letter.target.innerHTML)
    //         console.log("test")
    //         evt.target.classList.add('inactive')
    //     })
    document.querySelector('ul').addEventListener("click", function(evt) {
        if (evt.target.tagName !== 'LI') {
            return;
        }
        checkGuess(evt.target.innerHTML)
        console.log("test")
        evt.target.classList.add('inactive')
    });



    // let a = document.getElementById("a");
    // a.addEventListener("click", function() {
    //     checkGuess("a");
    //     a.classList.add("inactive");

    // });

    // let b = document.getElementById("b");
    // b.addEventListener("click", function() {
    //     checkGuess("b");
    //     b.classList.add("inactive");
    // });

    // let c = document.getElementById("c");
    // c.addEventListener("click", function() {
    //     checkGuess("c");
    //     c.classList.add("inactive");
    // });

    // let d = document.getElementById("d");
    // d.addEventListener("click", function() {
    //     checkGuess("d");
    //     d.classList.add("inactive");
    // });

    // let e = document.getElementById("e");
    // e.addEventListener("click", function() {
    //     checkGuess("e");
    //     e.classList.add("inactive");
    // });


    // let f = document.getElementById("f");
    // f.addEventListener("click", function() {
    //     checkGuess("f");
    //     f.classList.add("inactive");
    // });

    // let g = document.getElementById("g");
    // g.addEventListener("click", function() {
    //     checkGuess("g");
    //     g.classList.add("inactive");
    // });

    // let h = document.getElementById("h");
    // h.addEventListener("click", function() {
    //     checkGuess("h");
    //     h.classList.add("inactive");
    // });

    // let i = document.getElementById("i");
    // i.addEventListener("click", function() {
    //     checkGuess("i");
    //     i.classList.add("inactive");
    // });


    // let j = document.getElementById("j");
    // j.addEventListener("click", function() {
    //     checkGuess("j");
    //     j.classList.add("inactive");
    // });

    // let k = document.getElementById("k");
    // k.addEventListener("click", function() {
    //     checkGuess("k");
    //     k.classList.add("inactive");
    // });

    // let l = document.getElementById("l");
    // l.addEventListener("click", function() {
    //     checkGuess("l");
    //     l.classList.add("inactive");
    // });

    // let m = document.getElementById("m");
    // m.addEventListener("click", function() {
    //     checkGuess("m");
    //     m.classList.add("inactive");
    // });

    // let n = document.getElementById("n");
    // n.addEventListener("click", function() {
    //     checkGuess("n");
    //     n.classList.add("inactive");
    // });

    // let o = document.getElementById("o");
    // o.addEventListener("click", function() {
    //     checkGuess("o");
    //     o.classList.add("inactive");
    // });

    // let p = document.getElementById("p");
    // p.addEventListener("click", function() {
    //     checkGuess("p");
    //     p.classList.add("inactive");
    // });

    // let q = document.getElementById("q");
    // q.addEventListener("click", function() {
    //     checkGuess("q");
    //     q.classList.add("inactive");
    // });

    // let r = document.getElementById("r");
    // r.addEventListener("click", function() {
    //     checkGuess("r");
    //     r.classList.add("inactive");
    // });

    // let s = document.getElementById("s");
    // s.addEventListener("click", function() {
    //     checkGuess("s");
    //     s.classList.add("inactive");
    // });

    // let t = document.getElementById("t");
    // t.addEventListener("click", function() {
    //     checkGuess("t");
    //     t.classList.add("inactive");
    // });

    // let u = document.getElementById("u");
    // u.addEventListener("click", function() {
    //     checkGuess("u");
    //     u.classList.add("inactive");
    // });

    // let v = document.getElementById("v");
    // v.addEventListener("click", function() {
    //     checkGuess("v");
    //     v.classList.add("inactive");
    // });

    // let w = document.getElementById("w");
    // w.addEventListener("click", function() {
    //     checkGuess("w");
    //     w.classList.add("inactive");
    // });

    // let x = document.getElementById("x");
    // x.addEventListener("click", function() {
    //     checkGuess("x");
    //     x.classList.add("inactive");
    // });

    // let y = document.getElementById("y");
    // y.addEventListener("click", function() {
    //     checkGuess("y");
    //     y.classList.add("inactive");
    // });

    // let z = document.getElementById("z");
    // z.addEventListener("click", function() {
    //     checkGuess("z");
    //     z.classList.add("inactive");
    // });


    resetButton.click(function() {
        reset();
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
        // checks if the charc is exisiting in the hidden word & lives is greater than 0 
        if (categoryWord.indexOf(guess) > -1 && lives > 0) {
            underscore[categoryWord.indexOf(guess)] = guess;
            console.log(underscore);
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
                console.log(underscore);
            }
            let domUnderscore = document.getElementsByClassName("domunderscore");
            domUnderscore[0].innerHTML = underscore.join(' ');

            if (underscore.indexOf('_') == -1) {
                console.log("winner");

                win++;
                let numOfWins = document.getElementById("numOfWins");
                numOfWins.innerHTML = win;
                status.text("You have WON, please wait 5 seconds before beginning a new game");
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
                console.log("You lose");

                status.text("You have LOST, please wait 5 seconds before beginning a new game");
                setTimeout(reset, 5000);
                // add freeze button 
            } else if (lives == 0) {
                let livesLeft = document.getElementById("livesleft");
                livesLeft.innerHTML = "You have " + lives + " lives left";

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
        status.text("Use the alphabet below to guess the word in the listed category! ");

        chosenCategory = category[Math.floor(Math.random() * category.length)];
        categoryWord = word[Math.floor(Math.random() * word.length)];
        hiddenWord = categoryWord.replace(/./g, "-");
        console.log(hiddenWord);
        generateUnderscore(hiddenWord.length);

        let domUnderscore = document.getElementsByClassName("domunderscore");
        domUnderscore[0].innerHTML = "";
        domUnderscore[0].innerHTML = generateUnderscore(hiddenWord).join(' ');

        selectedCategory.text(chosenCategory);

    }

    startGame()
});