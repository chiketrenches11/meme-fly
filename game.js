// ============================================================
// MEME FLY
// Cada nível = uma skin/personagem diferente
// Cada nível só desbloqueia depois de completar o anterior
// ============================================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// ============================================================
// ELEMENTOS HTML
// ============================================================

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
// MUNDOS
// ============================================================

const worlds = [

    {
        name: "PEPE",
        title: "PEPE SWAMP",

        skin: "pepe",

        sky1: "#8ee86b",
        sky2: "#2b9c50",

        ground: "#194d2a",
        obstacle: "#14552d",
        obstacleLight: "#2e8b45",

        accent: "#62ff70",

        gravity: 0.42,
        jump: -7.5,
        speed: 3.2,
        gap: 190,

        target: 8
    },


    {
        name: "SHIB",
        title: "SHIB CITY",

        skin: "shib",

        sky1: "#ff5b55",
        sky2: "#ffb58e",

        ground: "#641c29",
        obstacle: "#8d2031",
        obstacleLight: "#d33d4b",

        accent: "#fff0d0",

        gravity: 0.44,
        jump: -7.6,
        speed: 3.5,
        gap: 185,

        target: 10
    },


    {
        name: "DOGE",
        title: "DOGE SPACE",

        skin: "doge",

        sky1: "#101942",
        sky2: "#503d91",

        ground: "#101329",
        obstacle: "#27276b",
        obstacleLight: "#4848a5",

        accent: "#ffe044",

        gravity: 0.46,
        jump: -7.7,
        speed: 3.8,
        gap: 180,

        target: 12
    },


    {
        name: "TROLL",
        title: "TROLL INTERNET",

        skin: "troll",

        sky1: "#7124bd",
        sky2: "#0acb9b",

        ground: "#21102f",
        obstacle: "#42126d",
        obstacleLight: "#7c28a8",

        accent: "#50ffb5",

        gravity: 0.48,
        jump: -7.8,
        speed: 4.1,
        gap: 175,

        target: 14
    },


    {
        name: "67",
        title: "67 DIMENSION",

        skin: "sixtyseven",

        sky1: "#06152e",
        sky2: "#087da8",

        ground: "#06101e",
        obstacle: "#0a3155",
        obstacleLight: "#0b6388",

        accent: "#00eaff",

        gravity: 0.50,
        jump: -7.9,
        speed: 4.4,
        gap: 170,

        target: 16
    },


    {
        name: "WIF",
        title: "WIF UNIVERSE",

        skin: "wif",

        sky1: "#32105f",
        sky2: "#c84b88",

        ground: "#21102e",
        obstacle: "#4b174f",
        obstacleLight: "#9b337d",

        accent: "#ffcb55",

        gravity: 0.53,
        jump: -8.1,
        speed: 4.7,
        gap: 165,

        target: 20
    }

];


// ============================================================
// PROGRESSO
// ============================================================

// IMPORTANTE:
// Só o nível 1 começa desbloqueado.

let unlockedLevel =
    Number(localStorage.getItem("memeFlyUnlocked")) || 1;

if (unlockedLevel < 1) {
    unlockedLevel = 1;
}

if (unlockedLevel > worlds.length) {
    unlockedLevel = worlds.length;
}


let bestScore =
    Number(localStorage.getItem("memeFlyBest")) || 0;

let totalCoins =
    Number(localStorage.getItem("memeFlyCoins")) || 0;


// ============================================================
// CANVAS
// ============================================================

let W = window.innerWidth;
let H = window.innerHeight;

