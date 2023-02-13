const computerHand = document.querySelector("#computer-hand");
const playerHand = document.querySelector("#player-hand");
const Result = document.querySelector("#result");
const possible_choice = document.querySelectorAll(".gameframe button");
const cScore = document.querySelector("#computer_score");
const uScore = document.querySelector("#user_score");
const gameFrame = document.querySelector(".gameframe");
const Intro = document.querySelector(".intro");
let Music = document.querySelector(".fa-music");
const feature = document.querySelector(".feature");
const Play = document.querySelector(".fa-play");
const Pause = document.querySelector(".fa-pause");
const popup = document.querySelector(".popup_content");
const popup_button = document.querySelector(".fa-info");
const close_button = document.querySelector("#close");
const Begin = document.querySelector("#begin");


let user_choice = "";
let computer_choice = "";
let Uscore = 0;
let Cscore = 0;
let hands = document.querySelectorAll(".hands img");
let IsStarted = false;




Begin.addEventListener("click", () => {

    Intro.style.display = "none";
    gameFrame.style.display = "contents";
    IsStarted = true;
    feature.style.display = "flex";

});



popup_button.addEventListener("click", () => {
    popup.style.display = "flex";
    gameFrame.style.visibility = "hidden";

    IsStarted = false;


})

close_button.addEventListener("click", () => {
    popup.style.display = "none";
    gameFrame.style.visibility = "visible";

    IsStarted = true;


});

hands.forEach(hand => {
    hand.addEventListener("animationend", function () {
        this.style.animation = "";

    });
});

possible_choice.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    user_choice = e.target.id
    console.log(user_choice);
    Result.innerHTML = " ";

    Generate_computer_choice(e.target.id);

}))


function Generate_computer_choice(user_choice) {
    let random_number = Math.floor(Math.random() * 3);
    if (random_number === 0) {
        computer_choice = "rock";
    }
    else if (random_number === 1) {
        computer_choice = "paper";
    }
    else {
        computer_choice = "Scissors";
    }




    setTimeout(() => {


        //Here is where we call compare hands
        Compare(user_choice, computer_choice);

        //Update Images
        playerHand.src = `./pictures/${user_choice}.png`;
        computerHand.src = `./pictures/${computer_choice}.png`;
        //Animate Hands

    }, 1000)

    playerHand.src = `./pictures/rock.png`;
    computerHand.src = `./pictures/rock.png`;
    computerHand.style.animation = "shakeComputer 2s ease";
    playerHand.style.animation = "shakePlayer 2s ease";


}

function Compare() {


    setTimeout(() => {
        if (user_choice == computer_choice) {
            Result.style.transition = "all 1s ease";
            Result.innerHTML = "It's a Draw";

        }

        else if (user_choice == "rock" && computer_choice == "Scissors") {
            Result.style.transition = "all 1s ease";
            Result.innerHTML = "Hurrah!";
            Uscore += 1;

        }


        else if (user_choice == "paper" && computer_choice == "rock") {
            Result.style.transition = "all 1s ease";
            Result.innerHTML = "Hurrah!";
            Uscore += 1;
        }

        else if (user_choice == "Scissors" && computer_choice == "paper") {
            Result.style.transition = "all 1s ease";
            Result.innerHTML = "Hurrah!";
            Uscore += 1;
        }

        else {
            Result.style.transition = "all 1s ease";
            Result.innerHTML = "Ooops!";
            Cscore += 1;
        }


        if (Uscore == 3) {
            Result.style.transition = "all 0.1s ease";
            Result.innerHTML = " You Win";
            Result.style.color = "green";
            cScore.innerHTML = Cscore;
            uScore.innerHTML = Uscore;
            setInterval(() => {
                Reset();
            }, 500);
        }

        else if (Cscore == 3) {
            Result.style.transition = "all 0.1s ease";
            Result.innerHTML = " You Lose";
            Result.style.color = "red";
            cScore.innerHTML = Cscore;
            uScore.innerHTML = Uscore;
            setInterval(() => {
                Reset();
            }, 1500);
        }

        else {
            cScore.innerHTML = Cscore;
            uScore.innerHTML = Uscore;
        }

    }, 10)

}


const GameOver_popup = document.querySelector("#GameOver_popup");
let GameOver_popup_Result = document.querySelector("#game_Result");
const Yes = document.querySelector("#yes");
const No = document.querySelector("#no");

function Reset() {
    console.log("reset");

    GameOver_popup.style.display = "flex";
    GameOver_popup_Result.innerHTML = '<h2>' + Result.innerHTML + '</h2>' + '<h2>' + '\n Do you want to restart the game?' + '</h2>';
    gameFrame.style.visibility = "hidden";
    feature.style.display = "none";
    Yes.addEventListener("click", () => {

        GameOver_popup.style.display = "none";
        window.location.reload();
    });

    No.addEventListener("click", () => {
        GameOver_popup.style.display = "none";
        gameFrame.style.visibility = "visible";
    });

}




let MusicPlay = 0;
let audio = new Audio("media/Sweet.mp3");
Music.addEventListener("click", () => {

    if (MusicPlay == 0) {
        audio.play();
        MusicPlay = 1;
        Music.classList.remove("fa-volume-xmark");
        Music.classList.add("fa-music");
    }
    else if (MusicPlay == 1) {
        audio.pause();
        MusicPlay = 0;
        Music.classList.add("fa-volume-xmark");
        Music.classList.remove("fa-music");
    }

});



document.getElementById("resume").addEventListener("click", function () {

    if (IsStarted == true) {
        gameFrame.style.visibility = "visible";
        Pause.style.visibility = "visible";
        Play.style.visibility = "hidden";
        this.style.display = "none";
    }

    else {
        alert("Game is not started");
    }

});


document.getElementById("restart").addEventListener("click", function () {
    alert("do you want to restart the game");
    location.reload();
});

document.getElementById("pause").addEventListener("click", function () {

    document.getElementById("resume").style.display = "block";

    if (IsStarted == true) {


        gameFrame.style.visibility = "hidden";
        Pause.style.visibility = "hidden";
        Play.style.visibility = "visible";
    }

    else {
        alert("Game is not started");
    }
});