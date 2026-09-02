// ===============================
// MEME FLY
// ===============================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const menu = document.getElementById("menu");
const levelsScreen = document.getElementById("levelsScreen");
const game = document.getElementById("game");

const playBtn = document.getElementById("playBtn");
const levelsBtn = document.getElementById("levelsBtn");
const backBtn = document.getElementById("backBtn");

const retryBtn = document.getElementById("retryBtn");
const menuBtn = document.getElementById("menuBtn");

const gameOver = document.getElementById("gameOver");
const levelComplete = document.getElementById("levelComplete");

const scoreText = document.getElementById("score");
const currentLevelText = document.getElementById("currentLevel");
const gameCoinsText = document.getElementById("gameCoins");

const bestScoreText = document.getElementById("bestScore");
const coinsText = document.getElementById("coins");

const finalScore = document.getElementById("finalScore");
const completeScore = document.getElementById("completeScore");

const nextBtn = document.getElementById("nextBtn");
const levelsBtn2 = document.getElementById("levelsBtn2");


// ===============================
// GAME DATA
// ===============================

const levels = [
    {
        name: "PEPE",
        gravity: 0.42,
        jump: -7.5,
        speed: 3.2,
        gap: 180,
        target: 10
    },
    {
        name: "SHIB",
        gravity: 0.44,
        jump: -7.6,
        speed: 3.5,
        gap: 175,
        target: 12
    },
    {
        name: "DOGE",
        gravity: 0.46,
        jump: -7.7,
        speed: 3.8,
        gap: 170,
        target: 14
    },
    {
        name: "TROLL",
        gravity: 0.48,
        jump: -7.8,
        speed: 4.1,
        gap: 165,
        target: 16
    },
    {
        name: "67",
        gravity: 0.50,
        jump: -7.9,
        speed: 4.4,
        gap: 160,
        target: 18
    },
    {
        name: "FINAL",
        gravity: 0.53,
        jump: -8,
        speed: 4.8,
        gap: 155,
        target: 20
    }
];


// ===============================
// SAVE DATA
// ===============================

let unlockedLevel =
    Number(localStorage.getItem("unlockedLevel")) || 1;

let bestScore =
    Number(localStorage.getItem("bestScore")) || 0;

let totalCoins =
    Number(localStorage.getItem("totalCoins")) || 0;

bestScoreText.textContent = bestScore;
coinsText.textContent = totalCoins;


// ===============================
// CANVAS
// ===============================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


// ===============================
// GAME VARIABLES
// ===============================

let currentLevel = 1;

let bird;
let pipes = [];
let coins = [];

let score = 0;
let collectedCoins = 0;

let gameRunning = false;
let gameFinished = false;

let lastPipe = 0;

let animation;


// ===============================
// LEVEL MENU
// ===============================

function createLevels() {

    const container =
        document.getElementById("levelContainer");

    container.innerHTML = "";

    levels.forEach((level, index) => {

        const number = index + 1;

        const button = document.createElement("button");

        button.className = "level";

        if (number > unlockedLevel) {
            button.classList.add("locked");

            button.innerHTML = `
                <div class="number">🔒</div>
                <div class="name">LOCKED</div>
            `;

            button.disabled = true;

        } else {

            button.innerHTML = `
                <div class="number">${number}</div>
                <div class="name">${level.name}</div>
            `;

            button.addEventListener("click", () => {
                startGame(number);
            });
        }

        container.appendChild(button);
    });
}

createLevels();


// ===============================
// SCREEN MANAGEMENT
// ===============================

function showMenu() {

    menu.classList.remove("hidden");
    levelsScreen.classList.add("hidden");
    game.classList.add("hidden");

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    bestScoreText.textContent = bestScore;
    coinsText.textContent = totalCoins;
}


function showLevels() {

    menu.classList.add("hidden");
    levelsScreen.classList.remove("hidden");
    game.classList.add("hidden");

    createLevels();
}


levelsBtn.addEventListener("click", showLevels);

backBtn.addEventListener("click", showMenu);

menuBtn.addEventListener("click", showMenu);

levelsBtn2.addEventListener("click", showLevels);

playBtn.addEventListener("click", () => {
    startGame(unlockedLevel);
});

retryBtn.addEventListener("click", () => {
    startGame(currentLevel);
});


// ===============================
// START GAME
// ===============================

