```javascript
// ============================================================
// MEME FLY
// WORLDS + SHOP + CLOSET + MISSIONS
// ============================================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// ============================================================
// HTML
// ============================================================

const menu = document.getElementById("menu");
const levelsScreen = document.getElementById("levelsScreen");
const shopScreen = document.getElementById("shopScreen");
const closetScreen = document.getElementById("closetScreen");
const missionsScreen = document.getElementById("missionsScreen");
const game = document.getElementById("game");

const playBtn = document.getElementById("playBtn");
const levelsBtn = document.getElementById("levelsBtn");
const shopBtn = document.getElementById("shopBtn");
const closetBtn = document.getElementById("closetBtn");
const missionsBtn = document.getElementById("missionsBtn");

const backBtn = document.getElementById("backBtn");
const shopBackBtn = document.getElementById("shopBackBtn");
const closetBackBtn = document.getElementById("closetBackBtn");
const missionsBackBtn = document.getElementById("missionsBackBtn");

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
// SHOP ITEMS
// ============================================================

const accessories = [

    {
        id: "sunglasses",
        name: "SUNGLASSES",
        icon: "🕶️",
        price: 100,
        type: "face"
    },

    {
        id: "crown",
        name: "GOLD CROWN",
        icon: "👑",
        price: 250,
        type: "head"
    },

    {
        id: "tophat",
        name: "TOP HAT",
        icon: "🎩",
        price: 400,
        type: "head"
    },

    {
        id: "chain",
        name: "DIAMOND CHAIN",
        icon: "💎",
        price: 600,
        type: "body"
    },

    {
        id: "fire",
        name: "FIRE AURA",
        icon: "🔥",
        price: 800,
        type: "trail"
    },

    {
        id: "lightning",
        name: "LIGHTNING TRAIL",
        icon: "⚡",
        price: 1000,
        type: "trail"
    },

    {
        id: "rainbow",
        name: "RAINBOW TRAIL",
        icon: "🌈",
        price: 1500,
        type: "trail"
    },

    {
        id: "money",
        name: "MONEY TRAIL",
        icon: "💰",
        price: 1800,
        type: "trail"
    },

    {
        id: "diamondAura",
        name: "DIAMOND AURA",
        icon: "💎",
        price: 2200,
        type: "aura"
    },

    {
        id: "goldGlasses",
        name: "GOLD GLASSES",
        icon: "😎",
        price: 3000,
        type: "face"
    }

];


// ============================================================
// MISSION DATA
// ============================================================

const missions = [

    {
        id: "coins25",
        icon: "🪙",
        name: "COIN COLLECTOR",
        description: "Collect 25 coins",
        target: 25,
        rewardCoins: 100,
        rewardItem: null
    },

    {
        id: "coins100",
        icon: "💰",
        name: "COIN MASTER",
        description: "Collect 100 coins",
        target: 100,
        rewardCoins: 300,
        rewardItem: "chain"
    },

    {
        id: "pepe",
        icon: "🐸",
        name: "PEPE CHAMPION",
        description: "Complete the PEPE world",
        target: 1,
        rewardCoins: 100,
        rewardItem: "crown"
    },

    {
        id: "score20",
        icon: "⭐",
        name: "HIGH FLYER",
        description: "Reach a score of 20",
        target: 20,
        rewardCoins: 150,
        rewardItem: "sunglasses"
    },

    {
        id: "worlds3",
        icon: "🏆",
        name: "WORLD EXPLORER",
        description: "Complete 3 worlds",
        target: 3,
        rewardCoins: 300,
        rewardItem: "fire"
    },

    {
        id: "score50",
        icon: "🔥",
        name: "MEME LEGEND",
        description: "Reach a score of 50",
        target: 50,
        rewardCoins: 500,
        rewardItem: "lightning"
    },

    {
        id: "coins250",
        icon: "🪙",
        name: "TREASURE HUNTER",
        description: "Collect 250 coins",
        target: 250,
        rewardCoins: 750,
        rewardItem: "diamondAura"
    },

    {
        id: "allworlds",
        icon: "👑",
        name: "MEME FLY LEGEND",
        description: "Complete every world",
        target: worlds.length,
        rewardCoins: 2000,
        rewardItem: "rainbow"
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

let purchasedAccessories =
    JSON.parse(
        localStorage.getItem("memeFlyAccessories") || "[]"
    );

let equippedAccessories =
    JSON.parse(
        localStorage.getItem("memeFlyEquipped") || "{}"
    );

let claimedMissions =
    JSON.parse(
        localStorage.getItem("memeFlyMissions") || "[]"
    );

let totalCoinsCollected =
    Number(
        localStorage.getItem("memeFlyTotalCollected")
    ) || 0;

let completedWorlds =
    Number(
        localStorage.getItem("memeFlyCompletedWorlds")
    ) || 0;

let highestScore =
    Number(
        localStorage.getItem("memeFlyHighestScore")
    ) || 0;


if (unlockedLevel < 1)
    unlockedLevel = 1;

if (unlockedLevel > worlds.length)
    unlockedLevel = worlds.length;


// ============================================================
// SAVE
// ============================================================

function saveData() {

    localStorage.setItem(
        "memeFlyUnlocked",
        unlockedLevel
    );

    localStorage.setItem(
        "memeFlyBest",
        bestScore
    );

    localStorage.setItem(
        "memeFlyCoins",
        totalCoins
    );

    localStorage.setItem(
        "memeFlyAccessories",
        JSON.stringify(purchasedAccessories)
    );

    localStorage.setItem(
        "memeFlyEquipped",
        JSON.stringify(equippedAccessories)
    );

    localStorage.setItem(
        "memeFlyMissions",
        JSON.stringify(claimedMissions)
    );

    localStorage.setItem(
        "memeFlyTotalCollected",
        totalCoinsCollected
    );

    localStorage.setItem(
        "memeFlyCompletedWorlds",
        completedWorlds
    );

    localStorage.setItem(
        "memeFlyHighestScore",
        highestScore
    );
}


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
// GAME VARIABLES
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
// MENU
// ============================================================

function updateMenuStats() {

    bestScoreText.textContent =
        bestScore;

    coinsText.textContent =
        totalCoins;
}

updateMenuStats();


// ============================================================
// LEVELS
// ============================================================

function createLevels() {

    const container =
        document.getElementById("levelContainer");

    container.innerHTML = "";

    worlds.forEach(
        (world, index) => {

            const levelNumber =
                index + 1;

            const button =
                document.createElement("button");

            button.className = "level";

            if (
                levelNumber >
                unlockedLevel
            ) {

                button.classList.add("locked");

                button.innerHTML = `
                    <div style="font-size:42px">🔒</div>
                    <div class="name">LOCKED</div>
                `;

                button.disabled = true;

            } else {

                button.innerHTML = `
                    <div style="font-size:42px">
                        ${worldIcon(world)}
                    </div>

                    <div style="font-size:22px">
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
        }
    );
}

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
// SCREEN MANAGEMENT
// ============================================================

