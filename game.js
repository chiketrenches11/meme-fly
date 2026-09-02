// ============================================================
// MEME FLY
// FULL VERSION
// WORLDS + SHOP + WARDROBE + MISSIONS
// ============================================================


// ============================================================
// BASIC HTML
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
// ACCESSORIES
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
// MISSIONS
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


unlockedLevel =
    Math.max(
        1,
        Math.min(
            worlds.length,
            unlockedLevel
        )
    );


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
// EXTRA SCREENS
// Created automatically so your existing HTML works.
// ============================================================

function createExtraScreens() {

    const app =
        document.getElementById("app");

    const menuButtons =
        document.querySelector(".menuButtons");


    // --------------------------------------------------------
    // MENU BUTTONS
    // --------------------------------------------------------

    function createButton(id, text) {

        let button =
            document.getElementById(id);

        if (!button) {

            button =
                document.createElement("button");

            button.id = id;
            button.textContent = text;

            menuButtons.appendChild(button);
        }

        return button;
    }


    const shopBtn =
        createButton(
            "shopBtn",
            "🛍️ SHOP"
        );

    const closetBtn =
        createButton(
            "closetBtn",
            "👕 WARDROBE"
        );

    const missionsBtn =
        createButton(
            "missionsBtn",
            "🎯 MISSIONS"
        );


    // --------------------------------------------------------
    // SHOP SCREEN
    // --------------------------------------------------------

    let shopScreen =
        document.getElementById(
            "shopScreen"
        );

    if (!shopScreen) {

        shopScreen =
            document.createElement("section");

        shopScreen.id =
            "shopScreen";

        shopScreen.className =
            "hidden";

        shopScreen.innerHTML = `

            <div class="extraScreen">

                <div class="extraHeader">

                    <div class="smallLogo">
                        MEME FLY
                    </div>

                    <h1>🛍️ MEME SHOP</h1>

                    <p>
                        Buy accessories with your coins.
                    </p>

                    <div class="screenCoins">
                        🪙
                        <span id="shopCoins">
                            0
                        </span>
                    </div>

                </div>

                <div
                    id="shopContainer"
                    class="itemGrid"
                ></div>

                <button
                    id="shopBackBtn"
                    class="backButton"
                >
                    ← BACK
                </button>

            </div>
        `;

        app.appendChild(
            shopScreen
        );
    }


    // --------------------------------------------------------
    // WARDROBE SCREEN
    // --------------------------------------------------------

    let closetScreen =
        document.getElementById(
            "closetScreen"
        );

    if (!closetScreen) {

        closetScreen =
            document.createElement("section");

        closetScreen.id =
            "closetScreen";

        closetScreen.className =
            "hidden";

        closetScreen.innerHTML = `

            <div class="extraScreen">

                <div class="extraHeader">

                    <div class="smallLogo">
                        MEME FLY
                    </div>

                    <h1>👕 WARDROBE</h1>

                    <p>
                        Customize your unlocked meme.
                    </p>

                </div>

                <div class="closetLayout">

                    <div class="closetPreview">

                        <canvas
                            id="closetCanvas"
                            width="300"
                            height="300"
                        ></canvas>

                        <div
                            id="equippedInfo"
                            class="equippedInfo"
                        >
                            NO ACCESSORIES
                        </div>

                    </div>

                    <div class="closetContent">

                        <h2>YOUR MEMES</h2>

                        <div
                            id="closetMemes"
                            class="closetMemes"
                        ></div>

                        <h2>ACCESSORIES</h2>

                        <div
                            id="closetAccessories"
                            class="closetAccessories"
                        ></div>

                    </div>

                </div>

                <button
                    id="closetBackBtn"
                    class="backButton"
                >
                    ← BACK
                </button>

            </div>
        `;

        app.appendChild(
            closetScreen
        );
    }


    // --------------------------------------------------------
    // MISSIONS SCREEN
    // --------------------------------------------------------

    let missionsScreen =
        document.getElementById(
            "missionsScreen"
        );

    if (!missionsScreen) {

        missionsScreen =
            document.createElement("section");

        missionsScreen.id =
            "missionsScreen";

        missionsScreen.className =
            "hidden";

        missionsScreen.innerHTML = `

            <div class="extraScreen">

                <div class="extraHeader">

                    <div class="smallLogo">
                        MEME FLY
                    </div>

                    <h1>🎯 MISSIONS</h1>

                    <p>
                        Complete missions and earn rewards.
                    </p>

                </div>

                <div
                    id="missionsContainer"
                    class="missionsContainer"
                ></div>

                <button
                    id="missionsBackBtn"
                    class="backButton"
                >
                    ← BACK
                </button>

            </div>
        `;

        app.appendChild(
            missionsScreen
        );
    }


    return {
        shopBtn,
        closetBtn,
        missionsBtn,
        shopScreen,
        closetScreen,
        missionsScreen
    };
}