function startGame(levelNumber) {

    currentLevel = levelNumber;

    const settings = levels[currentLevel - 1];

    score = 0;
    collectedCoins = 0;

    pipes = [];
    coins = [];

    gameRunning = true;
    gameFinished = false;

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    menu.classList.add("hidden");
    levelsScreen.classList.add("hidden");
    game.classList.remove("hidden");

    currentLevelText.textContent = currentLevel;
    scoreText.textContent = score;
    gameCoinsText.textContent = collectedCoins;

    bird = {
        x: canvas.width * 0.25,
        y: canvas.height * 0.5,
        velocity: 0,
        radius: 22
    };

    lastPipe = 0;

    cancelAnimationFrame(animation);

    gameLoop();
}


// ===============================
// JUMP
// ===============================

function jump() {

    if (!gameRunning) return;

    const settings = levels[currentLevel - 1];

    bird.velocity = settings.jump;
}

document.addEventListener("keydown", event => {

    if (
        event.code === "Space" ||
        event.code === "ArrowUp"
    ) {

        event.preventDefault();

        jump();
    }
});

canvas.addEventListener("mousedown", jump);

canvas.addEventListener("touchstart", event => {

    event.preventDefault();

    jump();

}, { passive: false });


// ===============================
// CREATE PIPE
// ===============================

function createPipe() {

    const settings = levels[currentLevel - 1];

    const minTop = 80;

    const maxTop =
        canvas.height - settings.gap - 160;

    const top =
        Math.random() *
        (maxTop - minTop) +
        minTop;

    pipes.push({
        x: canvas.width + 50,
        width: 75,
        top: top,
        bottom: top + settings.gap,
        passed: false
    });

    // Create a coin between the pipes
    coins.push({
        x: canvas.width + 87,
        y: top + settings.gap / 2,
        radius: 10,
        collected: false
    });
}


// ===============================
// UPDATE GAME
// ===============================

function update() {

    if (!gameRunning) return;

    const settings = levels[currentLevel - 1];

    // Bird physics
    bird.velocity += settings.gravity;

    bird.y += bird.velocity;

    // Create pipes
    if (
        performance.now() - lastPipe >
        1500
    ) {

        createPipe();

        lastPipe = performance.now();
    }

    // Move pipes
    pipes.forEach(pipe => {

        pipe.x -= settings.speed;

        if (!pipe.passed &&
            pipe.x + pipe.width < bird.x) {

            pipe.passed = true;

            score++;

            scoreText.textContent = score;

            if (
                score >= settings.target
            ) {
                completeLevel();
            }
        }
    });

    // Move coins
    coins.forEach(coin => {

        coin.x -= settings.speed;

        if (
            !coin.collected &&
            distance(
                bird.x,
                bird.y,
                coin.x,
                coin.y
            ) <
            bird.radius + coin.radius
        ) {

            coin.collected = true;

            collectedCoins++;

            totalCoins++;

            gameCoinsText.textContent =
                collectedCoins;

            coinsText.textContent =
                totalCoins;

            localStorage.setItem(
                "totalCoins",
                totalCoins
            );
        }
    });

    // Remove old objects
    pipes =
        pipes.filter(pipe =>
            pipe.x + pipe.width > -100
        );

    coins =
        coins.filter(coin =>
            coin.x > -50 &&
            !coin.collected
        );

    // Ground / ceiling
    if (
        bird.y - bird.radius < 0 ||
        bird.y + bird.radius > canvas.height
    ) {

        endGame();

        return;
    }

    // Collision
    for (const pipe of pipes) {

        const hitHorizontal =
            bird.x + bird.radius > pipe.x &&
            bird.x - bird.radius <
            pipe.x + pipe.width;

        const hitVertical =
            bird.y - bird.radius < pipe.top ||
            bird.y + bird.radius > pipe.bottom;

        if (
            hitHorizontal &&
            hitVertical
        ) {

            endGame();

            return;
        }
    }
}


// ===============================
// DISTANCE
// ===============================

function distance(x1, y1, x2, y2) {

    const dx = x1 - x2;
    const dy = y1 - y2;

    return Math.sqrt(dx * dx + dy * dy);
}


// ===============================
// DRAW BACKGROUND
// ===============================

function drawBackground() {

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            0,
            canvas.height
        );

    gradient.addColorStop(
        0,
        "#79d7ff"
    );

    gradient.addColorStop(
        1,
        "#dff8ff"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Clouds
    ctx.fillStyle =
        "rgba(255,255,255,0.75)";

    drawCloud(120, 120, 1);
    drawCloud(450, 190, 0.8);
    drawCloud(750, 100, 1.2);
}