function hideAllScreens() {

    menu.classList.add("hidden");
    levelsScreen.classList.add("hidden");
    shopScreen.classList.add("hidden");
    closetScreen.classList.add("hidden");
    missionsScreen.classList.add("hidden");
    game.classList.add("hidden");
}

function stopGame() {

    gameRunning = false;

    cancelAnimationFrame(
        animationFrame
    );
}

function showMenu() {

    stopGame();
    hideAllScreens();

    menu.classList.remove("hidden");

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    updateMenuStats();
}

function showLevels() {

    stopGame();
    hideAllScreens();

    levelsScreen.classList.remove("hidden");

    gameOver.classList.add("hidden");
    levelComplete.classList.add("hidden");

    createLevels();
}

function showShop() {

    stopGame();
    hideAllScreens();

    shopScreen.classList.remove("hidden");

    renderShop();
}

function showCloset() {

    stopGame();
    hideAllScreens();

    closetScreen.classList.remove("hidden");

    renderCloset();
}

function showMissions() {

    stopGame();
    hideAllScreens();

    missionsScreen.classList.remove("hidden");

    renderMissions();
}


// ============================================================
// BUTTONS
// ============================================================

playBtn.addEventListener(
    "click",
    () => startGame(unlockedLevel)
);

levelsBtn.addEventListener(
    "click",
    showLevels
);

