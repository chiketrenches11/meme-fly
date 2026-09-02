// ============================================================
// MEME FLY — WORLD EDITION
// ============================================================

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
const nextBtn = document.getElementById("nextBtn");
const levelsBtn2 = document.getElementById("levelsBtn2");

const gameOver = document.getElementById("gameOver");
const levelComplete = document.getElementById("levelComplete");

const scoreText = document.getElementById("score");
const currentLevelText = document.getElementById("currentLevel");
const gameCoinsText = document.getElementById("gameCoins");

const bestScoreText = document.getElementById("bestScore");
const coinsText = document.getElementById("coins");

const finalScore = document.getElementById("finalScore");
const completeScore = document.getElementById("completeScore");


// ============================================================
// WORLDS
// ============================================================

const worlds = [
    {
        name: "PEPE",
        title: "PEPE SWAMP",
        emoji: "🐸",
        sky: "#78d84b",
        sky2: "#c9f56a",
        ground: "#315c22",
        obstacle: "#174f29",
        accent: "#48ff66",
        gravity: 0.42,
        jump: -7.4,
        speed: 3.1,
        gap: 190,
        target: 8
    },

    {
        name: "SHIB",
        title: "SHIB CITY",
        emoji: "🐕",
        sky: "#ff5548",
        sky2: "#ffd0a6",
        ground: "#751d28",
        obstacle: "#8d1725",
        accent: "#fff1d0",
        gravity: 0.44,
        jump: -7.5,
        speed: 3.4,
        gap: 180,
        target: 10
    },

    {
        name: "DOGE",
        title: "DOGE SPACE",
        emoji: "🐶",
        sky: "#172052",
        sky2: "#5b3ca8",
        ground: "#11152f",
        obstacle: "#25245f",
        accent: "#ffe04a",
        gravity: 0.46,
        jump: -7.6,
        speed: 3.7,
        gap: 175,
        target: 12
    },

    {
        name: "TROLL",
        title: "TROLL INTERNET",
        emoji: "👹",
        sky: "#7d27c7",
        sky2: "#12e8a4",
        ground: "#26113d",
        obstacle: "#40156d",
        accent: "#51ffbd",
        gravity: 0.48,
        jump: -7.7,
        speed: 4,
        gap: 170,
        target: 14
    },

    {
        name: "67",
        title: "67 DIMENSION",
        emoji: "🗿",
        sky: "#071b35",
        sky2: "#087eaa",
        ground: "#061225",
        obstacle: "#0b3156",
        accent: "#00eaff",
        gravity: 0.50,
        jump: -7.8,
        speed: 4.3,
        gap: 165,
        target: 16
    },

    {
        name: "FINAL",
        title: "MEME UNIVERSE",
        emoji: "🚀",
        sky: "#080018",
        sky2: "#5b087d",
        ground: "#150025",
        obstacle: "#30034d",
        accent: "#ff48e8",
        gravity: 0.53,
        jump: -8,
        speed: 4.7,
        gap: 160,
        target: 20
    }
];


// ============================================================
// SAVE DATA
// ============================================================

let unlockedLevel =
    Number(localStorage.getItem("memeFlyUnlocked")) || 1;

let bestScore =
    Number(localStorage.getItem("memeFlyBest")) || 0;

let totalCoins =
    Number(localStorage.getItem("memeFlyCoins")) || 0;

bestScoreText.textContent = bestScore;
coinsText.textContent = totalCoins;


// ============================================================
// CANVAS
// ============================================================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ============================================================
// GAME VARIABLES
// ============================================================

let currentLevel = 1;

let player;
let pipes = [];
let coins = [];
let particles = [];

let score = 0;
let collectedCoins = 0;

let gameRunning = false;
let gameFinished = false;

let lastPipeTime = 0;
let animationFrame;


// ============================================================
// LEVEL MENU
// ============================================================

function createLevels() {

    const container =
        document.getElementById("levelContainer");

    container.innerHTML = "";

    worlds.forEach((world, index) => {

        const levelNumber = index + 1;

        const button =
            document.createElement("button");

        button.className = "level";

        if (levelNumber > unlockedLevel) {

            button.classList.add("locked");

            button.innerHTML = `
                <div class="number">🔒</div>
                <div class="name">LOCKED</div>
            `;

            button.disabled = true;

        } else {

            button.innerHTML = `
                <div style="font-size:34px">
                    ${world.emoji}
                </div>

                <div class="number">
                    ${levelNumber}
                </div>

                <div class="name">
                    ${world.name}
                </div>
            `;

            button.addEventListener(
                "click",
                () => startGame(levelNumber)
            );
        }

        container.appendChild(button);
    });
}