function resizeCanvas() {

    W = window.innerWidth;
    H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


// ============================================================
// VARIÁVEIS DO JOGO
// ============================================================

let currentLevel = 1;

let player = null;

let pipes = [];
let coins = [];
let particles = [];

let score = 0;
let collectedCoins = 0;

let gameRunning = false;
let gameFinished = false;

let lastPipeTime = 0;

let animationFrame = null;


// ============================================================
// ATUALIZAR MENU
// ============================================================

function updateMenuStats() {

    bestScoreText.textContent =
        bestScore;

    coinsText.textContent =
        totalCoins;
}

updateMenuStats();


// ============================================================
// MENU DE NÍVEIS
// ============================================================

function createLevels() {

    const container =
        document.getElementById(
            "levelContainer"
        );

    container.innerHTML = "";


    worlds.forEach(
        (world, index) => {

            const levelNumber =
                index + 1;

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "level";


            // --------------------------------------------
            // NÍVEL BLOQUEADO
            // --------------------------------------------

            if (
                levelNumber >
                unlockedLevel
            ) {

                button.classList.add(
                    "locked"
                );

                button.innerHTML = `

                    <div
                        class="number"
                        style="font-size:42px"
                    >
                        🔒
                    </div>

                    <div class="name">
                        LOCKED
                    </div>

                `;

                button.disabled = true;
            }


            // --------------------------------------------
            // NÍVEL DESBLOQUEADO
            // --------------------------------------------

            else {

                button.innerHTML = `

                    <div
                        class="number"
                        style="
                            font-size:42px;
                            line-height:1;
                        "
                    >
                        ${worldIcon(world)}
                    </div>

                    <div
                        class="number"
                        style="
                            font-size:22px;
                            margin-top:4px;
                        "
                    >
                        ${levelNumber}
                    </div>

                    <div class="name">
                        ${world.name}
                    </div>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        startGame(
                            levelNumber
                        );

                    }
                );
            }


            container.appendChild(
                button
            );
        }
    );
}


// ============================================================
// ÍCONES DOS MUNDOS
// ============================================================

function worldIcon(world) {

    if (world.skin === "pepe")
        return "🐸";

    if (world.skin === "shib")
        return "🐕";

    if (world.skin === "doge")
        return "🐶";

    if (world.skin === "troll")
        return "👹";

    if (world.skin === "sixtyseven")
        return "🗿";

    if (world.skin === "wif")
        return "🐶";

    return "🚀";
}


createLevels();


// ============================================================
// ECRÃS
// ============================================================

function showMenu() {

    gameRunning = false;

    cancelAnimationFrame(
        animationFrame
    );

    menu.classList.remove(
        "hidden"
    );

    levelsScreen.classList.add(
        "hidden"
    );

    game.classList.add(
        "hidden"
    );

    gameOver.classList.add(
        "hidden"
    );

    levelComplete.classList.add(
        "hidden"
    );

    updateMenuStats();
}


function showLevels() {

    gameRunning = false;

    cancelAnimationFrame(
        animationFrame
    );

    menu.classList.add(
        "hidden"
    );

    levelsScreen.classList.remove(
        "hidden"
    );

    game.classList.add(
        "hidden"
    );

    gameOver.classList.add(
        "hidden"
    );

    levelComplete.classList.add(
        "hidden"
    );

    createLevels();
}


// ============================================================
// BOTÕES
// ============================================================

playBtn.addEventListener(
    "click",
    () => {

        startGame(
            unlockedLevel
        );

    }
);


levelsBtn.addEventListener(
    "click",
    showLevels
);


backBtn.addEventListener(
    "click",
    showMenu
);


menuBtn.addEventListener(
    "click",
    showMenu
);


levelsBtn2.addEventListener(
    "click",
    showLevels
);


retryBtn.addEventListener(
    "click",
    () => {

        startGame(
            currentLevel
        );

    }
);


// ============================================================
// COMEÇAR JOGO
// ============================================================

function startGame(levelNumber) {

    // --------------------------------------------
    // SEGURANÇA
    // Não deixa jogar níveis bloqueados.
    // --------------------------------------------

    if (
        levelNumber >
        unlockedLevel
    ) {

        levelNumber =
            unlockedLevel;
    }


    currentLevel =
        levelNumber;


    const world =
        worlds[
            currentLevel - 1
        ];


    score = 0;

    collectedCoins = 0;

    pipes = [];

    coins = [];

    particles = [];


    gameRunning = true;

    gameFinished = false;


    menu.classList.add(
        "hidden"
    );

    levelsScreen.classList.add(
        "hidden"
    );

    game.classList.remove(
        "hidden"
    );


    gameOver.classList.add(
        "hidden"
    );

    levelComplete.classList.add(
        "hidden"
    );


    currentLevelText.textContent =
        currentLevel;

    scoreText.textContent =
        score;

    gameCoinsText.textContent =
        collectedCoins;


    resizeCanvas();


    // --------------------------------------------
    // PERSONAGEM
    // --------------------------------------------

    player = {

        x: W * 0.25,

        y: H * 0.5,

        velocity: 0,

        size: 58,

        rotation: 0
    };


    lastPipeTime =
        performance.now() - 900;


    cancelAnimationFrame(
        animationFrame
    );


    gameLoop();
}


// ============================================================
// JUMP
// ============================================================

function jump() {

    if (!gameRunning)
        return;


    const world =
        worlds[
            currentLevel - 1
        ];


    player.velocity =
        world.jump;


    createParticles(
        player.x - 15,
        player.y + 15,
        world.accent,
        7
    );
}


// ============================================================
// CONTROLOS
// ============================================================

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
    {
        passive: false
    }
);


// ============================================================
// CRIAR OBSTÁCULO
// ============================================================

function createPipe() {

    const world =
        worlds[
            currentLevel - 1
        ];


    const minTop = 70;


    const maxTop =
        H -
        world.gap -
        120;


    const top =
        Math.random() *
        (maxTop - minTop) +
        minTop;


    pipes.push({

        x: W + 80,

        width: 82,

        top: top,

        bottom:
            top +
            world.gap,

        passed: false
    });


    // Moeda no meio do obstáculo

    coins.push({

        x:
            W +
            121,

        y:
            top +
            world.gap / 2,

        radius: 14,

        collected: false
    });
}


// ============================================================
// UPDATE
// ============================================================

function update() {

    if (!gameRunning)
        return;


    const world =
        worlds[
            currentLevel - 1
        ];


    // --------------------------------------------
    // GRAVIDADE
    // --------------------------------------------

    player.velocity +=
        world.gravity;

    player.y +=
        player.velocity;


    player.rotation =
        Math.max(
            -0.45,
            Math.min(
                0.8,
                player.velocity * 0.055
            )
        );


    // --------------------------------------------
    // CRIAR OBSTÁCULOS
    // --------------------------------------------

    if (
        performance.now() -
        lastPipeTime >
        1450
    ) {

        createPipe();

        lastPipeTime =
            performance.now();
    }


    // --------------------------------------------
    // MOVER OBSTÁCULOS
    // --------------------------------------------

    pipes.forEach(
        pipe => {

            pipe.x -=
                world.speed;


            if (
                !pipe.passed &&
                pipe.x +
                    pipe.width <
                    player.x
            ) {

                pipe.passed =
                    true;

                score++;


                scoreText.textContent =
                    score;


                createParticles(
                    player.x,
                    player.y,
                    world.accent,
                    12
                );


                // --------------------------------
                // TERMINOU O NÍVEL
                // --------------------------------

                if (
                    score >=
                    world.target
                ) {

                    completeLevel();

                }
            }
        }
    );


    // --------------------------------------------
    // MOEDAS
    // --------------------------------------------

    coins.forEach(
        coin => {

            coin.x -=
                world.speed;


            if (
                !coin.collected &&
                distance(
                    player.x,
                    player.y,
                    coin.x,
                    coin.y
                ) <
                    35
            ) {

                coin.collected =
                    true;


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
                    18
                );
            }
        }
    );


    // --------------------------------------------
    // PARTÍCULAS
    // --------------------------------------------

    particles.forEach(
        particle => {

            particle.x +=
                particle.vx;

            particle.y +=
                particle.vy;

            particle.vy +=
                0.08;

            particle.life -=
                0.025;
        }
    );


    particles =
        particles.filter(
            particle =>
                particle.life > 0
        );


    // --------------------------------------------
    // REMOVER OBJETOS
    // --------------------------------------------

    pipes =
        pipes.filter(
            pipe =>
                pipe.x +
                    pipe.width >
                -100
        );


    coins =
        coins.filter(
            coin =>
                coin.x >
                    -50 &&
                !coin.collected
        );


    // --------------------------------------------
    // PAREDES
    // --------------------------------------------

    if (
        player.y -
            player.size / 2 <
            0 ||
        player.y +
            player.size / 2 >
            H
    ) {

        endGame();

        return;
    }


    // --------------------------------------------
    // COLISÕES
    // --------------------------------------------

    for (
        const pipe of pipes
    ) {

        const horizontal =
            player.x +
                player.size / 2 >
                pipe.x &&
            player.x -
                player.size / 2 <
                pipe.x +
                    pipe.width;


        const vertical =
            player.y -
                player.size / 2 <
                pipe.top ||
            player.y +
                player.size / 2 >
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
// DISTÂNCIA
// ============================================================

function distance(
    x1,
    y1,
    x2,
    y2
) {

    const dx =
        x1 - x2;

    const dy =
        y1 - y2;

    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


// ============================================================
// PARTÍCULAS
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

            x: x,

            y: y,

            vx:
                (Math.random() - 0.5) *
                5,

            vy:
                (Math.random() - 0.5) *
                5,

            size:
                Math.random() *
                    5 +
                2,

            color: color,

            life: 1
        });
    }
}


// ============================================================
// BACKGROUND
// ============================================================

function drawBackground() {

    const world =
        worlds[
            currentLevel - 1
        ];


    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            0,
            H
        );


    gradient.addColorStop(
        0,
        world.sky1
    );


    gradient.addColorStop(
        1,
        world.sky2
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        W,
        H
    );


    if (
        currentLevel === 1
    ) {

        drawPepeBackground();

    } else if (
        currentLevel === 2
    ) {

        drawShibBackground();

    } else if (
        currentLevel === 3
    ) {

        drawDogeBackground();

    } else if (
        currentLevel === 4
    ) {

        drawTrollBackground();

    } else if (
        currentLevel === 5
    ) {

        draw67Background();

    } else if (
        currentLevel === 6
    ) {

        drawWifBackground();
    }
}


// ============================================================
// PEPE BACKGROUND
// ============================================================

function drawPepeBackground() {

    // Sol

    ctx.fillStyle =
        "rgba(255,240,100,0.65)";

    ctx.beginPath();

    ctx.arc(
        W * 0.8,
        H * 0.18,
        55,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Folhas

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const x =
            i * 120;

        const y =
            H -
            90 -
            (i % 3) * 35;


        ctx.fillStyle =
            "rgba(15,90,40,0.5)";


        ctx.beginPath();

        ctx.ellipse(
            x,
            y,
            45,
            18,
            -0.3,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }


    // Água

    ctx.fillStyle =
        "rgba(20,120,120,0.25)";

    ctx.fillRect(
        0,
        H - 100,
        W,
        100
    );
}


// ============================================================
// SHIB BACKGROUND
// ============================================================

function drawShibBackground() {

    // Sol vermelho

    ctx.fillStyle =
        "rgba(255,240,210,0.85)";

    ctx.beginPath();

    ctx.arc(
        W * 0.5,
        H * 0.25,
        85,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Prédios

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const x =
            i * 130;

        const height =
            100 +
            (i % 4) * 45;


        ctx.fillStyle =
            "rgba(90,15,35,0.45)";


        ctx.fillRect(
            x,
            H - height,
            100,
            height
        );


        // Janelas

        ctx.fillStyle =
            "rgba(255,220,130,0.5)";


        for (
            let y =
                H -
                height +
                20;

            y <
                H - 15;

            y += 30
        ) {

            ctx.fillRect(
                x + 15,
                y,
                12,
                12
            );

            ctx.fillRect(
                x + 55,
                y,
                12,
                12
            );
        }
    }


    // Lanternas

    ctx.fillStyle =
        "#ffd45b";


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        ctx.beginPath();

        ctx.arc(
            i * 170 + 60,
            90 +
                (i % 2) *
                    80,
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

function drawDogeBackground() {

    // Estrelas

    ctx.fillStyle =
        "white";


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const x =
            (i * 137) %
            W;

        const y =
            (i * 83) %
            H;

        const size =
            (i % 3) + 1;


        ctx.globalAlpha =
            0.4 +
            (i % 5) *
                0.1;


        ctx.fillRect(
            x,
            y,
            size,
            size
        );
    }


    ctx.globalAlpha = 1;


    // Planeta

    ctx.fillStyle =
        "rgba(255,220,80,0.8)";

    ctx.beginPath();

    ctx.arc(
        W * 0.78,
        H * 0.25,
        65,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Lua

    ctx.fillStyle =
        "rgba(190,190,255,0.7)";

    ctx.beginPath();

    ctx.arc(
        W * 0.18,
        H * 0.2,
        35,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// ============================================================
// TROLL BACKGROUND
// ============================================================

function drawTrollBackground() {

    ctx.strokeStyle =
        "rgba(80,255,190,0.18)";

    ctx.lineWidth = 2;


    // Grid vertical

    for (
        let x = 0;
        x < W;
        x += 70
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            0
        );

        ctx.lineTo(
            x,
            H
        );

        ctx.stroke();
    }


    // Grid horizontal

    for (
        let y = 0;
        y < H;
        y += 70
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            y
        );

        ctx.lineTo(
            W,
            y
        );

        ctx.stroke();
    }


    // Glitches

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        ctx.fillStyle =
            i % 2 === 0
                ? "rgba(255,50,220,0.3)"
                : "rgba(0,255,180,0.3)";


        ctx.fillRect(
            Math.random() * W,
            Math.random() * H,
            30 +
                Math.random() * 80,
            3
        );
    }
}


// ============================================================
// 67 BACKGROUND
// ============================================================

function draw67Background() {

    ctx.strokeStyle =
        "rgba(0,234,255,0.25)";

    ctx.lineWidth = 2;


    const centerX =
        W / 2;

    const centerY =
        H / 2;


    // Dimensões

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const size =
            i * 100 +
            80;


        ctx.strokeRect(
            centerX -
                size / 2,
            centerY -
                size / 2,
            size,
            size
        );
    }


    // Linhas de velocidade

    ctx.strokeStyle =
        "rgba(0,220,255,0.15)";


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const y =
            i * 70;


        ctx.beginPath();

        ctx.moveTo(
            0,
            y
        );

        ctx.lineTo(
            W,
            y
        );

        ctx.stroke();
    }
}


// ============================================================
// WIF BACKGROUND
// ============================================================

function drawWifBackground() {

    // Estrelas

    ctx.fillStyle =
        "rgba(255,255,255,0.8)";


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const x =
            (i * 113) %
            W;

        const y =
            (i * 67) %
            H;


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


    // Luas/planetas

    ctx.fillStyle =
        "rgba(255,203,85,0.75)";

    ctx.beginPath();

    ctx.arc(
        W * 0.78,
        H * 0.18,
        75,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "rgba(255,100,210,0.4)";

    ctx.beginPath();

    ctx.arc(
        W * 0.15,
        H * 0.7,
        90,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// ============================================================
// OBSTÁCULOS
// ============================================================

function drawPipes() {

    const world =
        worlds[
            currentLevel - 1
        ];


    pipes.forEach(
        pipe => {

            // Corpo

            ctx.fillStyle =
                world.obstacle;


            ctx.fillRect(
                pipe.x,
                0,
                pipe.width,
                pipe.top
            );


            ctx.fillRect(
                pipe.x,
                pipe.bottom,
                pipe.width,
                H -
                    pipe.bottom
            );


            // Borda brilhante

            ctx.fillStyle =
                world.obstacleLight;


            ctx.fillRect(
                pipe.x - 7,
                pipe.top - 14,
                pipe.width + 14,
                14
            );


            ctx.fillRect(
                pipe.x - 7,
                pipe.bottom,
                pipe.width + 14,
                14
            );


            // Detalhes

            ctx.fillStyle =
                world.accent;


            ctx.globalAlpha =
                0.5;


            ctx.fillRect(
                pipe.x + 10,
                0,
                5,
                pipe.top
            );


            ctx.fillRect(
                pipe.x + 10,
                pipe.bottom,
                5,
                H -
                    pipe.bottom
            );


            ctx.globalAlpha = 1;
        }
    );
}


// ============================================================
// MOEDAS
// ============================================================

function drawCoins() {

    coins.forEach(
        coin => {

            if (
                coin.collected
            )
                return;


            ctx.save();


            ctx.translate(
                coin.x,
                coin.y
            );


            const pulse =
                0.9 +
                Math.sin(
                    performance.now() *
                        0.008
                ) *
                    0.1;


            ctx.scale(
                pulse,
                pulse
            );


            // Glow

            ctx.shadowBlur =
                18;

            ctx.shadowColor =
                "#ffe600";


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


            ctx.shadowBlur = 0;


            ctx.strokeStyle =
                "#8a6500";

            ctx.lineWidth = 3;

            ctx.stroke();


            ctx.fillStyle =
                "#8a6500";

            ctx.font =
                "bold 16px Arial";

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
        }
    );
}


// ============================================================
// DESENHAR PERSONAGEM
// ============================================================

function drawPlayer() {

    if (!player)
        return;


    ctx.save();


    ctx.translate(
        player.x,
        player.y
    );


    ctx.rotate(
        player.rotation
    );


    const world =
        worlds[
            currentLevel - 1
        ];


    // Cada skin é completamente diferente

    if (
        world.skin ===
        "pepe"
    ) {

        drawPepe();

    } else if (
        world.skin ===
        "shib"
    ) {

        drawShib();

    } else if (
        world.skin ===
        "doge"
    ) {

        drawDoge();

    } else if (
        world.skin ===
        "troll"
    ) {

        drawTroll();

    } else if (
        world.skin ===
        "sixtyseven"
    ) {

        draw67();

    } else if (
        world.skin ===
        "wif"
    ) {

        drawWif();
    }


    ctx.restore();
}


// ============================================================
// PEPE SKIN
// ============================================================

function drawPepe() {

    // Corpo verde

    ctx.fillStyle =
        "#62b44b";

    ctx.beginPath();

    ctx.ellipse(
        0,
        5,
        27,
        24,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Cabeça

    ctx.fillStyle =
        "#76c957";

    ctx.beginPath();

    ctx.arc(
        0,
        -5,
        25,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Olhos

    ctx.fillStyle =
        "#dff5d8";


    ctx.beginPath();

    ctx.arc(
        -9,
        -14,
        9,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -14,
        9,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "#111";


    ctx.beginPath();

    ctx.arc(
        -9,
        -14,
        4,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -14,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Boca Pepe

    ctx.fillStyle =
        "#301c18";

    ctx.beginPath();

    ctx.ellipse(
        0,
        8,
        16,
        8,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Língua

    ctx.fillStyle =
        "#e87979";

    ctx.beginPath();

    ctx.ellipse(
        0,
        11,
        8,
        4,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Asa

    ctx.fillStyle =
        "#4f9e40";

    ctx.beginPath();

    ctx.ellipse(
        -23,
        12,
        11,
        7,
        -0.3,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// ============================================================
// SHIB SKIN
// ============================================================

function drawShib() {

    // Corpo

    ctx.fillStyle =
        "#d77b32";

    ctx.beginPath();

    ctx.ellipse(
        0,
        6,
        27,
        22,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Cabeça

    ctx.fillStyle =
        "#e28a3b";

    ctx.beginPath();

    ctx.arc(
        0,
        -5,
        25,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Orelhas

    ctx.fillStyle =
        "#d36f2e";

    ctx.beginPath();

    ctx.moveTo(
        -20,
        -18
    );

    ctx.lineTo(
        -22,
        -38
    );

    ctx.lineTo(
        -8,
        -25
    );

    ctx.fill();


    ctx.beginPath();

    ctx.moveTo(
        20,
        -18
    );

    ctx.lineTo(
        22,
        -38
    );

    ctx.lineTo(
        8,
        -25
    );

    ctx.fill();


    // Focinho

    ctx.fillStyle =
        "#fff0d2";

    ctx.beginPath();

    ctx.ellipse(
        0,
        5,
        16,
        12,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Olhos

    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        -9,
        -10,
        3.5,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -10,
        3.5,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Nariz

    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        0,
        3,
        5,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Boca

    ctx.strokeStyle =
        "#111";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.arc(
        0,
        5,
        7,
        0,
        Math.PI
    );

    ctx.stroke();


    // Asa

    ctx.fillStyle =
        "#b96329";

    ctx.beginPath();

    ctx.ellipse(
        -23,
        13,
        11,
        7,
        -0.3,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


// ============================================================
// DOGE SKIN
// ============================================================

function drawDoge() {

    // Pescoço

    ctx.fillStyle =
        "#d49b55";

    ctx.fillRect(
        -9,
        15,
        18,
        15
    );


    // Cabeça

    ctx.fillStyle =
        "#dba45b";

    ctx.beginPath();

    ctx.ellipse(
        0,
        -2,
        25,
        30,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Orelhas

    ctx.fillStyle =
        "#b8793c";

    ctx.beginPath();

    ctx.moveTo(
        -18,
        -18
    );

    ctx.lineTo(
        -29,
        -35
    );

    ctx.lineTo(
        -8,
        -27
    );

    ctx.fill();


    ctx.beginPath();

    ctx.moveTo(
        18,
        -18
    );

    ctx.lineTo(
        29,
        -35
    );

    ctx.lineTo(
        8,
        -27
    );

    ctx.fill();


    // Focinho

    ctx.fillStyle =
        "#f0c47b";

    ctx.beginPath();

    ctx.ellipse(
        0,
        8,
        16,
        12,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Olhos

    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        -9,
        -8,
        4,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -8,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Nariz

    ctx.beginPath();

    ctx.arc(
        0,
        4,
        5,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Boca

    ctx.strokeStyle =
        "#111";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
        0,
        8
    );

    ctx.lineTo(
        0,
        13
    );

    ctx.stroke();


    // Coleira

    ctx.fillStyle =
        "#e44a38";

    ctx.fillRect(
        -18,
        17,
        36,
        6
    );
}


// ============================================================
// TROLL SKIN
// ============================================================

function drawTroll() {

    // Corpo

    ctx.fillStyle =
        "#3dbb62";

    ctx.beginPath();

    ctx.ellipse(
        0,
        8,
        25,
        23,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Cabeça

    ctx.fillStyle =
        "#52d873";

    ctx.beginPath();

    ctx.ellipse(
        0,
        -5,
        26,
        29,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Cabelo troll

    ctx.fillStyle =
        "#35a853";

    ctx.beginPath();

    ctx.moveTo(
        -24,
        -18
    );

    for (
        let i = -24;
        i <= 24;
        i += 8
    ) {

        ctx.lineTo(
            i,
            -38 -
                Math.abs(i % 16)
        );
    }

    ctx.lineTo(
        24,
        -15
    );

    ctx.fill();


    // Olhos

    ctx.fillStyle =
        "white";

    ctx.beginPath();

    ctx.ellipse(
        -9,
        -7,
        8,
        11,
        0,
        0,
        Math.PI * 2
    );

    ctx.ellipse(
        9,
        -7,
        8,
        11,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        -9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Nariz

    ctx.fillStyle =
        "#2f8e4c";

    ctx.beginPath();

    ctx.arc(
        0,
        3,
        6,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Sorriso

    ctx.fillStyle =
        "#25152b";

    ctx.beginPath();

    ctx.ellipse(
        0,
        13,
        18,
        9,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Dentes

    ctx.fillStyle =
        "white";

    ctx.fillRect(
        -10,
        9,
        7,
        5
    );

    ctx.fillRect(
        3,
        9,
        7,
        5
    );
}


// ============================================================
// 67 SKIN
// ============================================================

function draw67() {

    // Corpo futurista

    ctx.fillStyle =
        "#16b8d4";

    ctx.beginPath();

    ctx.roundRect(
        -25,
        -24,
        50,
        50,
        14
    );

    ctx.fill();


    // Face

    ctx.fillStyle =
        "#071b35";

    ctx.beginPath();

    ctx.roundRect(
        -19,
        -15,
        38,
        27,
        9
    );

    ctx.fill();


    // Olhos digitais

    ctx.fillStyle =
        "#00eaff";

    ctx.fillRect(
        -13,
        -8,
        8,
        5
    );

    ctx.fillRect(
        5,
        -8,
        8,
        5
    );


    // Boca

    ctx.fillRect(
        -10,
        4,
        20,
        4
    );


    // Linhas neon

    ctx.strokeStyle =
        "#00eaff";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
        -18,
        -24
    );

    ctx.lineTo(
        -10,
        -32
    );

    ctx.lineTo(
        10,
        -32
    );

    ctx.lineTo(
        18,
        -24
    );

    ctx.stroke();


    // Asa

    ctx.fillStyle =
        "#087da8";

    ctx.beginPath();

    ctx.moveTo(
        -20,
        5
    );

    ctx.lineTo(
        -39,
        15
    );

    ctx.lineTo(
        -20,
        20
    );

    ctx.fill();
}


// ============================================================
// WIF SKIN
// ============================================================

function drawWif() {

    // Corpo do cão

    ctx.fillStyle =
        "#d89b55";

    ctx.beginPath();

    ctx.ellipse(
        0,
        8,
        26,
        22,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Cabeça

    ctx.fillStyle =
        "#e5aa61";

    ctx.beginPath();

    ctx.ellipse(
        0,
        -5,
        25,
        27,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Orelhas

    ctx.fillStyle =
        "#c98242";

    ctx.beginPath();

    ctx.moveTo(
        -17,
        -19
    );

    ctx.lineTo(
        -26,
        -34
    );

    ctx.lineTo(
        -6,
        -27
    );

    ctx.fill();


    ctx.beginPath();

    ctx.moveTo(
        17,
        -19
    );

    ctx.lineTo(
        26,
        -34
    );

    ctx.lineTo(
        6,
        -27
    );

    ctx.fill();


    // CHAPÉU WIF

    ctx.fillStyle =
        "#ead9bd";

    ctx.beginPath();

    ctx.moveTo(
        -24,
        -25
    );

    ctx.lineTo(
        0,
        -38
    );

    ctx.lineTo(
        24,
        -25
    );

    ctx.lineTo(
        20,
        -18
    );

    ctx.lineTo(
        -20,
        -18
    );

    ctx.closePath();

    ctx.fill();


    // Aba

    ctx.fillStyle =
        "#d2bfa3";

    ctx.beginPath();

    ctx.ellipse(
        0,
        -18,
        29,
        7,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Olhos

    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        -9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    ctx.arc(
        9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Focinho

    ctx.fillStyle =
        "#f0c27b";

    ctx.beginPath();

    ctx.ellipse(
        0,
        7,
        14,
        10,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Nariz

    ctx.fillStyle =
        "#111";

    ctx.beginPath();

    ctx.arc(
        0,
        5,
        4,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // Coleira

    ctx.fillStyle =
        "#ffcb55";

    ctx.fillRect(
        -18,
        17,
        36,
        6
    );
}


// ============================================================
// PARTÍCULAS
// ============================================================

function drawParticles() {

    particles.forEach(
        particle => {

            ctx.globalAlpha =
                particle.life;

            ctx.fillStyle =
                particle.color;


            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    );


    ctx.globalAlpha = 1;
}


// ============================================================
// TEXTO DO MUNDO
// ============================================================

function drawWorldTitle() {

    const world =
        worlds[
            currentLevel - 1
        ];


    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.font =
        "900 24px Arial";


    ctx.lineWidth = 5;

    ctx.strokeStyle =
        "rgba(0,0,0,0.6)";

    ctx.strokeText(
        world.title,
        W / 2,
        H - 35
    );


    ctx.fillStyle =
        "white";

    ctx.fillText(
        world.title,
        W / 2,
        H - 35
    );
}


// ============================================================
// PROGRESSO
// ============================================================

function drawProgress() {

    const world =
        worlds[
            currentLevel - 1
        ];


    const width =
        Math.min(
            300,
            W * 0.45
        );


    const height = 8;


    const x =
        W / 2 -
        width / 2;


    const y = 72;


    // Fundo

    ctx.fillStyle =
        "rgba(0,0,0,0.4)";


    ctx.fillRect(
        x,
        y,
        width,
        height
    );


    // Progresso

    const progress =
        Math.min(
            score /
                world.target,
            1
        );


    ctx.fillStyle =
        world.accent;


    ctx.fillRect(
        x,
        y,
        width * progress,
        height
    );
}


// ============================================================
// DRAW
// ============================================================

function draw() {

    drawBackground();

    drawPipes();

    drawCoins();

    drawParticles();

    drawPlayer();

    drawProgress();

    drawWorldTitle();
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

    if (gameFinished)
        return;


    gameFinished = true;

    gameRunning = false;


    if (
        score >
        bestScore
    ) {

        bestScore =
            score;


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


    updateMenuStats();
}


// ============================================================
// COMPLETAR NÍVEL
// ============================================================

function completeLevel() {

    if (gameFinished)
        return;


    gameFinished = true;

    gameRunning = false;


    completeScore.textContent =
        score;


    // --------------------------------------------
    // DESBLOQUEAR APENAS O PRÓXIMO
    // --------------------------------------------

    if (
        currentLevel ===
        unlockedLevel &&
        currentLevel <
        worlds.length
    ) {

        unlockedLevel =
            currentLevel + 1;


        localStorage.setItem(
            "memeFlyUnlocked",
            unlockedLevel
        );
    }


    // Melhor score

    if (
        score >
        bestScore
    ) {

        bestScore =
            score;


        localStorage.setItem(
            "memeFlyBest",
            bestScore
        );
    }


    // --------------------------------------------
    // BOTÃO NEXT
    // --------------------------------------------

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


    updateMenuStats();
}


// ============================================================
// NEXT WORLD
// ============================================================

nextBtn.addEventListener(
    "click",
    () => {

        // Segurança adicional

        if (
            currentLevel <
            unlockedLevel
        ) {

            startGame(
                currentLevel + 1
            );
        }

    }
);


// ============================================================
// COMEÇAR NO MENU
// ============================================================

showMenu();