const extra =
    createExtraScreens();

const shopBtn =
    extra.shopBtn;

const closetBtn =
    extra.closetBtn;

const missionsBtn =
    extra.missionsBtn;

const shopScreen =
    extra.shopScreen;

const closetScreen =
    extra.closetScreen;

const missionsScreen =
    extra.missionsScreen;

const shopBackBtn =
    document.getElementById(
        "shopBackBtn"
    );

const closetBackBtn =
    document.getElementById(
        "closetBackBtn"
    );

const missionsBackBtn =
    document.getElementById(
        "missionsBackBtn"
    );


// ============================================================
// EXTRA CSS
// ============================================================

const extraStyle =
    document.createElement("style");

extraStyle.textContent = `

    .extraScreen {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 25px 20px 50px;
        text-align: center;
        color: white;
        overflow-y: auto;

        background:
            radial-gradient(
                circle at 20% 20%,
                rgba(0,255,255,.18),
                transparent 30%
            ),
            radial-gradient(
                circle at 80% 30%,
                rgba(255,0,180,.18),
                transparent 30%
            ),
            linear-gradient(
                135deg,
                #11152d,
                #251044,
                #092c45
            );
    }

    .extraHeader {
        margin-bottom: 25px;
    }

    .extraHeader h1 {
        font-size: 36px;
        margin: 10px 0;
        font-weight: 900;
    }

    .extraHeader p {
        opacity: .8;
    }

    .screenCoins {
        display: inline-block;
        margin-top: 15px;
        padding: 10px 22px;
        border-radius: 30px;
        background: rgba(0,0,0,.45);
        font-size: 20px;
        font-weight: bold;
    }

    .itemGrid {
        width: min(1100px, 100%);
        margin: auto;
        display: grid;
        grid-template-columns:
            repeat(auto-fit, minmax(190px, 1fr));
        gap: 18px;
    }

    .shopItem {
        padding: 22px;
        border-radius: 22px;
        background: rgba(255,255,255,.10);
        border: 1px solid rgba(255,255,255,.18);
        box-shadow:
            0 10px 30px rgba(0,0,0,.3);
    }

    .shopItem.owned {
        border-color: #53ff9b;
    }

    .shopIcon {
        font-size: 55px;
        margin-bottom: 10px;
    }

    .shopItem h3 {
        margin: 8px 0;
    }

    .shopItem p {
        opacity: .55;
        font-size: 12px;
    }

    .shopPrice {
        margin: 14px;
        font-weight: bold;
        font-size: 18px;
    }

    .shopItem button {
        border: 0;
        border-radius: 12px;
        padding: 11px 22px;
        font-weight: 900;
        cursor: pointer;
        background: #fff;
        color: #111;
    }

    .shopItem button:not(:disabled):hover {
        transform: scale(1.05);
    }

    .closetLayout {
        width: min(1050px, 100%);
        margin: auto;
        display: grid;
        grid-template-columns:
            330px 1fr;
        gap: 30px;
        align-items: start;
    }

    .closetPreview {
        padding: 20px;
        border-radius: 25px;
        background: rgba(255,255,255,.08);
    }

    #closetCanvas {
        width: 300px;
        max-width: 100%;
        border-radius: 20px;
        background:
            radial-gradient(
                circle,
                #3d2b70,
                #11152d
            );
    }

    .equippedInfo {
        margin-top: 12px;
        font-weight: bold;
        opacity: .8;
    }

    .closetContent {
        text-align: left;
    }

    .closetContent h2 {
        margin-top: 0;
        margin-bottom: 12px;
    }

    .closetMemes,
    .closetAccessories {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 25px;
    }

    .closetMeme,
    .closetAccessory {
        border: 0;
        border-radius: 12px;
        padding: 11px 15px;
        cursor: pointer;
        background: rgba(255,255,255,.12);
        color: white;
        font-weight: bold;
    }

    .closetMeme.selected,
    .closetAccessory.equipped {
        background: #00eaff;
        color: #06101e;
        box-shadow:
            0 0 20px rgba(0,234,255,.5);
    }

    .closetMeme.locked,
    .closetAccessory.locked {
        opacity: .35;
        cursor: not-allowed;
    }

    .missionsContainer {
        width: min(1000px, 100%);
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .mission {
        display: grid;
        grid-template-columns:
            70px 1fr 180px;
        gap: 15px;
        align-items: center;
        text-align: left;
        padding: 18px;
        border-radius: 20px;
        background: rgba(255,255,255,.09);
        border: 1px solid rgba(255,255,255,.12);
    }

    .mission.completed {
        border-color: #53ff9b;
    }

    .mission.claimed {
        opacity: .55;
    }

    .missionIcon {
        font-size: 42px;
        text-align: center;
    }

    .missionInfo h3 {
        margin: 0 0 5px;
    }

    .missionInfo p {
        margin: 0 0 10px;
        opacity: .7;
    }

    .progressBar {
        width: 100%;
        height: 9px;
        background: rgba(0,0,0,.4);
        border-radius: 10px;
        overflow: hidden;
    }

    .progressFill {
        height: 100%;
        background: linear-gradient(
            90deg,
            #00eaff,
            #62ff70
        );
    }

    .missionReward {
        text-align: center;
    }

    .rewardItem {
        margin: 4px 0;
        font-size: 13px;
    }

    .claimBtn {
        margin-top: 8px;
        padding: 10px 18px;
        border: 0;
        border-radius: 10px;
        font-weight: 900;
        cursor: pointer;
        background: #62ff70;
    }

    .claimBtn:disabled {
        opacity: .35;
        cursor: not-allowed;
    }

    @media(max-width:700px) {

        .closetLayout {
            grid-template-columns: 1fr;
        }

        .closetContent {
            text-align: center;
        }

        .closetMemes,
        .closetAccessories {
            justify-content: center;
        }

        .mission {
            grid-template-columns: 50px 1fr;
        }

        .missionReward {
            grid-column: 1 / -1;
        }

        .extraHeader h1 {
            font-size: 28px;
        }

        .menuButtons {
            flex-wrap: wrap;
        }

    }

`;