createLevels();


// ============================================================
// SCREENS
// ============================================================

function showMenu() {

    gameRunning = false;

    menu.classList.remove("hidden");
    levelsScreen.classList.add("hidden");
    game.classList.add("hidden");

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    bestScoreText.textContent = bestScore;
    coinsText.textContent = totalCoins;
}

function showLevels() {

    gameRunning = false;

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


// ============================================================
// START GAME
// ============================================================

function startGame(levelNumber) {

    currentLevel = levelNumber;

    const world =
        worlds[currentLevel - 1];

    score = 0;
    collectedCoins = 0;

    pipes = [];
    coins = [];
    particles = [];

    gameRunning = true;
    gameFinished = false;

    menu.classList.add("hidden");
    levelsScreen.classList.add("hidden");
    game.classList.remove("hidden");

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    currentLevelText.textContent =
        currentLevel;

    scoreText.textContent = score;

    gameCoinsText.textContent =
        collectedCoins;

    player = {
        x: canvas.width * 0.25,
        y: canvas.height * 0.5,
        velocity: 0,
        radius: 23
    };

    lastPipeTime =
        performance.now() - 900;

    cancelAnimationFrame(animationFrame);

    gameLoop();
}


// ============================================================
// PLAYER INPUT
// ============================================================

function jump() {

    if (!gameRunning) return;

    const world =
        worlds[currentLevel - 1];

    player.velocity =
        world.jump;

    createParticles(
        player.x,
        player.y,
        world.accent,
        6
    );
}

document.addEventListener(
    "keydown",
    event => {

        if (
            event.code === "Space" ||
            event.code === "ArrowUp"
        ) {

            event.preventDefault();

            jump();
        }
    }
);

canvas.addEventListener(
    "mousedown",
    jump
);

canvas.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        jump();

    },
    { passive: false }
);


// ============================================================
// CREATE PIPE
// ============================================================

function createPipe() {

    const world =
        worlds[currentLevel - 1];

    const minTop = 70;

    const maxTop =
        canvas.height -
        world.gap -
        130;

    const top =
        Math.random() *
        (maxTop - minTop) +
        minTop;

    pipes.push({

        x: canvas.width + 80,

        width: 78,

        top,

        bottom:
            top + world.gap,

        passed: false
    });

    coins.push({

        x:
            canvas.width + 119,

        y:
            top + world.gap / 2,

        radius: 13,

        collected: false
    });
}


// ============================================================
// UPDATE
// ============================================================

function update() {

    if (!gameRunning) return;

    const world =
        worlds[currentLevel - 1];

    // Gravity
    player.velocity +=
        world.gravity;

    player.y +=
        player.velocity;


    // Pipes
    if (
        performance.now() -
        lastPipeTime >
        1450
    ) {

        createPipe();

        lastPipeTime =
            performance.now();
    }


    // Move pipes
    pipes.forEach(pipe => {

        pipe.x -= world.speed;

        if (
            !pipe.passed &&
            pipe.x + pipe.width <
            player.x
        ) {

            pipe.passed = true;

            score++;

            scoreText.textContent =
                score;

            createParticles(
                player.x,
                player.y,
                world.accent,
                12
            );

            if (
                score >= world.target
            ) {

                completeLevel();

                return;
            }
        }
    });


    // Move coins
    coins.forEach(coin => {

        coin.x -= world.speed;

        if (
            !coin.collected &&
            distance(
                player.x,
                player.y,
                coin.x,
                coin.y
            ) <
            player.radius +
            coin.radius
        ) {

            coin.collected = true;

            collectedCoins++;

            totalCoins++;

            gameCoinsText.textContent =
                collectedCoins;

            coinsText.textContent =
                totalCoins;

            localStorage.setItem(
                "memeFlyCoins",
                totalCoins
            );

            createParticles(
                coin.x,
                coin.y,
                "#ffe600",
                15
            );
        }
    });


    // Particles
    particles.forEach(p => {

        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.08;

        p.life -= 0.025;
    });


    particles =
        particles.filter(
            p => p.life > 0
        );


    // Remove old objects
    pipes =
        pipes.filter(
            pipe =>
                pipe.x + pipe.width > -100
        );

    coins =
        coins.filter(
            coin =>
                coin.x > -50 &&
                !coin.collected
        );


    // Ceiling / ground
    if (
        player.y -
        player.radius < 0 ||
        player.y +
        player.radius >
        canvas.height
    ) {

        endGame();

        return;
    }


    // Collision
    for (const pipe of pipes) {

        const horizontal =
            player.x +
            player.radius >
            pipe.x &&
            player.x -
            player.radius <
            pipe.x +
            pipe.width;

        const vertical =
            player.y -
            player.radius <
            pipe.top ||
            player.y +
            player.radius >
            pipe.bottom;

        if (
            horizontal &&
            vertical
        ) {

            endGame();

            return;
        }
    }
}


