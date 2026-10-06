// ==========================================
// BIRTHDAY DATE
// ==========================================

const birthday = new Date("october 12, 2026 00:00:00").getTime();

let countdownTimer = null;


// ==========================================
// START SURPRISE
// ==========================================

function startSurprise() {

    // Start music
    const music = document.getElementById("birthdayMusic");

    music.volume = 0.35;

    music.play().catch(function () {
        console.log("Music could not start.");
    });

    // Show countdown
    showScreen("countdownScreen");

    // Create floating hearts
    createHearts();

    // Start countdown
    updateCountdown();

    // Make sure only ONE timer is running
    if (countdownTimer === null) {
        countdownTimer = setInterval(updateCountdown, 1000);
    }
}


// ==========================================
// CHANGE SCREEN
// ==========================================

function showScreen(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(id);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// ==========================================
// COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthday - now;


    // Birthday has arrived
    if (distance <= 0) {

        // STOP countdown
        if (countdownTimer !== null) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        showScreen("birthdayScreen");

        return;
    }


    // Calculate time
    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


    // Display countdown
    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


// ==========================================
// BIRTHDAY → MEMORIES
// ==========================================

function showMemories() {

    showScreen("memoriesScreen");
}


// ==========================================
// MEMORIES → MESSAGE
// ==========================================

function showMessage() {

    showScreen("messageScreen");

    typeMessage();
}


// ==========================================
// TYPING MESSAGE
// ==========================================

function typeMessage() {

    const message = `No matter what problems come our way,
I will always stand by you.

Until my last breath, I promise
I will never leave your side, Sree Lekha. ❤️

These two years have given me
so many beautiful memories,
and I hope we create many more together.

I hope your birthday is filled with
happiness, love, smiles, and everything
beautiful that you deserve. ✨

Always keep smiling,
because your smile means so much to me.

Once again,
Happy Birthday to you,
my BUBU and UDATHA 🐿️! 🎂💙`;


    const element = document.getElementById("typedMessage");

    element.innerHTML = "";

    let index = 0;


    function type() {

        if (index < message.length) {

            const character = message[index];

            if (character === "\n") {
                element.innerHTML += "<br>";
            }
            else {
                element.innerHTML += character;
            }

            index++;

            setTimeout(type, 35);
        }
    }

    type();
}


// ==========================================
// MESSAGE → FINAL SURPRISE
// ==========================================

function showFinal() {

    showScreen("finalScreen");

    createMoreHearts();
}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHearts() {

    const container = document.querySelector(".hearts");

    setInterval(function () {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            Math.random() > 0.5 ? "💙" : "✨";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.animationDuration =
            (5 + Math.random() * 7) + "s";


        container.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 12000);

    }, 500);
}


// ==========================================
// FINAL SCREEN HEARTS
// ==========================================

function createMoreHearts() {

    const container = document.querySelector(".hearts");


    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            Math.random() > 0.5 ? "💙" : "❤️";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (15 + Math.random() * 30) + "px";


        heart.style.animationDuration =
            (4 + Math.random() * 5) + "s";


        heart.style.animationDelay =
            Math.random() * 3 + "s";


        container.appendChild(heart);
    }
}