document.head.appendChild(
    extraStyle
);


// ============================================================
// CANVAS
// ============================================================

let W =
    window.innerWidth;

let H =
    window.innerHeight;

function resizeCanvas() {

    W =
        window.innerWidth;

    H =
        window.innerHeight;

    canvas.width =
        W;

    canvas.height =
        H;
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
// MENU STATS
// ============================================================

function updateMenuStats() {

    if (bestScoreText)
        bestScoreText.textContent =
            bestScore;

    if (coinsText)
        coinsText.textContent =
            totalCoins;
}

updateMenuStats();


// ============================================================
// WORLD ICON
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


// ============================================================
// LEVEL SELECT
// ============================================================

function createLevels() {

    const container =
        document.getElementById(
            "levelContainer"
        );

    if (!container)
        return;

    container.innerHTML = "";

    worlds.forEach(
        (world, index) => {

            const level =
                index + 1;

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "level";

            if (level > unlockedLevel) {

                button.classList.add(
                    "locked"
                );

                button.disabled =
                    true;

                button.innerHTML = `
                    <div style="font-size:42px">
                        🔒
                    </div>

                    <div class="name">
                        LOCKED
                    </div>
                `;

            } else {

                button.innerHTML = `

                    <div style="font-size:42px">
                        ${worldIcon(world)}
                    </div>

                    <div style="font-size:22px">
                        ${level}
                    </div>

                    <div class="name">
                        ${world.name}
                    </div>
                `;

                button.addEventListener(
                    "click",
                    () =>
                        startGame(level)
                );
            }

            container.appendChild(
                button
            );
        }
    );
}

createLevels();


// ============================================================
// SCREEN MANAGEMENT
// ============================================================

function hideAllScreens() {

    menu.classList.add("hidden");

    levelsScreen.classList.add(
        "hidden"
    );

    shopScreen.classList.add(
        "hidden"
    );

    closetScreen.classList.add(
        "hidden"
    );

    missionsScreen.classList.add(
        "hidden"
    );

    game.classList.add(
        "hidden"
    );
}


function stopGame() {

    gameRunning = false;

    if (animationFrame)
        cancelAnimationFrame(
            animationFrame
        );
}


function showMenu() {

    stopGame();

    hideAllScreens();

    menu.classList.remove(
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

    stopGame();

    hideAllScreens();

    levelsScreen.classList.remove(
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


function showShop() {

    stopGame();

    hideAllScreens();

    shopScreen.classList.remove(
        "hidden"
    );

    renderShop();
}


function showCloset() {

    stopGame();

    hideAllScreens();

    closetScreen.classList.remove(
        "hidden"
    );

    renderCloset();
}


function showMissions() {

    stopGame();

    hideAllScreens();

    missionsScreen.classList.remove(
        "hidden"
    );

    renderMissions();
}


// ============================================================
// BUTTONS
// ============================================================

playBtn.addEventListener(
    "click",
    () =>
        startGame(
            unlockedLevel
        )
);

levelsBtn.addEventListener(
    "click",
    showLevels
);

backBtn.addEventListener(
    "click",
    showMenu
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
    () =>
        startGame(
            currentLevel
        )
);

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
// SHOP
// ============================================================

function renderShop() {

    const container =
        document.getElementById(
            "shopContainer"
        );

    const balance =
        document.getElementById(
            "shopCoins"
        );

    if (!container)
        return;

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
                document.createElement(
                    "div"
                );

            div.className =
                "shopItem" +
                (
                    owned
                        ? " owned"
                        : ""
                );

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

                            <button>
                                BUY
                            </button>
                        `
                }

            `;

            if (!owned) {

                const buyButton =
                    div.querySelector(
                        "button"
                    );

                buyButton.addEventListener(
                    "click",
                    () =>
                        buyAccessory(
                            item.id
                        )
                );
            }

            container.appendChild(
                div
            );
        }
    );
}


// ============================================================
// BUY ACCESSORY
// ============================================================

function buyAccessory(id) {

    const item =
        accessories.find(
            x =>
                x.id === id
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
// WARDROBE
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

    if (!memeContainer ||
        !accessoryContainer)
        return;

    memeContainer.innerHTML = "";

    accessoryContainer.innerHTML = "";


    // --------------------------------------------------------
    // MEMES
    // --------------------------------------------------------

    worlds.forEach(
        (world, index) => {

            const level =
                index + 1;

            const unlocked =
                level <=
                unlockedLevel;

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "closetMeme";

            if (!unlocked)
                button.classList.add(
                    "locked"
                );

            if (
                selectedClosetMeme ===
                level
            )
                button.classList.add(
                    "selected"
                );

            button.textContent =
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


    // --------------------------------------------------------
    // NONE
    // --------------------------------------------------------

    const none =
        document.createElement(
            "button"
        );

    none.className =
        "closetAccessory";

    none.textContent =
        "❌ UNEQUIP ALL";

    none.addEventListener(
        "click",
        () => {

            equippedAccessories =
                {};

            saveData();

            renderCloset();
        }
    );

    accessoryContainer.appendChild(
        none
    );


    // --------------------------------------------------------
    // ACCESSORIES
    // --------------------------------------------------------

    accessories.forEach(
        item => {

            const owned =
                purchasedAccessories.includes(
                    item.id
                );

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "closetAccessory";

            if (!owned)
                button.classList.add(
                    "locked"
                );

            if (
                equippedAccessories[
                    item.type
                ] === item.id
            ) {

                button.classList.add(
                    "equipped"
                );
            }

            button.textContent =
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
                            ] =
                                item.id;
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
        closetCanvas.getContext(
            "2d"
        );

    const cw =
        closetCanvas.width;

    const ch =
        closetCanvas.height;

    c.clearRect(
        0,
        0,
        cw,
        ch
    );

    const gradient =
        c.createLinearGradient(
            0,
            0,
            0,
            ch
        );

    gradient.addColorStop(
        0,
        "#30205f"
    );

    gradient.addColorStop(
        1,
        "#08152b"
    );

    c.fillStyle =
        gradient;

    c.fillRect(
        0,
        0,
        cw,
        ch
    );

    c.save();

    c.translate(
        cw / 2,
        ch / 2 + 10
    );

    c.scale(
        2.1,
        2.1
    );

    const world =
        worlds[
            selectedClosetMeme - 1
        ];

    drawSkin(
        c,
        world.skin
    );

    drawAccessories(
        c,
        equippedAccessories
    );

    c.restore();


    const info =
        document.getElementById(
            "equippedInfo"
        );

    if (!info)
        return;

    const equipped =
        Object.values(
            equippedAccessories
        );

    if (!equipped.length) {

        info.textContent =
            "NO ACCESSORIES";

    } else {

        info.textContent =
            equipped
                .map(
                    id => {

                        const item =
                            accessories.find(
                                x =>
                                    x.id ===
                                    id
                            );

                        return item
                            ? item.name
                            : "";
                    }
                )
                .filter(Boolean)
                .join(" • ");
    }
}


// ============================================================
// MISSIONS
// ============================================================

function getMissionProgress(
    mission
) {

    if (
        mission.id ===
            "coins25" ||
        mission.id ===
            "coins100" ||
        mission.id ===
            "coins250"
    ) {

        return totalCoinsCollected;
    }

    if (
        mission.id ===
        "pepe"
    ) {

        return completedWorlds >= 1
            ? 1
            : 0;
    }

    if (
        mission.id ===
            "score20" ||
        mission.id ===
            "score50"
    ) {

        return highestScore;
    }

    if (
        mission.id ===
            "worlds3" ||
        mission.id ===
            "allworlds"
    ) {

        return completedWorlds;
    }

    return 0;
}


function renderMissions() {

    const container =
        document.getElementById(
            "missionsContainer"
        );

    if (!container)
        return;

    container.innerHTML = "";

    missions.forEach(
        mission => {

            const progress =
                Math.min(
                    getMissionProgress(
                        mission
                    ),
                    mission.target
                );

            const percentage =
                (
                    progress /
                    mission.target
                ) * 100;

            const claimed =
                claimedMissions.includes(
                    mission.id
                );

            const completed =
                progress >=
                mission.target;

            const reward =
                mission.rewardItem
                    ? accessories.find(
                        x =>
                            x.id ===
                            mission.rewardItem
                    )
                    : null;

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "mission" +
                (
                    completed
                        ? " completed"
                        : ""
                ) +
                (
                    claimed
                        ? " claimed"
                        : ""
                );

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
                            style="
                                width:${percentage}%
                            "
                        ></div>

                    </div>

                    <small>
                        ${progress} /
                        ${mission.target}
                    </small>

                </div>

                <div class="missionReward">

                    <div class="rewardItem">
                        🪙 +
                        ${mission.rewardCoins}
                    </div>

                    ${
                        reward
                            ? `
                                <div class="rewardItem">
                                    ${reward.icon}
                                    ${reward.name}
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
                    >
                        ${
                            claimed
                                ? "✓ CLAIMED"
                                : "CLAIM"
                        }
                    </button>

                </div>
            `;

            const claim =
                div.querySelector(
                    ".claimBtn"
                );

            claim.addEventListener(
                "click",
                () =>
                    claimMission(
                        mission.id
                    )
            );

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
        claimedMissions.includes(
            id
        )
    )
        return;

    const mission =
        missions.find(
            x =>
                x.id === id
        );

    if (!mission)
        return;

    if (
        getMissionProgress(
            mission
        ) <
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

function startGame(
    levelNumber
) {

    if (
        levelNumber >
        unlockedLevel
    ) {

        levelNumber =
            unlockedLevel;
    }

    if (levelNumber < 1)
        levelNumber = 1;

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
        "0";

    gameCoinsText.textContent =
        "0";

    resizeCanvas();

    player = {

        x:
            W * 0.25,

        y:
            H * 0.5,

        velocity:
            0,

        size:
            54,

        rotation:
            0
    };

    lastPipeTime =
        performance.now() -
        1000;

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
            event.code ===
                "Space" ||
            event.code ===
                "ArrowUp"
        ) {

            if (gameRunning) {

                event.preventDefault();

                jump();
            }
        }
    }
);


canvas.addEventListener(
    "mousedown",
    event => {

        if (gameRunning)
            jump();
    }
);


canvas.addEventListener(
    "touchstart",
    event => {

        if (gameRunning) {

            event.preventDefault();

            jump();
        }

    },
    {
        passive: false
    }
);


// ============================================================
// CREATE PIPE
// ============================================================

function createPipe() {

    const world =
        worlds[
            currentLevel - 1
        ];

    const minTop = 70;

    const maxTop =
        Math.max(
            minTop + 20,
            H -
            world.gap -
            120
        );

    const top =
        Math.random() *
        (
            maxTop -
            minTop
        ) +
        minTop;

    pipes.push({

        x:
            W + 80,

        width:
            82,

        top:
            top,

        bottom:
            top +
            world.gap,

        passed:
            false
    });

    coins.push({

        x:
            W + 121,

        y:
            top +
            world.gap / 2,

        radius:
            14,

        collected:
            false
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


    // --------------------------------------------------------
    // PLAYER
    // --------------------------------------------------------

    player.velocity +=
        world.gravity;

    player.y +=
        player.velocity;

    player.rotation =
        Math.max(
            -0.45,
            Math.min(
                0.8,
                player.velocity *
                0.055
            )
        );


    // --------------------------------------------------------
    // NEW PIPE
    // --------------------------------------------------------

    if (
        performance.now() -
        lastPipeTime >
        1450
    ) {

        createPipe();

        lastPipeTime =
            performance.now();
    }


    // --------------------------------------------------------
    // PIPES
    // --------------------------------------------------------

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
                }

                if (
                    score >
                    bestScore
                ) {

                    bestScore =
                        score;
                }

                if (
                    score >=
                    world.target
                ) {

                    completeLevel();
                }

                createParticles(
                    player.x,
                    player.y,
                    world.accent,
                    12
                );
            }
        }
    );


    // --------------------------------------------------------
    // COINS
    // --------------------------------------------------------

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

                createParticles(
                    coin.x,
                    coin.y,
                    "#ffe600",
                    18
                );

                saveData();
            }
        }
    );


    // --------------------------------------------------------
    // PARTICLES
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // CLEAN
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // BOUNDARY
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // PIPE COLLISION
    // --------------------------------------------------------

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

            x:
                x,

            y:
                y,

            vx:
                (
                    Math.random() -
                    0.5
                ) * 5,

            vy:
                (
                    Math.random() -
                    0.5
                ) * 5,

            size:
                Math.random() *
                5 +
                2,

            color:
                color,

            life:
                1
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
            (i % 5) * 0.1;

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
            (i * 157) % W,
            (i * 93) % H,
            30 +
                (i * 17) % 80,
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

            ctx.globalAlpha =
                1;
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

            ctx.shadowBlur =
                0;

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

    drawAccessoriesBehind(
        ctx,
        equippedAccessories
    );

    drawSkin(
        ctx,
        world.skin
    );

    drawAccessories(
        ctx,
        equippedAccessories
    );

    ctx.restore();
}


// ============================================================
// DRAW SKIN
// ============================================================

function drawSkin(
    drawingContext,
    skin
) {

    const oldCtx =
        window.__drawingContext;

    window.__drawingContext =
        drawingContext;


    if (skin === "pepe")
        drawPepe();

    if (skin === "shib")
        drawShib();

    if (skin === "doge")
        drawDoge();

    if (skin === "troll")
        drawTroll();

    if (skin === "sixtyseven")
        draw67();

    if (skin === "wif")
        drawWif();


    window.__drawingContext =
        oldCtx;
}


function getDrawContext() {

    return window.__drawingContext ||
        ctx;
}


// ============================================================
// ACCESSORIES BEHIND
// ============================================================

function drawAccessoriesBehind(
    c,
    equipped
) {

    // --------------------------------------------------------
    // DIAMOND AURA
    // --------------------------------------------------------

    if (
        equipped.aura ===
        "diamondAura"
    ) {

        c.save();

        c.shadowBlur = 25;

        c.shadowColor =
            "#ffffff";

        c.strokeStyle =
            "rgba(120,240,255,.8)";

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


    // --------------------------------------------------------
    // FIRE TRAIL
    // --------------------------------------------------------

    if (
        equipped.trail ===
        "fire"
    ) {

        c.save();

        for (
            let i = 0;
            i < 7;
            i++
        ) {

            c.fillStyle =
                i % 2
                    ? "#ffcc00"
                    : "#ff3b00";

            c.beginPath();

            c.arc(
                -30 -
                    i * 7,
                Math.sin(
                    performance.now() *
                    0.01 +
                    i
                ) * 8,
                5 +
                    Math.random() *
                    4,
                0,
                Math.PI * 2
            );

            c.fill();
        }

        c.restore();
    }


    // --------------------------------------------------------
    // LIGHTNING
    // --------------------------------------------------------

    if (
        equipped.trail ===
        "lightning"
    ) {

        c.save();

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
                -28 -
                    i * 10,
                0
            );

            c.lineTo(
                -40 -
                    i * 10,
                10
            );

            c.lineTo(
                -32 -
                    i * 10,
                14
            );

            c.lineTo(
                -45 -
                    i * 10,
                25
            );

            c.stroke();
        }

        c.restore();
    }


    // --------------------------------------------------------
    // RAINBOW
    // --------------------------------------------------------

    if (
        equipped.trail ===
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

        c.save();

        colors.forEach(
            (color, i) => {

                c.fillStyle =
                    color;

                c.beginPath();

                c.arc(
                    -30 -
                        i * 6,
                    Math.sin(
                        performance.now() *
                        0.01 +
                        i
                    ) * 10,
                    4,
                    0,
                    Math.PI * 2
                );

                c.fill();
            }
        );

        c.restore();
    }


    // --------------------------------------------------------
    // MONEY
    // --------------------------------------------------------

    if (
        equipped.trail ===
        "money"
    ) {

        c.save();

        c.fillStyle =
            "#5cff75";

        c.font =
            "bold 17px Arial";

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

        c.restore();
    }
}


// ============================================================
// ACCESSORIES OVER PLAYER
// ============================================================

function drawAccessories(
    c,
    equipped
) {

    // --------------------------------------------------------
    // HEAD
    // --------------------------------------------------------

    if (
        equipped.head ===
        "crown"
    ) {

        c.fillStyle =
            "#ffd21c";

        c.beginPath();

        c.moveTo(
            -20,
            -27
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
            -27
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


    // --------------------------------------------------------
    // FACE
    // --------------------------------------------------------

    if (
        equipped.face ===
            "sunglasses" ||
        equipped.face ===
            "goldGlasses"
    ) {

        const gold =
            equipped.face ===
            "goldGlasses";

        c.fillStyle =
            gold
                ? "#ffd700"
                : "#111";

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
            gold
                ? "#fff4a3"
                : "#777";

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


    // --------------------------------------------------------
    // CHAIN
    // --------------------------------------------------------

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
}


// ============================================================
// SKIN: PEPE
// ============================================================

function drawPepe() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#62b44b";

    c.beginPath();

    c.ellipse(
        0,
        5,
        27,
        24,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#76c957";

    c.beginPath();

    c.arc(
        0,
        -5,
        25,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#dff5d8";

    c.beginPath();

    c.arc(
        -9,
        -14,
        9,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -14,
        9,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        -9,
        -14,
        4,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -14,
        4,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#301c18";

    c.beginPath();

    c.ellipse(
        0,
        8,
        16,
        8,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#e87979";

    c.beginPath();

    c.ellipse(
        0,
        11,
        8,
        4,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#4f9e40";

    c.beginPath();

    c.ellipse(
        -23,
        12,
        11,
        7,
        -0.3,
        0,
        Math.PI * 2
    );

    c.fill();
}


// ============================================================
// SKIN: SHIB
// ============================================================

function drawShib() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#d77b32";

    c.beginPath();

    c.ellipse(
        0,
        6,
        27,
        22,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#e28a3b";

    c.beginPath();

    c.arc(
        0,
        -5,
        25,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#d36f2e";

    c.beginPath();

    c.moveTo(
        -20,
        -18
    );

    c.lineTo(
        -22,
        -38
    );

    c.lineTo(
        -8,
        -25
    );

    c.fill();

    c.beginPath();

    c.moveTo(
        20,
        -18
    );

    c.lineTo(
        22,
        -38
    );

    c.lineTo(
        8,
        -25
    );

    c.fill();

    c.fillStyle =
        "#fff0d2";

    c.beginPath();

    c.ellipse(
        0,
        5,
        16,
        12,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        -9,
        -10,
        3.5,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -10,
        3.5,
        0,
        Math.PI * 2
    );

    c.fill();

    c.beginPath();

    c.arc(
        0,
        3,
        5,
        0,
        Math.PI * 2
    );

    c.fill();

    c.strokeStyle =
        "#111";

    c.lineWidth = 2;

    c.beginPath();

    c.arc(
        0,
        5,
        7,
        0,
        Math.PI
    );

    c.stroke();

    c.fillStyle =
        "#b96329";

    c.beginPath();

    c.ellipse(
        -23,
        13,
        11,
        7,
        -0.3,
        0,
        Math.PI * 2
    );

    c.fill();
}


// ============================================================
// SKIN: DOGE
// ============================================================

function drawDoge() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#d49b55";

    c.fillRect(
        -9,
        15,
        18,
        15
    );

    c.fillStyle =
        "#dba45b";

    c.beginPath();

    c.ellipse(
        0,
        -2,
        25,
        30,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#b8793c";

    c.beginPath();

    c.moveTo(
        -18,
        -18
    );

    c.lineTo(
        -29,
        -35
    );

    c.lineTo(
        -8,
        -27
    );

    c.fill();

    c.beginPath();

    c.moveTo(
        18,
        -18
    );

    c.lineTo(
        29,
        -35
    );

    c.lineTo(
        8,
        -27
    );

    c.fill();

    c.fillStyle =
        "#f0c47b";

    c.beginPath();

    c.ellipse(
        0,
        8,
        16,
        12,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        -9,
        -8,
        4,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -8,
        4,
        0,
        Math.PI * 2
    );

    c.fill();

    c.beginPath();

    c.arc(
        0,
        4,
        5,
        0,
        Math.PI * 2
    );

    c.fill();

    c.strokeStyle =
        "#111";

    c.lineWidth = 2;

    c.beginPath();

    c.moveTo(
        0,
        8
    );

    c.lineTo(
        0,
        13
    );

    c.stroke();

    c.fillStyle =
        "#e44a38";

    c.fillRect(
        -18,
        17,
        36,
        6
    );
}


// ============================================================
// SKIN: TROLL
// ============================================================

function drawTroll() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#3dbb62";

    c.beginPath();

    c.ellipse(
        0,
        8,
        25,
        23,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#52d873";

    c.beginPath();

    c.ellipse(
        0,
        -5,
        26,
        29,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#35a853";

    c.beginPath();

    c.moveTo(
        -24,
        -18
    );

    for (
        let i = -24;
        i <= 24;
        i += 8
    ) {

        c.lineTo(
            i,
            -38 -
            Math.abs(
                i % 16
            )
        );
    }

    c.lineTo(
        24,
        -15
    );

    c.fill();

    c.fillStyle =
        "white";

    c.beginPath();

    c.ellipse(
        -9,
        -7,
        8,
        11,
        0,
        0,
        Math.PI * 2
    );

    c.ellipse(
        9,
        -7,
        8,
        11,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        -9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#2f8e4c";

    c.beginPath();

    c.arc(
        0,
        3,
        6,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#25152b";

    c.beginPath();

    c.ellipse(
        0,
        13,
        18,
        9,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "white";

    c.fillRect(
        -10,
        9,
        7,
        5
    );

    c.fillRect(
        3,
        9,
        7,
        5
    );
}


// ============================================================
// SKIN: 67
// ============================================================

function draw67() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#16b8d4";

    c.beginPath();

    c.roundRect(
        -25,
        -24,
        50,
        50,
        14
    );

    c.fill();

    c.fillStyle =
        "#071b35";

    c.beginPath();

    c.roundRect(
        -19,
        -15,
        38,
        27,
        9
    );

    c.fill();

    c.fillStyle =
        "#00eaff";

    c.fillRect(
        -13,
        -8,
        8,
        5
    );

    c.fillRect(
        5,
        -8,
        8,
        5
    );

    c.fillRect(
        -10,
        4,
        20,
        4
    );

    c.strokeStyle =
        "#00eaff";

    c.lineWidth = 2;

    c.beginPath();

    c.moveTo(
        -18,
        -24
    );

    c.lineTo(
        -10,
        -32
    );

    c.lineTo(
        10,
        -32
    );

    c.lineTo(
        18,
        -24
    );

    c.stroke();

    c.fillStyle =
        "#087da8";

    c.beginPath();

    c.moveTo(
        -20,
        5
    );

    c.lineTo(
        -39,
        15
    );

    c.lineTo(
        -20,
        20
    );

    c.fill();
}


// ============================================================
// SKIN: WIF
// ============================================================

function drawWif() {

    const c =
        getDrawContext();

    c.fillStyle =
        "#d89b55";

    c.beginPath();

    c.ellipse(
        0,
        8,
        26,
        22,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#e5aa61";

    c.beginPath();

    c.ellipse(
        0,
        -5,
        25,
        27,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#c98242";

    c.beginPath();

    c.moveTo(
        -17,
        -19
    );

    c.lineTo(
        -26,
        -34
    );

    c.lineTo(
        -6,
        -27
    );

    c.fill();

    c.beginPath();

    c.moveTo(
        17,
        -19
    );

    c.lineTo(
        26,
        -34
    );

    c.lineTo(
        6,
        -27
    );

    c.fill();

    c.fillStyle =
        "#ead9bd";

    c.beginPath();

    c.moveTo(
        -24,
        -25
    );

    c.lineTo(
        0,
        -38
    );

    c.lineTo(
        24,
        -25
    );

    c.lineTo(
        20,
        -18
    );

    c.lineTo(
        -20,
        -18
    );

    c.closePath();

    c.fill();

    c.fillStyle =
        "#d2bfa3";

    c.beginPath();

    c.ellipse(
        0,
        -18,
        29,
        7,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        -9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    c.arc(
        9,
        -5,
        4,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#f0c27b";

    c.beginPath();

    c.ellipse(
        0,
        7,
        14,
        10,
        0,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#111";

    c.beginPath();

    c.arc(
        0,
        5,
        4,
        0,
        Math.PI * 2
    );

    c.fill();

    c.fillStyle =
        "#ffcb55";

    c.fillRect(
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

    if (!gameRunning)
        return;

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

    gameFinished =
        true;

    gameRunning =
        false;


    if (
        score >
        bestScore
    ) {

        bestScore =
            score;
    }


    if (
        score >
        highestScore
    ) {

        highestScore =
            score;
    }


    saveData();

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

    gameFinished =
        true;

    gameRunning =
        false;

    completeScore.textContent =
        score;


    // --------------------------------------------------------
    // COUNT WORLD ONLY ONCE
    // --------------------------------------------------------

    const previousCompleted =
        Number(
            localStorage.getItem(
                "memeFlyCompletedLevel_" +
                currentLevel
            )
        ) || 0;

    if (!previousCompleted) {

        localStorage.setItem(
            "memeFlyCompletedLevel_" +
            currentLevel,
            "1"
        );

        completedWorlds++;

        if (
            completedWorlds >
            worlds.length
        ) {

            completedWorlds =
                worlds.length;
        }
    }


    // --------------------------------------------------------
    // UNLOCK NEXT WORLD
    // --------------------------------------------------------

    if (
        currentLevel ===
        unlockedLevel &&
        currentLevel <
        worlds.length
    ) {

        unlockedLevel =
            currentLevel + 1;
    }


    // --------------------------------------------------------
    // BEST
    // --------------------------------------------------------

    if (
        score >
        bestScore
    ) {

        bestScore =
            score;
    }


    if (
        score >
        highestScore
    ) {

        highestScore =
            score;
    }


    // --------------------------------------------------------
    // NEXT BUTTON
    // --------------------------------------------------------

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
// START
// ============================================================

showMenu();