shopBtn.addEventListener(
    "click",
    showShop
);

closetBtn.addEventListener(
    "click",
    showCloset
);

missionsBtn.addEventListener(
    "click",
    showMissions
);

backBtn.addEventListener(
    "click",
    showMenu
);

shopBackBtn.addEventListener(
    "click",
    showMenu
);

closetBackBtn.addEventListener(
    "click",
    showMenu
);

missionsBackBtn.addEventListener(
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
    () => startGame(currentLevel)
);


// ============================================================
// SHOP
// ============================================================

function renderShop() {

    const container =
        document.getElementById("shopContainer");

    const balance =
        document.getElementById("shopCoins");

    balance.textContent =
        totalCoins;

    container.innerHTML = "";

    accessories.forEach(
        item => {

            const owned =
                purchasedAccessories.includes(
                    item.id
                );

            const div =
                document.createElement("div");

            div.className =
                "shopItem" +
                (owned ? " owned" : "");

            div.innerHTML = `
                <div class="shopIcon">
                    ${item.icon}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.type.toUpperCase()}
                </p>

                ${
                    owned
                    ? `
                        <button disabled>
                            ✓ OWNED
                        </button>
                    `
                    : `
                        <div class="shopPrice">
                            🪙 ${item.price}
                        </div>

                        <br>

                        <button
                            onclick="buyAccessory('${item.id}')"
                        >
                            BUY
                        </button>
                    `
                }
            `;

            container.appendChild(div);
        }
    );
}


// ============================================================
// BUY ACCESSORY
// ============================================================

function buyAccessory(id) {

    const item =
        accessories.find(
            accessory =>
                accessory.id === id
        );

    if (!item)
        return;

    if (
        purchasedAccessories.includes(
            id
        )
    )
        return;

    if (
        totalCoins <
        item.price
    ) {

        alert(
            "You don't have enough coins! 🪙"
        );

        return;
    }

    totalCoins -=
        item.price;

    purchasedAccessories.push(
        id
    );

    saveData();

    updateMenuStats();

    renderShop();
}


// ============================================================
// CLOSET
// ============================================================

let selectedClosetMeme = 1;

function renderCloset() {

    const memeContainer =
        document.getElementById(
            "closetMemes"
        );

    const accessoryContainer =
        document.getElementById(
            "closetAccessories"
        );

    memeContainer.innerHTML = "";
    accessoryContainer.innerHTML = "";

    // -----------------------------
    // MEMES
    // -----------------------------

    worlds.forEach(
        (world, index) => {

            const level =
                index + 1;

            const button =
                document.createElement("button");

            const unlocked =
                level <= unlockedLevel;

            button.className =
                "closetMeme";

            if (!unlocked)
                button.classList.add("locked");

            if (
                selectedClosetMeme ===
                level
            )
                button.classList.add("selected");

            button.innerHTML =
                unlocked
                    ? `${worldIcon(world)} ${world.name}`
                    : `🔒 ${world.name}`;

            if (unlocked) {

                button.addEventListener(
                    "click",
                    () => {

                        selectedClosetMeme =
                            level;

                        renderCloset();
                    }
                );
            }

            memeContainer.appendChild(
                button
            );
        }
    );


    // -----------------------------
    // ACCESSORIES
    // -----------------------------

    const noneButton =
        document.createElement("button");

    noneButton.className =
        "closetAccessory";

    noneButton.textContent =
        "❌ NONE";

    accessoryContainer.appendChild(
        noneButton
    );


    accessories.forEach(
        item => {

            const owned =
                purchasedAccessories.includes(
                    item.id
                );

            const button =
                document.createElement("button");

            button.className =
                "closetAccessory";

            if (!owned)
                button.classList.add("locked");

            if (
                equippedAccessories[item.type] ===
                item.id
            ) {

                button.classList.add(
                    "equipped"
                );
            }

            button.innerHTML =
                owned
                    ? `${item.icon} ${item.name}`
                    : `🔒 ${item.name}`;


            if (owned) {

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            equippedAccessories[
                                item.type
                            ] === item.id
                        ) {

                            delete equippedAccessories[
                                item.type
                            ];

                        } else {

                            equippedAccessories[
                                item.type
                            ] = item.id;
                        }

                        saveData();

                        renderCloset();
                    }
                );
            }

            accessoryContainer.appendChild(
                button
            );
        }
    );

    drawClosetPreview();
}