// ============================================================
// DISTANCE
// ============================================================

function distance(
    x1,
    y1,
    x2,
    y2
) {

    const dx = x1 - x2;
    const dy = y1 - y2;

    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


// ============================================================
// PARTICLES
// ============================================================

function createParticles(
    x,
    y,
    color,
    amount
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push({

            x,
            y,

            vx:
                (Math.random() - 0.5) *
                5,

            vy:
                (Math.random() - 0.5) *
                5,

            size:
                Math.random() * 5 + 2,

            color,

            life: 1
        });
    }
}


// ============================================================
// DRAW BACKGROUND
// ============================================================

function drawBackground() {

    const world =
        worlds[currentLevel - 1];

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            0,
            canvas.height
        );

    gradient.addColorStop(
        0,
        world.sky
    );

    gradient.addColorStop(
        1,
        world.sky2
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // World-specific background
    if (currentLevel === 1) {
        drawSwamp();
    }

    if (currentLevel === 2) {
        drawCity();
    }

    if (currentLevel === 3) {
        drawSpace();
    }

    if (currentLevel === 4) {
        drawInternet();
    }

    if (currentLevel === 5) {
        drawDimension();
    }

    if (currentLevel === 6) {
        drawUniverse();
    }
}


// ============================================================
// PEPE SWAMP
// ============================================================

function drawSwamp() {

    ctx.fillStyle =
        "rgba(25,100,30,0.25)";

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const x =
            (i * 180 -
            performance.now() * 0.02) %
            canvas.width;

        ctx.beginPath();

        ctx.arc(
            x,
            canvas.height - 70,
            55,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}


// ============================================================
// SHIB CITY
// ============================================================

function drawCity() {

    ctx.fillStyle =
        "rgba(80,0,20,0.3)";

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const x =
            i * 150;

        const h =
            80 +
            (i % 4) * 35;

        ctx.fillRect(
            x,
            canvas.height - h,
            100,
            h
        );
    }

    // Lanterns
    ctx.fillStyle =
        "#ffd45a";

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        ctx.beginPath();

        ctx.arc(
            i * 150 + 60,
            100 + (i % 2) * 70,
            13,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}


// ============================================================
// DOGE SPACE
// ============================================================

function drawSpace() {

    ctx.fillStyle =
        "white";

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const x =
            (i * 137) %
            canvas.width;

        const y =
            (i * 83) %
            canvas.height;

        const size =
            (i % 3) + 1;

        ctx.fillRect(
            x,
            y,
            size,
            size
        );
    }
}


// ============================================================
// TROLL INTERNET
// ============================================================

function drawInternet() {

    ctx.strokeStyle =
        "rgba(81,255,189,0.15)";

    ctx.lineWidth = 2;

    for (
        let x = 0;
        x < canvas.width;
        x += 70
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            0
        );

        ctx.lineTo(
            x + 150,
            canvas.height
        );

        ctx.stroke();
    }
}


// ============================================================
// 67 DIMENSION
// ============================================================

function drawDimension() {

    ctx.strokeStyle =
        "rgba(0,234,255,0.25)";

    ctx.lineWidth = 1;

    const centerX =
        canvas.width / 2;

    const centerY =
        canvas.height / 2;

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const size =
            i * 90 +
            50;

        ctx.strokeRect(
            centerX - size / 2,
            centerY - size / 2,
            size,
            size
        );
    }
}


// ============================================================
// FINAL UNIVERSE
// ============================================================

function drawUniverse() {

    ctx.fillStyle =
        "rgba(255,255,255,0.8)";

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const x =
            (i * 97) %
            canvas.width;

        const y =
            (i * 61) %
            canvas.height;

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            (i % 3) + 1,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}


// ============================================================
// DRAW PIPES
// ============================================================