function drawCloud(x, y, scale) {

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        25 * scale,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x + 30 * scale,
        y - 10 * scale,
        35 * scale,
        0,
        Math.PI * 2
    );

    ctx.arc(
        x + 65 * scale,
        y,
        25 * scale,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// ===============================
// DRAW PIPES
// ===============================

function drawPipes() {

    pipes.forEach(pipe => {

        ctx.fillStyle = "#111";

        // Top
        ctx.fillRect(
            pipe.x,
            0,
            pipe.width,
            pipe.top
        );

        // Bottom
        ctx.fillRect(
            pipe.x,
            pipe.bottom,
            pipe.width,
            canvas.height - pipe.bottom
        );

        // Pipe edges
        ctx.fillStyle = "#222";

        ctx.fillRect(
            pipe.x - 8,
            pipe.top - 18,
            pipe.width + 16,
            18
        );

        ctx.fillRect(
            pipe.x - 8,
            pipe.bottom,
            pipe.width + 16,
            18
        );
    });
}


// ===============================
// DRAW COINS
// ===============================

function drawCoins() {

    coins.forEach(coin => {

        ctx.beginPath();

        ctx.arc(
            coin.x,
            coin.y,
            coin.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#ffd700";

        ctx.fill();

        ctx.strokeStyle = "#000";

        ctx.lineWidth = 3;

        ctx.stroke();

        ctx.fillStyle = "#000";

        ctx.font = "bold 12px Arial";

        ctx.textAlign = "center";

        ctx.textBaseline = "middle";

        ctx.fillText(
            "$",
            coin.x,
            coin.y
        );
    });
}


// ===============================
// DRAW PLAYER
// ===============================

function drawBird() {

    ctx.save();

    ctx.translate(
        bird.x,
        bird.y
    );

    const rotation =
        Math.min(
            Math.max(
                bird.velocity * 0.06,
                -0.4
            ),
            0.8
        );

    ctx.rotate(rotation);

    // Body
    ctx.beginPath();

    ctx.arc(
        0,
        0,
        bird.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#ffffff";

    ctx.fill();

    ctx.strokeStyle = "#000";

    ctx.lineWidth = 4;

    ctx.stroke();

    // Eye
    ctx.beginPath();

    ctx.arc(
        8,
        -7,
        6,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#000";

    ctx.fill();

    // Beak
    ctx.beginPath();

    ctx.moveTo(
        18,
        2
    );

    ctx.lineTo(
        34,
        8
    );

    ctx.lineTo(
        18,
        13
    );

    ctx.closePath();

    ctx.fillStyle = "#ff9d00";

    ctx.fill();

    ctx.stroke();

    ctx.restore();
}


// ===============================
// DRAW
// ===============================

function draw() {

    drawBackground();

    drawPipes();

    drawCoins();

    drawBird();
}


// ===============================
// GAME LOOP
// ===============================

function gameLoop() {

    update();

    draw();

    if (gameRunning) {

        animation =
            requestAnimationFrame(
                gameLoop
            );
    }
}


// ===============================
// GAME OVER
// ===============================

function endGame() {

    if (gameFinished) return;

    gameFinished = true;
    gameRunning = false;

    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "bestScore",
            bestScore
        );
    }

    finalScore.textContent = score;

    gameOver.classList.remove("hidden");
}


// ===============================
// LEVEL COMPLETE
// ===============================

function completeLevel() {

    if (gameFinished) return;

    gameFinished = true;
    gameRunning = false;

    completeScore.textContent = score;

    if (
        currentLevel >= unlockedLevel &&
        currentLevel < levels.length
    ) {

        unlockedLevel =
            currentLevel + 1;

        localStorage.setItem(
            "unlockedLevel",
            unlockedLevel
        );
    }

    if (
        score > bestScore
    ) {

        bestScore = score;

        localStorage.setItem(
            "bestScore",
            bestScore
        );
    }

    if (
        currentLevel <
        levels.length
    ) {

        nextBtn.classList.remove("hidden");

    } else {

        nextBtn.classList.add("hidden");
    }

    levelComplete.classList.remove("hidden");
}


// ===============================
// NEXT LEVEL
// ===============================

nextBtn.addEventListener("click", () => {

    if (
        currentLevel <
        levels.length
    ) {

        startGame(
            currentLevel + 1
        );
    }
});


// ===============================
// START
// ===============================

showMenu();