// ============================================================
// CLOSET PREVIEW
// ============================================================

function drawClosetPreview() {

    const closetCanvas =
        document.getElementById(
            "closetCanvas"
        );

    if (!closetCanvas)
        return;

    const c =
        closetCanvas.getContext("2d");

    c.clearRect(
        0,
        0,
        closetCanvas.width,
        closetCanvas.height
    );

    c.save();

    c.translate(
        150,
        150
    );

    c.scale(
        2.2,
        2.2
    );

    const world =
        worlds[
            selectedClosetMeme - 1
        ];

    if (world.skin === "pepe")
        drawPepe();

    if (world.skin === "shib")
        drawShib();

    if (world.skin === "doge")
        drawDoge();

    if (world.skin === "troll")
        drawTroll();

    if (world.skin === "sixtyseven")
        draw67();

    if (world.skin === "wif")
        drawWif();

    drawAccessories(
        c,
        equippedAccessories
    );

    c.restore();

    const equipped =
        Object.keys(
            equippedAccessories
        );

    const info =
        document.getElementById(
            "equippedInfo"
        );

    info.textContent =
        equipped.length
            ? equipped
                .map(
                    type =>
                        accessories.find(
                            item =>
                                item.id ===
                                equippedAccessories[type]
                        )?.name
                )
                .join(" • ")
            : "NO ACCESSORIES";
}


// ============================================================
// MISSIONS
// ============================================================

function getMissionProgress(mission) {

    if (
        mission.id ===
        "coins25"
    )
        return totalCoinsCollected;

    if (
        mission.id ===
        "coins100"
    )
        return totalCoinsCollected;

    if (
        mission.id ===
        "coins250"
    )
        return totalCoinsCollected;

    if (
        mission.id ===
        "pepe"
    )
        return unlockedLevel >= 2
            ? 1
            : 0;

    if (
        mission.id ===
        "score20"
    )
        return highestScore;

    if (
        mission.id ===
        "score50"
    )
        return highestScore;

    if (
        mission.id ===
        "worlds3"
    )
        return completedWorlds;

    if (
        mission.id ===
        "allworlds"
    )
        return completedWorlds;

    return 0;
}


function renderMissions() {

    const container =
        document.getElementById(
            "missionsContainer"
        );

    container.innerHTML = "";

    missions.forEach(
        mission => {

            const progress =
                Math.min(
                    getMissionProgress(mission),
                    mission.target
                );

            const percentage =
                Math.min(
                    progress /
                        mission.target *
                        100,
                    100
                );

            const claimed =
                claimedMissions.includes(
                    mission.id
                );

            const completed =
                progress >=
                mission.target;

            const rewardItem =
                mission.rewardItem
                    ? accessories.find(
                        item =>
                            item.id ===
                            mission.rewardItem
                    )
                    : null;

            const div =
                document.createElement("div");

            div.className =
                "mission" +
                (completed
                    ? " completed"
                    : "") +
                (claimed
                    ? " claimed"
                    : "");

            div.innerHTML = `

                <div class="missionIcon">
                    ${mission.icon}
                </div>

                <div class="missionInfo">

                    <h3>
                        ${mission.name}
                    </h3>

                    <p>
                        ${mission.description}
                    </p>

                    <div class="progressBar">

                        <div
                            class="progressFill"
                            style="width:${percentage}%"
                        ></div>

                    </div>

                    <small>
                        ${progress} / ${mission.target}
                    </small>

                </div>

                <div class="missionReward">

                    <div class="rewardItem">
                        🪙 +${mission.rewardCoins}
                    </div>

                    ${
                        rewardItem
                        ? `
                            <div class="rewardItem">
                                ${rewardItem.icon}
                                ${rewardItem.name}
                            </div>
                        `
                        : ""
                    }

                    <button
                        class="claimBtn"
                        ${
                            !completed ||
                            claimed
                                ? "disabled"
                                : ""
                        }
                        onclick="claimMission('${mission.id}')"
                    >
                        ${
                            claimed
                                ? "✓ CLAIMED"
                                : "CLAIM"
                        }
                    </button>

                </div>
            `;

            container.appendChild(
                div
            );
        }
    );
}