function drawPipes() {

    const world =
        worlds[currentLevel - 1];

    pipes.forEach(pipe => {

        ctx.fillStyle =
            world.obstacle;

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
            canvas.height -
            pipe.bottom
        );

        // Bright edges
        ctx.fillStyle =
            world.accent;

        ctx.fillRect(
            pipe.x - 7,
            pipe.top - 12,
            pipe.width + 14,
            12
        );

        ctx.fillRect(
            pipe.x - 7,
            pipe.bottom,
            pipe.width + 14,
            12
        );
    });
}


// ============================================================
// DRAW COINS
// ============================================================

function drawCoins() {

    coins.forEach(coin => {

        if (coin.collected) return;

        ctx.save();

        ctx.translate(
            coin.x,
            coin.y
        );

        const scale =
            0.85 +
            Math.sin(
                performance.now() * 0.006
            ) * 0.15;

        ctx.scale(
            scale,
            scale
        );

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            coin.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#ffe600";

        ctx.fill();

        ctx.strokeStyle =
            "#8a6500";

        ctx.lineWidth = 3;

        ctx.stroke();

        ctx.fillStyle =
            "#8a6500";

        ctx.font =
            "bold 15px Arial";

        ctx.textAlign =
            "center";

        ctx.textBaseline =
            "middle";

        ctx.fillText(
            "$",
            0,
            1
        );

        ctx.restore();
    });
}


// ============================================================
// DRAW PLAYER
// ============================================================

function drawPlayer() {

    const world =
        worlds[currentLevel - 1];

    ctx.save();

    ctx.translate(
        player.x,
        player.y
    );

    const rotation =
        Math.max(
            -0.5,
            Math.min(
                0.8,
                player.velocity * 0.06
            )
        );

    ctx.rotate(rotation);


    // Body
    ctx.beginPath();

    ctx.arc(
        0,
        0,
        player.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        "white";

    ctx.fill();

    ctx.strokeStyle =
        "#111";

    ctx.lineWidth = 4;

    ctx.stroke();


    // Meme face
    ctx.font =
        "30px Arial";

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";

    ctx.fillText(
        world.emoji,
        0,
        2
    );


    // Wing
    ctx.beginPath();

    ctx.ellipse(
        -15,
        8,
        12,
        7,
        -0.3,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        world.accent;

    ctx.fill();

    ctx.stroke();


    ctx.restore();
}


// ============================================================
// DRAW PARTICLES
// ============================================================

function drawParticles() {

    particles.forEach(p => {

        ctx.globalAlpha =
            p.life;

        ctx.fillStyle =
            p.color;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    });

    ctx.globalAlpha = 1;
}


// ============================================================
// DRAW EVERYTHING
// ============================================================

function draw() {

    drawBackground();

    drawPipes();

    drawCoins();

    drawParticles();

    drawPlayer();
}


// ============================================================
// GAME LOOP
// ============================================================

function gameLoop() {

    update();

    draw();

    if (gameRunning) {

        animationFrame =
            requestAnimationFrame(
                gameLoop
            );
    }
}


// ============================================================
// GAME OVER
// ============================================================

function endGame() {

    if (gameFinished) return;

    gameFinished = true;
    gameRunning = false;

    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "memeFlyBest",
            bestScore
        );
    }

    finalScore.textContent =
        score;

    gameOver.classList.remove(
        "hidden"
    );
}


// ============================================================
// LEVEL COMPLETE
// ============================================================

function completeLevel() {

    if (gameFinished) return;

    gameFinished = true;
    gameRunning = false;

    completeScore.textContent =
        score;


    // Unlock next world
    if (
        currentLevel >= unlockedLevel &&
        currentLevel < worlds.length
    ) {

        unlockedLevel =
            currentLevel + 1;

        localStorage.setItem(
            "memeFlyUnlocked",
            unlockedLevel
        );
    }


    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "memeFlyBest",
            bestScore
        );
    }


    if (
        currentLevel <
        worlds.length
    ) {

        nextBtn.classList.remove(
            "hidden"
        );

    } else {

        nextBtn.classList.add(
            "hidden"
        );
    }


    levelComplete.classList.remove(
        "hidden"
    );
}


// ============================================================
// NEXT WORLD
// ============================================================

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentLevel <
            worlds.length
        ) {

            startGame(
                currentLevel + 1
            );
        }
    }
);


// ============================================================
// START
// ============================================================

showMenu();