// ============================================================
// CLAIM MISSION
// ============================================================

function claimMission(id) {

    if (
        claimedMissions.includes(id)
    )
        return;

    const mission =
        missions.find(
            item =>
                item.id === id
        );

    if (!mission)
        return;

    if (
        getMissionProgress(mission) <
        mission.target
    )
        return;

    claimedMissions.push(
        id
    );

    totalCoins +=
        mission.rewardCoins;

    if (
        mission.rewardItem &&
        !purchasedAccessories.includes(
            mission.rewardItem
        )
    ) {

        purchasedAccessories.push(
            mission.rewardItem
        );
    }

    saveData();

    updateMenuStats();

    renderMissions();
}


// ============================================================
// START GAME
// ============================================================

function startGame(levelNumber) {

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

    hideAllScreens();

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
// CONTROLS
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
// PIPE
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


    if (
        performance.now() -
        lastPipeTime >
        1450
    ) {

        createPipe();

        lastPipeTime =
            performance.now();
    }


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

                if (
                    score >
                    highestScore
                ) {

                    highestScore =
                        score;

                    localStorage.setItem(
                        "memeFlyHighestScore",
                        highestScore
                    );
                }

                createParticles(
                    player.x,
                    player.y,
                    world.accent,
                    12
                );

                if (
                    score >=
                    world.target
                ) {

                    completeLevel();
                }
            }
        }
    );


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
                ) < 35
            ) {

                coin.collected =
                    true;

                collectedCoins++;

                totalCoins++;

                totalCoinsCollected++;

                gameCoinsText.textContent =
                    collectedCoins;

                coinsText.textContent =
                    totalCoins;

                localStorage.setItem(
                    "memeFlyCoins",
                    totalCoins
                );

                localStorage.setItem(
                    "memeFlyTotalCollected",
                    totalCoinsCollected
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
// DISTANCE
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


    if (currentLevel === 1)
        drawPepeBackground();

    if (currentLevel === 2)
        drawShibBackground();

    if (currentLevel === 3)
        drawDogeBackground();

    if (currentLevel === 4)
        drawTrollBackground();

    if (currentLevel === 5)
        draw67Background();

    if (currentLevel === 6)
        drawWifBackground();
}


// ============================================================
// PEPE BACKGROUND
// ============================================================

function drawPepeBackground() {

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
// DOGE BACKGROUND
// ============================================================

function drawDogeBackground() {

    ctx.fillStyle =
        "white";

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const x =
            (i * 137) % W;

        const y =
            (i * 83) % H;

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

    ctx.fillStyle =
        "rgba(255,255,255,0.8)";

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const x =
            (i * 113) % W;

        const y =
            (i * 67) % H;

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
// PIPES
// ============================================================

function drawPipes() {

    const world =
        worlds[
            currentLevel - 1
        ];

    pipes.forEach(
        pipe => {

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
// COINS
// ============================================================

function drawCoins() {

    coins.forEach(
        coin => {

            if (coin.collected)
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
// PLAYER
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

    if (world.skin === "pepe")
        drawPepe();

    if (world.skin === "shib")
        drawShib();

    if (world.skin === "doge")
        drawDoge();

    if (world.skin === "troll")
        drawTroll();

    if (world.skin === "sixtyseven")
        draw67();

    if (world.skin === "wif")
        drawWif();

    drawAccessories(
        ctx,
        equippedAccessories
    );

    ctx.restore();
}


// ============================================================
// ACCESSORIES
// ============================================================

function drawAccessories(
    drawingContext,
    equipped
) {

    const c =
        drawingContext;

    // AURA
    if (
        equipped.aura ===
        "diamondAura"
    ) {

        c.save();

        c.shadowBlur = 25;
        c.shadowColor = "#ffffff";

        c.strokeStyle =
            "rgba(120,240,255,0.8)";

        c.lineWidth = 5;

        c.beginPath();

        c.arc(
            0,
            0,
            37,
            0,
            Math.PI * 2
        );

        c.stroke();

        c.restore();
    }


    // HEAD
    if (
        equipped.head ===
        "crown"
    ) {

        c.fillStyle =
            "#ffd21c";

        c.beginPath();

        c.moveTo(
            -20,
            -28
        );

        c.lineTo(
            -15,
            -48
        );

        c.lineTo(
            -5,
            -37
        );

        c.lineTo(
            0,
            -52
        );

        c.lineTo(
            7,
            -37
        );

        c.lineTo(
            18,
            -48
        );

        c.lineTo(
            20,
            -28
        );

        c.closePath();

        c.fill();

        c.strokeStyle =
            "#9b6900";

        c.lineWidth = 2;

        c.stroke();
    }


    if (
        equipped.head ===
        "tophat"
    ) {

        c.fillStyle =
            "#151515";

        c.fillRect(
            -20,
            -47,
            40,
            20
        );

        c.fillRect(
            -28,
            -29,
            56,
            7
        );

        c.fillStyle =
            "#d7aa31";

        c.fillRect(
            -20,
            -32,
            40,
            5
        );
    }


    // FACE
    if (
        equipped.face ===
        "sunglasses"
    ) {

        c.fillStyle =
            "#111";

        c.fillRect(
            -22,
            -15,
            18,
            9
        );

        c.fillRect(
            4,
            -15,
            18,
            9
        );

        c.fillRect(
            -4,
            -12,
            8,
            4
        );

        c.strokeStyle =
            "#777";

        c.lineWidth = 2;

        c.strokeRect(
            -22,
            -15,
            18,
            9
        );

        c.strokeRect(
            4,
            -15,
            18,
            9
        );
    }


    if (
        equipped.face ===
        "goldGlasses"
    ) {

        c.fillStyle =
            "#ffd700";

        c.fillRect(
            -22,
            -15,
            18,
            9
        );

        c.fillRect(
            4,
            -15,
            18,
            9
        );

        c.fillRect(
            -4,
            -12,
            8,
            4
        );

        c.strokeStyle =
            "#fff4a3";

        c.lineWidth = 2;

        c.strokeRect(
            -22,
            -15,
            18,
            9
        );

        c.strokeRect(
            4,
            -15,
            18,
            9
        );
    }


    // BODY
    if (
        equipped.body ===
        "chain"
    ) {

        c.strokeStyle =
            "#70f5ff";

        c.lineWidth = 5;

        c.beginPath();

        c.arc(
            0,
            13,
            20,
            0.1,
            Math.PI - 0.1
        );

        c.stroke();

        c.fillStyle =
            "#ffffff";

        c.beginPath();

        c.moveTo(
            -5,
            30
        );

        c.lineTo(
            0,
            38
        );

        c.lineTo(
            5,
            30
        );

        c.closePath();

        c.fill();
    }


    // TRAILS
    if (
        equipped.trail
    ) {

        drawTrail(
            c,
            equipped.trail
        );
    }
}


// ============================================================
// TRAILS
// ============================================================

function drawTrail(
    c,
    trail
) {

    const time =
        performance.now() *
        0.01;

    c.save();

    c.globalAlpha =
        0.75;

    if (
        trail ===
        "fire"
    ) {

        c.fillStyle =
            "#ff5a00";

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            c.beginPath();

            c.arc(
                -28 - i * 8,
                8 +
                    Math.sin(
                        time + i
                    ) *
                    6,
                5 +
                    Math.random() *
                        4,
                0,
                Math.PI * 2
            );

            c.fill();
        }
    }


    if (
        trail ===
        "lightning"
    ) {

        c.strokeStyle =
            "#00eaff";

        c.lineWidth = 3;

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            c.beginPath();

            c.moveTo(
                -25 - i * 9,
                0
            );

            c.lineTo(
                -38 - i * 9,
                8
            );

            c.lineTo(
                -30 - i * 9,
                12
            );

            c.lineTo(
                -42 - i * 9,
                23
            );

            c.stroke();
        }
    }


    if (
        trail ===
        "rainbow"
    ) {

        const colors = [
            "#ff0000",
            "#ff8800",
            "#ffff00",
            "#00ff66",
            "#00ccff",
            "#7744ff",
            "#ff00cc"
        ];

        colors.forEach(
            (color, i) => {

                c.fillStyle =
                    color;

                c.beginPath();

                c.arc(
                    -30 -
                        i * 6,
                    Math.sin(
                        time +
                            i
                    ) *
                        10,
                    4,
                    0,
                    Math.PI * 2
                );

                c.fill();
            }
        );
    }


    if (
        trail ===
        "money"
    ) {

        c.fillStyle =
            "#5cff75";

        c.font =
            "bold 16px Arial";

        c.fillText(
            "$",
            -35,
            -2
        );

        c.fillText(
            "$",
            -52,
            15
        );

        c.fillText(
            "$",
            -68,
            -8
        );
    }

    c.restore();
}


// ============================================================
// PEPE
// ============================================================

function drawPepe() {

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
// SHIB
// ============================================================

function drawShib() {

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

    ctx.beginPath();

    ctx.arc(
        0,
        3,
        5,
        0,
        Math.PI * 2
    );

    ctx.fill();

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
// DOGE
// ============================================================

function drawDoge() {

    ctx.fillStyle =
        "#d49b55";

    ctx.fillRect(
        -9,
        15,
        18,
        15
    );

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

    ctx.beginPath();

    ctx.arc(
        0,
        4,
        5,
        0,
        Math.PI * 2
    );

    ctx.fill();

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
// TROLL
// ============================================================

function drawTroll() {

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
                Math.abs(
                    i % 16
                )
        );
    }

    ctx.lineTo(
        24,
        -15
    );

    ctx.fill();

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
// 67
// ============================================================

function draw67() {

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

    ctx.fillRect(
        -10,
        4,
        20,
        4
    );

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
// WIF
// ============================================================

function drawWif() {

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
// PARTICLES DRAW
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
// WORLD TITLE
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
// PROGRESS
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

    ctx.fillStyle =
        "rgba(0,0,0,0.4)";

    ctx.fillRect(
        x,
        y,
        width,
        height
    );

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
        width *
            progress,
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

    if (
        score >
        highestScore
    ) {

        highestScore =
            score;

        localStorage.setItem(
            "memeFlyHighestScore",
            highestScore
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
// COMPLETE LEVEL
// ============================================================

function completeLevel() {

    if (gameFinished)
        return;

    gameFinished = true;

    gameRunning = false;

    completeScore.textContent =
        score;


    // Só conta uma vez cada mundo
    if (
        currentLevel >=
        unlockedLevel
    ) {

        completedWorlds++;

        localStorage.setItem(
            "memeFlyCompletedWorlds",
            completedWorlds
        );
    }


    // Desbloquear próximo mundo
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


    if (
        score >
        highestScore
    ) {

        highestScore =
            score;

        localStorage.setItem(
            "memeFlyHighestScore",
            highestScore
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


    saveData();

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
// START
// ============================================================

showMenu();
```
