'use strict';

const CROP_DATA = {
    wheat: { name: 'Wheat', icon: '🌾', buyPrice: 3, value: 5, growTime: 30, rarity: 'common', unlock: 1 },
    corn: { name: 'Corn', icon: '🌽', buyPrice: 6, value: 10, growTime: 45, rarity: 'common', unlock: 1 },
    carrot: { name: 'Carrot', icon: '🥕', buyPrice: 12, value: 20, growTime: 60, rarity: 'uncommon', unlock: 2 },
    tomato: { name: 'Tomato', icon: '🍅', buyPrice: 22, value: 35, growTime: 90, rarity: 'uncommon', unlock: 3, multiHarvest: { regrowTime: 25, maxHarvests: 6 } },
    potato: { name: 'Potato', icon: '🥔', buyPrice: 45, value: 70, growTime: 120, rarity: 'rare', unlock: 5 },
    strawberry: { name: 'Strawberry', icon: '🍓', buyPrice: 70, value: 110, growTime: 150, rarity: 'rare', unlock: 6, multiHarvest: { regrowTime: 35, maxHarvests: 8 } },
    watermelon: { name: 'Watermelon', icon: '🍉', buyPrice: 150, value: 240, growTime: 200, rarity: 'epic', unlock: 8 },
    pumpkin: { name: 'Pumpkin', icon: '🎃', buyPrice: 250, value: 400, growTime: 300, rarity: 'epic', unlock: 10 },
    sunflower: { name: 'Sunflower', icon: '🌻', buyPrice: 600, value: 1000, growTime: 400, rarity: 'legendary', unlock: 12, multiHarvest: { regrowTime: 90, maxHarvests: 10 } },
    diamond: { name: 'Diamond Fruit', icon: '💎', buyPrice: 1200, value: 2000, growTime: 600, rarity: 'legendary', unlock: 15 },
    blueberry: { name: 'Blueberry Bush', icon: '🫐', buyPrice: 35, value: 18, growTime: 50, rarity: 'uncommon', unlock: 2, multiHarvest: { regrowTime: 20, maxHarvests: 12 } },
    chili: { name: 'Chili Pepper', icon: '🌶️', buyPrice: 28, value: 42, growTime: 70, rarity: 'uncommon', unlock: 4, multiHarvest: { regrowTime: 22, maxHarvests: 7 } },
    eggplant: { name: 'Eggplant', icon: '🍆', buyPrice: 55, value: 88, growTime: 110, rarity: 'rare', unlock: 6, multiHarvest: { regrowTime: 30, maxHarvests: 6 } },
    coconut: { name: 'Coconut Palm', icon: '🥥', buyPrice: 320, value: 60, growTime: 180, rarity: 'epic', unlock: 9, multiHarvest: { regrowTime: 60, maxHarvests: 15 } },
    dragonFruit: { name: 'Dragon Fruit', icon: '🐲', buyPrice: 800, value: 1300, growTime: 320, rarity: 'legendary', unlock: 13, multiHarvest: { regrowTime: 80, maxHarvests: 8 } },
    crystalCarrot: { name: 'Crystal Carrot', icon: '💠', buyPrice: 180, value: 280, growTime: 35, rarity: 'epic', unlock: 3, weatherBonus: { night: 1.3, rain: 1.2 } },
    solarCorn: { name: 'Solar Corn', icon: '🌞', buyPrice: 80, value: 120, growTime: 25, rarity: 'rare', unlock: 2, weatherBonus: { sunny: 1.4, thunderstorm: 1.2 } },
    moonBerry: { name: 'Moon Berry', icon: '🌙', buyPrice: 200, value: 320, growTime: 45, rarity: 'epic', unlock: 4, weatherBonus: { night: 1.5 }, multiHarvest: { regrowTime: 18, maxHarvests: 10 } },
    toxicTomato: { name: 'Toxic Tomato', icon: '☠️', buyPrice: 90, value: 140, growTime: 30, rarity: 'rare', unlock: 2, weatherBonus: { thunderstorm: 1.4 }, multiHarvest: { regrowTime: 15, maxHarvests: 6 } },
    goldenWheat: { name: 'Golden Wheat', icon: '🌾', buyPrice: 500, value: 850, growTime: 60, rarity: 'legendary', unlock: 6, weatherBonus: { sunny: 1.2, rain: 1.1 } },
    aquaMelon: { name: 'Aqua Melon', icon: '💧', buyPrice: 100, value: 160, growTime: 40, rarity: 'rare', unlock: 3, weatherBonus: { rain: 1.5, thunderstorm: 1.3 } },
    lavaBean: { name: 'Lava Bean', icon: '🔥', buyPrice: 550, value: 950, growTime: 70, rarity: 'legendary', unlock: 7, weatherBonus: { thunderstorm: 1.3, sunny: 1.2 } },
    ghostPumpkin: { name: 'Ghost Pumpkin', icon: '👻', buyPrice: 280, value: 450, growTime: 55, rarity: 'epic', unlock: 5, weatherBonus: { night: 1.4 } },
    electricPepper: { name: 'Electric Pepper', icon: '⚡', buyPrice: 85, value: 130, growTime: 28, rarity: 'rare', unlock: 2, weatherBonus: { thunderstorm: 1.6 }, multiHarvest: { regrowTime: 16, maxHarvests: 7 } },
    frostApple: { name: 'Frost Apple', icon: '🍎', buyPrice: 220, value: 360, growTime: 50, rarity: 'epic', unlock: 4, weatherBonus: { night: 1.2, rain: 1.1 }, multiHarvest: { regrowTime: 28, maxHarvests: 9 } },
    rainbowSeed: { name: 'Rainbow Seed', icon: '🌈', buyPrice: 1500, value: 2800, growTime: 90, rarity: 'mythic', unlock: 9, weatherBonus: { sunny: 1.1, rain: 1.1, thunderstorm: 1.1, night: 1.1 } },
    eventFlytrap: { name: 'Venus Flytrap', icon: '🪴', buyPrice: 0, value: 50, growTime: 20, rarity: 'common', unlock: 999, isEvent: true, multiHarvest: { regrowTime: 12, maxHarvests: 5 } },
    eventBloodRose: { name: 'Blood Rose', icon: '🌹', buyPrice: 0, value: 150, growTime: 40, rarity: 'uncommon', unlock: 999, isEvent: true, multiHarvest: { regrowTime: 18, maxHarvests: 6 } },
    eventAlienPod: { name: 'Alien Pod', icon: '👽', buyPrice: 0, value: 400, growTime: 60, rarity: 'rare', unlock: 999, isEvent: true },
    eventEyeTree: { name: 'Eye Tree', icon: '👁️', buyPrice: 0, value: 1000, growTime: 90, rarity: 'epic', unlock: 999, isEvent: true, multiHarvest: { regrowTime: 40, maxHarvests: 8 } },
    eventYggdrasil: { name: 'Yggdrasil', icon: '🌳', buyPrice: 0, value: 10000, growTime: 200, rarity: 'mythic', unlock: 999, isEvent: true, multiHarvest: { regrowTime: 100, maxHarvests: 12 } }
};

const MUTATION_DATA = {
    none: { multiplier: 1, icon: '' },
    wet: { multiplier: 2, icon: '💧' },
    golden: { multiplier: 5, icon: '✨' },
    rainbow: { multiplier: 20, icon: '🌈' },
    frozen: { multiplier: 8, icon: '❄️' }
};

const WEATHER_DATA = {
    sunny: { name: 'Sunny', icon: '☀️', growth: 1.0, mutation: 0.05 },
    rain: { name: 'Rain', icon: '🌧️', growth: 1.3, mutation: 0.15 },
    thunderstorm: { name: 'Storm', icon: '⛈️', growth: 1.5, mutation: 0.25 },
    night: { name: 'Night', icon: '🌙', growth: 0.8, mutation: 0.10 }
};

const UPGRADE_DATA = {
    fertilizer: { name: 'Premium Fertilizer', icon: '🧪', desc: '+20% growth speed', cost: 150, max: 5, mult: 2 },
    goldenSeeds: { name: 'Golden Seeds', icon: '🌟', desc: '+10% Golden mutation', cost: 300, max: 3, mult: 2.5 },
    wetSoil: { name: 'Moist Soil', icon: '💧', desc: '+15% Wet mutation', cost: 200, max: 3, mult: 2 },
    coldStorage: { name: 'Cold Storage', icon: '❄️', desc: '+8% Frozen mutation', cost: 500, max: 3, mult: 2.5 },
    rainbowGarden: { name: 'Rainbow Garden', icon: '🌈', desc: '+3% Rainbow mutation', cost: 2000, max: 2, mult: 3 },
    harvestBoost: { name: 'Harvest Boost', icon: '📈', desc: '+15% harvest value', cost: 600, max: 5, mult: 1.8 }
};

const PET_DATA = {
    bunny: { name: 'Lucky Bunny', icon: '🐰', desc: '+10% harvest value', cost: 2500 },
    owl: { name: 'Wise Owl', icon: '🦉', desc: '+15% XP gain', cost: 4000 },
    cat: { name: 'Garden Cat', icon: '🐱', desc: '+10% mutation chance', cost: 6000 },
    dog: { name: 'Loyal Dog', icon: '🐕', desc: '+10% growth speed', cost: 5500 },
    butterfly: { name: 'Magic Butterfly', icon: '🦋', desc: '+5% rainbow chance', cost: 12000 },
    dragon: { name: 'Garden Dragon', icon: '🐉', desc: '+10% all bonuses', cost: 30000 }
};

const XP_THRESHOLDS = [0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700, 3250, 3850, 4500, 5200, 6000, 7000];

const EVENT_SEASON_DURATION = 24 * 60 * 60 * 1000; // 24h thực mỗi mùa event
const EVENT_MILESTONES = [5, 15, 30, 50, 80, 120];
const HUNGRY_PLANT_COOLDOWN = 45 * 1000; // 45s thực giữa các lần plant xuất hiện

const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

// Mẫu nhiệm vụ: type quyết định cách tính tiến độ (xem updateQuestProgress)
const DAILY_QUEST_POOL = [
    { id: 'd_harvest_5', type: 'harvest', target: 5, desc: 'Thu hoạch 5 cây bất kỳ', icon: '🌾', points: 15 },
    { id: 'd_harvest_15', type: 'harvest', target: 15, desc: 'Thu hoạch 15 cây bất kỳ', icon: '🌾', points: 25 },
    { id: 'd_plant_5', type: 'plant', target: 5, desc: 'Trồng 5 hạt giống', icon: '🌱', points: 15 },
    { id: 'd_earn_200', type: 'earn', target: 200, desc: 'Kiếm 💰200 từ thu hoạch', icon: '💰', points: 20 },
    { id: 'd_buy_3', type: 'buySeed', target: 3, desc: 'Mua 3 hạt giống ở Shop', icon: '🏪', points: 15 },
    { id: 'd_feed_2', type: 'feedPlant', target: 2, desc: 'Cho Hungry Plant ăn 2 lần', icon: '👾', points: 20 },
    { id: 'd_mutation_1', type: 'mutation', target: 1, desc: 'Thu hoạch 1 cây có đột biến', icon: '✨', points: 20 },
    { id: 'd_multi_3', type: 'multiHarvest', target: 3, desc: 'Hái cây multi-harvest 3 lần', icon: '🔁', points: 20 }
];

const WEEKLY_QUEST_POOL = [
    { id: 'w_harvest_60', type: 'harvest', target: 60, desc: 'Thu hoạch 60 cây trong tuần', icon: '🌾', points: 80 },
    { id: 'w_earn_1500', type: 'earn', target: 1500, desc: 'Kiếm 💰1500 từ thu hoạch', icon: '💰', points: 100 },
    { id: 'w_level_2', type: 'levelGain', target: 2, desc: 'Lên 2 cấp trong tuần', icon: '⭐', points: 90 },
    { id: 'w_buy_15', type: 'buySeed', target: 15, desc: 'Mua 15 hạt giống', icon: '🏪', points: 70 },
    { id: 'w_feed_10', type: 'feedPlant', target: 10, desc: 'Cho Hungry Plant ăn 10 lần', icon: '👾', points: 90 },
    { id: 'w_multi_15', type: 'multiHarvest', target: 15, desc: 'Hái cây multi-harvest 15 lần', icon: '🔁', points: 90 }
];

const QUEST_PASS_TIERS = [
    { points: 50, reward: { money: 100 } },
    { points: 120, reward: { money: 200, seeds: { tomato: 2 } } },
    { points: 220, reward: { money: 350 } },
    { points: 350, reward: { money: 500, seeds: { strawberry: 2 } } },
    { points: 500, reward: { money: 800 } },
    { points: 700, reward: { money: 1200, seeds: { sunflower: 1 } } },
    { points: 950, reward: { money: 2000 } },
    { points: 1250, reward: { money: 3500, seeds: { dragonFruit: 1 } } }
];

function pickRandomQuests(pool, count) {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(q => ({ ...q, progress: 0, claimed: false }));
}

function makeDailyQuests() {
    return pickRandomQuests(DAILY_QUEST_POOL, 3);
}

function makeWeeklyQuests() {
    return pickRandomQuests(WEEKLY_QUEST_POOL, 3);
}

let gameState = {
    money: 50,
    level: 1,
    xp: 0,
    gardenSize: 9,
    plots: [],
    inventory: { wheat: 5, corn: 3, carrot: 0, tomato: 0, potato: 0, strawberry: 0, watermelon: 0, pumpkin: 0, sunflower: 0, diamond: 0, blueberry: 0, chili: 0, eggplant: 0, coconut: 0, dragonFruit: 0, crystalCarrot: 0, solarCorn: 0, moonBerry: 0, toxicTomato: 0, goldenWheat: 0, aquaMelon: 0, lavaBean: 0, ghostPumpkin: 0, electricPepper: 0, frostApple: 0, rainbowSeed: 0 },
    selectedSeed: null,
    upgrades: {},
    pets: [],
    weather: 'sunny',
    weatherTimer: 0,
    totalHarvested: 0,
    hungryPlant: {
        seed: null,
        cooldownUntil: 0,        // timestamp: khi nào plant mới có thể xuất hiện lại
        streak: 0,               // số lần feed liên tiếp không bị skip
        bestStreak: 0,
        feedPoints: 0,           // tích lũy điểm trong mùa hiện tại, dùng cho mốc thưởng
        milestonesClaimed: [],   // các mốc đã nhận thưởng trong mùa hiện tại
        seasonId: 1,             // số thứ tự mùa event
        seasonStart: Date.now(),
        totalFed: 0              // tổng số lần feed all-time
    },
    quests: {
        daily: makeDailyQuests(),
        weekly: makeWeeklyQuests(),
        dayStart: Date.now(),
        weekStart: Date.now(),
        passPoints: 0,
        passTiersClaimed: [],
        levelAtWeekStart: 1
    },
    seedsDiscovered: {},
    lastSave: Date.now()
};

let harvestQueue = [];

function ensureNumber(value, fallback) {
    const num = Number(value);
    return isNaN(num) || !isFinite(num) ? fallback : num;
}

function ensureAllSeedsExist() {
    if (!gameState.inventory) {
        gameState.inventory = {};
    }
    Object.keys(CROP_DATA).forEach(seedKey => {
        if (typeof gameState.inventory[seedKey] !== 'number') {
            gameState.inventory[seedKey] = 0;
        }
    });
    console.log('All seeds ensured in inventory:', Object.keys(CROP_DATA).length, 'seeds');
}

function init() {
    loadGame();
    calculateOfflineProgress();
    checkEventSeasonRollover();
    createPlots();
    renderAll();
    startGameLoop();
    setupEventListeners();
}

function loadGame() {
    try {
        const saved = localStorage.getItem('growGardenSave');
        if (saved) {
            const data = JSON.parse(saved);
            if (data && typeof data === 'object') {
                const defaultHungryPlant = gameState.hungryPlant;
                gameState = { ...gameState, ...data };
                gameState.plots = gameState.plots || [];
                gameState.upgrades = gameState.upgrades || {};
                gameState.pets = gameState.pets || [];
                // Migrate old/missing hungryPlant shape without losing new fields
                gameState.hungryPlant = { ...defaultHungryPlant, ...(data.hungryPlant || {}) };
                if (typeof gameState.hungryPlant.cooldownUntil !== 'number') gameState.hungryPlant.cooldownUntil = 0;
                if (typeof gameState.hungryPlant.streak !== 'number') gameState.hungryPlant.streak = 0;
                if (typeof gameState.hungryPlant.bestStreak !== 'number') gameState.hungryPlant.bestStreak = 0;
                if (typeof gameState.hungryPlant.feedPoints !== 'number') gameState.hungryPlant.feedPoints = 0;
                if (!Array.isArray(gameState.hungryPlant.milestonesClaimed)) gameState.hungryPlant.milestonesClaimed = [];
                if (typeof gameState.hungryPlant.seasonId !== 'number') gameState.hungryPlant.seasonId = 1;
                if (typeof gameState.hungryPlant.seasonStart !== 'number') gameState.hungryPlant.seasonStart = Date.now();
                if (typeof gameState.hungryPlant.totalFed !== 'number') gameState.hungryPlant.totalFed = 0;
                delete gameState.hungryPlant.active;
                delete gameState.hungryPlant.cooldown;
                const defaultQuests = { daily: makeDailyQuests(), weekly: makeWeeklyQuests(), dayStart: Date.now(), weekStart: Date.now(), passPoints: 0, passTiersClaimed: [], levelAtWeekStart: gameState.level || 1 };
                gameState.quests = { ...defaultQuests, ...(data.quests || {}) };
                if (!Array.isArray(gameState.quests.daily) || gameState.quests.daily.length === 0) gameState.quests.daily = makeDailyQuests();
                if (!Array.isArray(gameState.quests.weekly) || gameState.quests.weekly.length === 0) gameState.quests.weekly = makeWeeklyQuests();
                if (typeof gameState.quests.dayStart !== 'number') gameState.quests.dayStart = Date.now();
                if (typeof gameState.quests.weekStart !== 'number') gameState.quests.weekStart = Date.now();
                if (typeof gameState.quests.passPoints !== 'number') gameState.quests.passPoints = 0;
                if (!Array.isArray(gameState.quests.passTiersClaimed)) gameState.quests.passTiersClaimed = [];
                if (typeof gameState.quests.levelAtWeekStart !== 'number') gameState.quests.levelAtWeekStart = gameState.level || 1;
                gameState.inventory = gameState.inventory || { wheat: 5, corn: 3 };
                gameState.seedsDiscovered = gameState.seedsDiscovered || (data.seedsDiscovered || {});
                ensureAllSeedsExist();
                while (gameState.plots.length < gameState.gardenSize) {
                    gameState.plots.push(null);
                }
            }
        } else {
            for (let i = 0; i < gameState.gardenSize; i++) {
                gameState.plots.push(null);
            }
        }
    } catch (e) {
        console.error('Load error:', e);
        for (let i = 0; i < gameState.gardenSize; i++) {
            gameState.plots.push(null);
        }
    }
}

function saveGame() {
    try {
        gameState.lastSave = Date.now();
        localStorage.setItem('growGardenSave', JSON.stringify(gameState));
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, 'Game Saved!', 'success');
    } catch (e) {
        console.error('Save error:', e);
    }
}

function calculateOfflineProgress() {
    const now = Date.now();
    const elapsed = Math.min((now - gameState.lastSave) / 1000, 86400);
    if (elapsed < 60) return;

    let earned = 0;
    let count = 0;
    const gMult = getGrowthMultiplier();
    const wData = WEATHER_DATA[gameState.weather];

    gameState.plots.forEach(plot => {
        if (plot && plot.progress < 100) {
            const cData = CROP_DATA[plot.crop];
            const grown = elapsed * gMult * wData.growth;
            const effectiveGrowTime = plot.regrowing && cData.multiHarvest ? cData.multiHarvest.regrowTime : cData.growTime;
            plot.progress = Math.min(100, plot.progress + (grown / effectiveGrowTime) * 100);
            if (plot.progress >= 100) {
                if (plot.regrowing) plot.regrowing = false;
                const mData = MUTATION_DATA[plot.mutation];
                earned += Math.floor(cData.value * mData.multiplier * getHarvestMultiplier());
                count++;
            }
        }
    });

    if (earned > 0) {
        gameState.money = (gameState.money || 0) + earned;
        gameState.totalHarvested = (gameState.totalHarvested || 0) + count;
        showOfflineMessage(earned);
    }
}

function showOfflineMessage(amount) {
    const el = document.getElementById('offlineMessage');
    const amountEl = document.getElementById('offlineEarnings');
    if (el && amountEl) {
        amountEl.textContent = amount;
        el.style.display = 'block';
        setTimeout(() => el.style.display = 'none', 8000);
    }
}

function createPlots() {
    const grid = document.getElementById('gardenGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 0; i < gameState.gardenSize; i++) {
        const plot = document.createElement('div');
        plot.className = 'garden-plot empty';
        plot.dataset.index = i;
        plot.addEventListener('click', (e) => handlePlotClick(i, e));
        grid.appendChild(plot);
    }
}

let pendingDeleteCropIndex = null;

function handlePlotClick(index, event) {
    const plot = gameState.plots[index];
    const isMulti = plot && CROP_DATA[plot.crop]?.multiHarvest;

    if (event && event.shiftKey && plot && isMulti) {
        openDeleteCropModal(index);
        return;
    }

    if (plot && plot.regrowing) {
        // Cây multi-harvest đang chờ mọc lại, không làm gì khi click thường
        return;
    } else if (plot && plot.progress >= 100) {
        harvestPlot(index);
    } else if (!plot && gameState.selectedSeed && getInventoryCount(gameState.selectedSeed) > 0) {
        plantSeed(index, gameState.selectedSeed);
    }
    renderGarden();
}

function openDeleteCropModal(index) {
    const plot = gameState.plots[index];
    if (!plot) return;
    const cData = CROP_DATA[plot.crop];
    pendingDeleteCropIndex = index;
    document.getElementById('deleteCropText').textContent = `Xóa ${cData.icon} ${cData.name} đang trồng tại ô này? Cây đã hái ${plot.harvestCount || 0} lần sẽ mất hoàn toàn.`;
    document.getElementById('deleteCropModal').classList.add('active');
}

function confirmDeleteCrop() {
    if (pendingDeleteCropIndex === null) return;
    gameState.plots[pendingDeleteCropIndex] = null;
    pendingDeleteCropIndex = null;
    document.getElementById('deleteCropModal').classList.remove('active');
    renderAll();
}

function getInventoryCount(seed) {
    const count = gameState.inventory[seed];
    return typeof count === 'number' ? count : 0;
}

function markSeedOwned(key) {
    if (!gameState.seedsDiscovered) gameState.seedsDiscovered = {};
    gameState.seedsDiscovered[key] = true;
}

function plantSeed(index, cropKey) {
    const mutation = calculateMutation();
    gameState.plots[index] = {
        crop: cropKey,
        planted: Date.now(),
        progress: 0,
        mutation: mutation,
        harvestCount: 0
    };
    gameState.inventory[cropKey] = Math.max(0, (gameState.inventory[cropKey] || 1) - 1);
    if (getInventoryCount(cropKey) <= 0) {
        gameState.selectedSeed = null;
    }
    updateQuestProgress('plant', 1);
    const plotEl = document.querySelectorAll('.garden-plot')[index];
    if (plotEl) {
        const rect = plotEl.getBoundingClientRect();
        showFloatingText(rect.left + rect.width / 2, rect.top, 'Planted!', 'xp');
    }
    renderAll();
}

function calculateMutation() {
    const rand = Math.random();
    const wData = WEATHER_DATA[gameState.weather];
    let chance = wData.mutation;
    const u = gameState.upgrades;
    chance += (u.wetSoil?.level || 0) * 0.05;
    chance += (u.goldenSeeds?.level || 0) * 0.02;
    chance += (u.coldStorage?.level || 0) * 0.02;
    chance += (u.rainbowGarden?.level || 0) * 0.01;
    chance += getPetBonus('mutation');
    if (rand < chance * 0.3) return 'wet';
    if (rand < chance * 0.4) return 'golden';
    if (rand < chance * 0.45) return 'frozen';
    if (rand < chance * 0.48) return 'rainbow';
    return 'none';
}

function harvestPlot(index) {
    const plot = gameState.plots[index];
    if (!plot || plot.progress < 100) return;
    const cData = CROP_DATA[plot.crop];
    const mData = MUTATION_DATA[plot.mutation];
    let weatherBonus = 1;
    if (cData.weatherBonus && cData.weatherBonus[gameState.weather]) {
        weatherBonus = cData.weatherBonus[gameState.weather];
    }
    let value = Math.floor(cData.value * mData.multiplier * getHarvestMultiplier() * weatherBonus);
    gameState.money = (gameState.money || 0) + value;
    gameState.totalHarvested = (gameState.totalHarvested || 0) + 1;
    const xpGain = Math.floor(cData.value / 2 * (1 + getPetBonus('xp')));
    addXP(xpGain);

    const isMulti = !!cData.multiHarvest;
    const newHarvestCount = (plot.harvestCount || 0) + 1;

    if (isMulti && newHarvestCount < cData.multiHarvest.maxHarvests) {
        // Cây multi-harvest: mọc lại thay vì biến mất
        gameState.plots[index] = {
            crop: plot.crop,
            planted: Date.now(),
            progress: 0,
            mutation: calculateMutation(),
            harvestCount: newHarvestCount,
            maxHarvestsTotal: cData.multiHarvest.maxHarvests,
            regrowing: true,
            regrowStart: Date.now()
        };
    } else {
        gameState.plots[index] = null;
    }

    updateQuestProgress('harvest', 1);
    updateQuestProgress('earn', value);
    if (plot.mutation && plot.mutation !== 'none') updateQuestProgress('mutation', 1);
    if (isMulti && newHarvestCount > 1) updateQuestProgress('multiHarvest', 1);

    const plotEl = document.querySelectorAll('.garden-plot')[index];
    if (plotEl) {
        const rect = plotEl.getBoundingClientRect();
        showFloatingText(rect.left + rect.width / 2, rect.top, `+$${value}`, 'money');
    }
    harvestQueue.push({ name: cData.name, icon: cData.icon, mutation: plot.mutation, value: value });
    showHarvestModal();
    renderAll();
}

function addXP(amount) {
    gameState.xp = (gameState.xp || 0) + amount;
    while (gameState.level < XP_THRESHOLDS.length - 1 && gameState.xp >= XP_THRESHOLDS[gameState.level + 1]) {
        gameState.level++;
        updateQuestProgress('levelGain', 1);
    }
}

function getGrowthMultiplier() {
    let m = 1;
    m += (gameState.upgrades.fertilizer?.level || 0) * 0.2;
    m += getPetBonus('growth');
    return m;
}

function getHarvestMultiplier() {
    let m = 1;
    m += (gameState.upgrades.harvestBoost?.level || 0) * 0.15;
    m += getPetBonus('harvest');
    m += getPetBonus('all');
    return m;
}

function getPetBonus(type) {
    let bonus = 0;
    (gameState.pets || []).forEach(p => {
        const pd = PET_DATA[p];
        if (pd) {
            if (type === 'harvest' && p === 'bunny') bonus += 0.1;
            if (type === 'xp' && p === 'owl') bonus += 0.15;
            if (type === 'mutation' && p === 'cat') bonus += 0.1;
            if (type === 'growth' && p === 'dog') bonus += 0.1;
            if (type === 'rainbow' && p === 'butterfly') bonus += 0.05;
            if (type === 'all' && p === 'dragon') bonus += 0.1;
        }
    });
    return bonus;
}

function showHarvestModal() {
    const modal = document.getElementById('harvestModal');
    const list = document.getElementById('harvestList');
    const total = document.getElementById('harvestTotal');
    if (!modal || !list || !total) return;
    list.innerHTML = '';
    let sum = 0;
    harvestQueue.forEach(item => {
        sum += item.value;
        const div = document.createElement('div');
        div.className = 'harvest-item';
        div.innerHTML = `
            <span class="item-name-flex">${item.icon} ${item.name} ${item.mutation !== 'none' ? `<span class="mutation-icon">${MUTATION_DATA[item.mutation].icon}</span>` : ''}</span>
            <span class="item-value">$${item.value}</span>
        `;
        list.appendChild(div);
    });
    total.textContent = `💰${sum}`;
    modal.classList.add('active');
}

document.getElementById('collectBtn')?.addEventListener('click', () => {
    document.getElementById('harvestModal')?.classList.remove('active');
    harvestQueue = [];
});

function showFloatingText(x, y, text, type) {
    const container = document.getElementById('floatingContainer');
    if (!container) return;
    const el = document.createElement('div');
    el.className = `floating-text ${type}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 1400);
}

function startGameLoop() {
    setInterval(() => {
        updateWeather();
        updateGrowth();
        updateHungryPlant();
        renderGarden();
    }, 1000);

    setInterval(() => {
        resetDailyQuestsIfNeeded();
        resetWeeklyQuestsIfNeeded();
        renderQuests();
    }, 10000);
}

function updateWeather() {
    gameState.weatherTimer = (gameState.weatherTimer || 0) + 1;
    if (gameState.weatherTimer >= 60) {
        gameState.weatherTimer = 0;
        const keys = Object.keys(WEATHER_DATA);
        const idx = keys.indexOf(gameState.weather);
        gameState.weather = keys[(idx + 1) % keys.length];
        renderWeather();
    }
}

function updateGrowth() {
    const gMult = getGrowthMultiplier();
    const wData = WEATHER_DATA[gameState.weather];
    const currentWeather = gameState.weather;
    gameState.plots.forEach(plot => {
        if (plot && plot.progress < 100) {
            const cData = CROP_DATA[plot.crop];
            let weatherBonus = 1;
            if (cData.weatherBonus && cData.weatherBonus[currentWeather]) {
                weatherBonus = cData.weatherBonus[currentWeather];
            }
            const effectiveGrowTime = plot.regrowing && cData.multiHarvest ? cData.multiHarvest.regrowTime : cData.growTime;
            const perSec = (100 / effectiveGrowTime) * gMult * wData.growth * weatherBonus;
            plot.progress = Math.min(100, plot.progress + perSec);
            if (plot.progress >= 100 && plot.regrowing) {
                plot.regrowing = false;
            }
        }
    });
}

function renderAll() {
    renderMoney();
    renderLevel();
    renderWeather();
    renderSelectedSeed();
    renderGarden();
    renderStats();
    renderShop();
    renderInventory();
    renderSeedIndex();
    renderUpgrades();
    renderExpansion();
    renderPets();
    renderHungryPlant();
    renderQuests();
}

function renderMoney() {
    const el = document.getElementById('moneyValue');
    if (el) el.textContent = typeof gameState.money === 'number' ? gameState.money : 0;
}

function renderLevel() {
    const levelEl = document.getElementById('levelValue');
    const xpEl = document.getElementById('xpFill');
    if (levelEl) levelEl.textContent = gameState.level || 1;
    if (xpEl) {
        const curr = gameState.xp || 0;
        const prev = XP_THRESHOLDS[gameState.level - 1] || 0;
        const next = XP_THRESHOLDS[gameState.level] || XP_THRESHOLDS[XP_THRESHOLDS.length - 1];
        const pct = Math.min(100, Math.max(0, ((curr - prev) / (next - prev)) * 100));
        xpEl.style.width = `${pct}%`;
    }
}

function renderWeather() {
    const wData = WEATHER_DATA[gameState.weather];
    const iconEl = document.getElementById('weatherIcon');
    const textEl = document.getElementById('weatherText');
    if (iconEl) iconEl.textContent = wData.icon;
    if (textEl) textEl.textContent = wData.name;
}

function renderSelectedSeed() {
    const el = document.getElementById('selectedSeedDisplay');
    if (el) {
        if (gameState.selectedSeed) {
            const cData = CROP_DATA[gameState.selectedSeed];
            const count = getInventoryCount(gameState.selectedSeed);
            el.textContent = `${cData.icon} ${cData.name} (${count})`;
        } else {
            el.textContent = 'None';
        }
    }
}

function renderGarden() {
    const plots = document.querySelectorAll('.garden-plot');

    plots.forEach((plot, i) => {
        const data = gameState.plots[i];
        plot.className = 'garden-plot';
        if (!data) {
            plot.classList.add('empty');
            plot.innerHTML = '';
        } else {
            const cData = CROP_DATA[data.crop];
            const mData = MUTATION_DATA[data.mutation];
            const isMulti = !!cData.multiHarvest;
            if (isMulti) plot.classList.add('multi-harvest-plot');
            if (data.regrowing) plot.classList.add('regrowing');

            let html = `<span class="plot-crop ${data.mutation !== 'none' ? 'mutation-' + data.mutation : ''}">${cData.icon}</span>`;
            if (data.progress < 100) {
                html += `<div class="plot-progress"><div class="progress-fill${data.regrowing ? ' regrow-fill' : ''}" style="width: ${data.progress}%"></div></div>`;
            } else {
                plot.classList.add('ready');
            }
            if (data.mutation !== 'none') {
                html += `<span class="plot-mutation mutation-${data.mutation}">${mData.icon}</span>`;
            }
            if (isMulti) {
                html += `<span class="multi-harvest-badge" title="Multi-Harvest · Shift+Click để xóa">🔁 ${data.harvestCount || 0}/${cData.multiHarvest.maxHarvests}</span>`;
            }
            plot.innerHTML = html;
            plot.title = isMulti ? 'Cây Multi-Harvest — Shift+Click để xóa cây' : '';
        }
    });

    renderStats();
}

function renderStats() {
    const growing = document.getElementById('growingStat');
    const ready = document.getElementById('readyStat');
    const harvested = document.getElementById('harvestedStat');
    if (growing) {
        const growCount = gameState.plots.filter(p => p && p.progress < 100).length;
        growing.textContent = growCount;
    }
    if (ready) {
        const readyCount = gameState.plots.filter(p => p && p.progress >= 100).length;
        ready.textContent = readyCount;
    }
    if (harvested) harvested.textContent = gameState.totalHarvested || 0;
}

function renderShop() {
    const grid = document.getElementById('seedShopGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const currentMoney = ensureNumber(gameState.money, 0);
    const playerLevel = gameState.level || 1;
    let renderedCount = 0;
    Object.entries(CROP_DATA).forEach(([key, cData]) => {
        const unlockLevel = cData.unlock || 1;
        if (unlockLevel > playerLevel || cData.isEvent) return;
        renderedCount++;
        const owned = getInventoryCount(key);
        const buyPrice = ensureNumber(cData.buyPrice, 0);
        const sellValue = ensureNumber(cData.value, 0);
        const canAfford = currentMoney >= buyPrice;
        const item = document.createElement('div');
        item.className = 'shop-item';
        if (gameState.selectedSeed === key) item.classList.add('selected');
        const multiTag = cData.multiHarvest ? `<span class="item-multi-tag" title="Hái lại được ${cData.multiHarvest.maxHarvests} lần, mọc lại sau ${cData.multiHarvest.regrowTime}s">🔁 Multi x${cData.multiHarvest.maxHarvests}</span>` : '';
        if (owned > 0) {
            item.innerHTML = `
                <span class="item-icon">${cData.icon}</span>
                <span class="item-name">${cData.name}</span>
                <span class="item-rarity rarity-${cData.rarity}">${cData.rarity}</span>
                ${multiTag}
                <span class="item-price">Buy: 💰${buyPrice} | Sell: 💰${sellValue}</span>
                <span class="item-info">⏱️ ${cData.growTime}s | 📦 ${owned}</span>
                <button class="btn-buy ${!canAfford ? 'cant-afford' : ''}">${canAfford ? `Buy +1 - 💰${buyPrice}` : `Need 💰${buyPrice}`}</button>
            `;
            const btn = item.querySelector('button');
            btn?.addEventListener('click', (e) => {
                e.stopPropagation();
                purchaseSeed(key);
            });
        } else {
            const cantAffordClass = !canAfford ? 'cant-afford' : '';
            const btnText = canAfford ? `Buy - 💰${buyPrice}` : `Need 💰${buyPrice}`;
            item.innerHTML = `
                <span class="item-icon">${cData.icon}</span>
                <span class="item-name">${cData.name}</span>
                <span class="item-rarity rarity-${cData.rarity}">${cData.rarity}</span>
                ${multiTag}
                <span class="item-price">Buy: 💰${buyPrice} | Sell: 💰${sellValue}</span>
                <span class="item-info">⏱️ ${cData.growTime}s | 📦 ${owned}</span>
                <button class="btn-buy ${cantAffordClass}">${btnText}</button>
            `;
            const btn = item.querySelector('button');
            btn?.addEventListener('click', (e) => {
                e.stopPropagation();
                purchaseSeed(key);
            });
        }
        grid.appendChild(item);
    });
    console.log(`[Shop] Rendered ${renderedCount}/${Object.keys(CROP_DATA).length} seeds for level ${playerLevel}`);
}

function renderSeedIndex() {
    const grid = document.getElementById('seedIndexGrid');
    const statsEl = document.getElementById('indexStats');
    if (!grid) return;
    grid.innerHTML = '';

    const allKeys = Object.keys(CROP_DATA);
    const ownedKeys = allKeys.filter(k => gameState.seedsDiscovered && gameState.seedsDiscovered[k]);

    if (statsEl) {
        statsEl.innerHTML = `<strong>${ownedKeys.length}</strong> / ${allKeys.length} hạt giống đã sở hữu`;
    }

    allKeys.forEach(key => {
        const cData = CROP_DATA[key];
        const owned = gameState.seedsDiscovered && gameState.seedsDiscovered[key];
        const item = document.createElement('div');
        item.className = 'shop-item index-item' + (owned ? ' owned-item' : ' not-owned-item');
        const multiTag = cData.multiHarvest ? `<span class="item-multi-tag" title="Hái lại được ${cData.multiHarvest.maxHarvests} lần, mọc lại sau ${cData.multiHarvest.regrowTime}s">🔁 Multi x${cData.multiHarvest.maxHarvests}</span>` : '';
        const eventTag = cData.isEvent ? `<span class="item-event-tag">🎊 Event</span>` : '';
        item.innerHTML = `
            <span class="item-icon">${owned ? cData.icon : '❓'}</span>
            <span class="item-name">${owned ? cData.name : '???'}</span>
            <span class="item-rarity rarity-${cData.rarity}">${cData.rarity}</span>
            ${eventTag}
            ${multiTag}
            <span class="item-info">⏱️ ${cData.growTime}s grow${cData.multiHarvest ? ' / ' + cData.multiHarvest.regrowTime + 's regrow' : ''}</span>
            <span class="index-owned-badge ${owned ? 'is-owned' : 'is-not-owned'}">${owned ? '✅ Đã sở hữu' : '🔒 Chưa sở hữu'}</span>
        `;
        grid.appendChild(item);
    });
}

function purchaseSeed(key) {
    const cData = CROP_DATA[key];
    if (!cData) {
        console.error('Invalid crop key:', key);
        return;
    }
    const price = ensureNumber(cData.buyPrice, 0);
    const currentMoney = ensureNumber(gameState.money, 0);
    if (price <= 0) {
        console.error('Invalid price:', price);
        return;
    }
    if (currentMoney >= price) {
        gameState.money = currentMoney - price;
        gameState.inventory[key] = ensureNumber(gameState.inventory[key], 0) + 1;
        markSeedOwned(key);
        updateQuestProgress('buySeed', 1);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `-$${price}`, 'money');
        console.log('Purchased seed:', key, 'Price:', price, 'Remaining:', gameState.money);
        renderAll();
    } else {
        console.log('Cannot afford seed:', key, 'Price:', price, 'Have:', currentMoney);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `Need $${price - currentMoney} more!`, 'money');
    }
}

let deleteModeActive = false;
let deleteModeSelection = new Set();

function toggleDeleteMode() {
    deleteModeActive = !deleteModeActive;
    deleteModeSelection.clear();
    renderInventory();
}

function toggleSeedSelection(key) {
    if (deleteModeSelection.has(key)) deleteModeSelection.delete(key);
    else deleteModeSelection.add(key);
    renderInventory();
}

function deleteSelectedSeeds() {
    if (deleteModeSelection.size === 0) return;
    deleteModeSelection.forEach(key => {
        gameState.inventory[key] = 0;
        if (gameState.selectedSeed === key) gameState.selectedSeed = null;
    });
    deleteModeSelection.clear();
    deleteModeActive = false;
    document.getElementById('deleteSelectedModal')?.classList.remove('active');
    renderAll();
}

function openDeleteSelectedModal() {
    if (deleteModeSelection.size === 0) return;
    const names = [...deleteModeSelection].map(k => CROP_DATA[k]?.icon || '').join(' ');
    document.getElementById('deleteSelectedText').textContent = `Xoá ${deleteModeSelection.size} loại hạt giống đã chọn? ${names}`;
    document.getElementById('deleteSelectedModal')?.classList.add('active');
}

function deleteAllSeeds() {
    const keep = gameState.selectedSeed;
    Object.keys(gameState.inventory).forEach(key => {
        if (key !== keep) gameState.inventory[key] = 0;
    });
    deleteModeSelection.clear();
    deleteModeActive = false;
    document.getElementById('deleteAllSeedsModal')?.classList.remove('active');
    renderAll();
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const toggleBtn = document.getElementById('toggleDeleteModeBtn');
    const actionsBar = document.getElementById('deleteModeActions');
    if (toggleBtn) {
        toggleBtn.textContent = deleteModeActive ? '✖️ Hủy chọn' : '🗑️ Chọn để xoá';
        toggleBtn.classList.toggle('active', deleteModeActive);
    }
    if (actionsBar) actionsBar.style.display = deleteModeActive ? 'flex' : 'none';
    const confirmSelBtn = document.getElementById('confirmDeleteSelectedBtn');
    if (confirmSelBtn) confirmSelBtn.disabled = deleteModeSelection.size === 0;
    const selCountEl = document.getElementById('deleteSelectedCount');
    if (selCountEl) selCountEl.textContent = deleteModeSelection.size;

    let hasItems = false;
    Object.entries(gameState.inventory).forEach(([key, count]) => {
        if (typeof count === 'number' && count > 0) {
            hasItems = true;
            const cData = CROP_DATA[key];
            if (!cData) return;
            const item = document.createElement('div');
            item.className = 'shop-item inv-item';
            if (!deleteModeActive && gameState.selectedSeed === key) item.classList.add('selected');
            if (deleteModeActive && deleteModeSelection.has(key)) item.classList.add('marked-delete');
            item.innerHTML = `
                ${deleteModeActive ? '<span class="inv-check">' + (deleteModeSelection.has(key) ? '✅' : '⬜') + '</span>' : ''}
                <span class="item-icon">${cData.icon}</span>
                <span class="item-name">${cData.name}</span>
                <span class="item-owned">x${count}</span>
            `;
            item.addEventListener('click', () => {
                if (deleteModeActive) {
                    toggleSeedSelection(key);
                } else {
                    gameState.selectedSeed = key;
                    renderAll();
                }
            });
            grid.appendChild(item);
        }
    });
    if (!hasItems) {
        grid.innerHTML = '<p style="color:#666;grid-column:1/-1;text-align:center;">Chưa có hạt giống nào. Ghé Shop để mua nhé!</p>';
    }
}

function renderUpgrades() {
    const grid = document.getElementById('upgradesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const currentMoney = ensureNumber(gameState.money, 0);
    Object.entries(UPGRADE_DATA).forEach(([key, uData]) => {
        const current = gameState.upgrades[key]?.level || 0;
        const maxed = current >= uData.max;
        const cost = Math.floor(uData.cost * Math.pow(uData.mult, current));
        const canAfford = currentMoney >= cost;
        const item = document.createElement('div');
        item.className = 'shop-item';
        if (maxed) item.classList.add('disabled');
        if (!maxed && !canAfford) item.classList.add('cant-afford');
        item.innerHTML = `
            <span class="item-icon">${uData.icon}</span>
            <span class="item-name">${uData.name}</span>
            <span class="item-info">${uData.desc}</span>
            <span class="item-price">${maxed ? '<span class="item-owned">MAX</span>' : (canAfford ? '💰' + cost : 'Need 💰' + cost)}</span>
            <span class="upgrade-level">${current}/${uData.max}</span>
        `;
        if (!maxed) {
            item.addEventListener('click', () => purchaseUpgrade(key));
        }
        grid.appendChild(item);
    });
}

function purchaseUpgrade(key) {
    const uData = UPGRADE_DATA[key];
    if (!uData) {
        console.error('Invalid upgrade key:', key);
        return;
    }
    const current = gameState.upgrades[key]?.level || 0;
    const cost = Math.floor(uData.cost * Math.pow(uData.mult, current));
    const safeCost = ensureNumber(cost, 0);
    const currentMoney = ensureNumber(gameState.money, 0);
    if (safeCost <= 0) {
        console.error('Invalid cost:', safeCost);
        return;
    }
    if (currentMoney >= safeCost) {
        gameState.money = currentMoney - safeCost;
        gameState.upgrades[key] = { level: current + 1 };
        console.log('Purchased upgrade:', key, 'Cost:', safeCost, 'Remaining:', gameState.money);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, 'Upgrade!', 'success');
        renderAll();
    } else {
        console.log('Cannot afford upgrade:', key, 'Cost:', safeCost, 'Have:', currentMoney);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `Need $${safeCost - currentMoney} more!`, 'money');
    }
}

function renderExpansion() {
    const panel = document.getElementById('expansionPanel');
    if (!panel) return;
    const current = gameState.gardenSize || 9;
    const nextSize = Math.floor((Math.sqrt(current) + 1) ** 2);
    const cost = Math.floor(1000 * Math.pow(1.5, Math.sqrt(current) - 2));
    const safeCost = ensureNumber(cost, 0);
    const currentMoney = ensureNumber(gameState.money, 0);
    const canAfford = currentMoney >= safeCost;
    panel.innerHTML = `
        <div class="expansion-card">
            <div class="expansion-current">Current: ${current} plots</div>
            <button class="btn-buy ${!canAfford ? 'cant-afford' : ''}" id="expandBtn">Expand to ${nextSize} - 💰${safeCost}</button>
        </div>
    `;
    panel.querySelector('#expandBtn')?.addEventListener('click', () => purchaseExpansion(safeCost, nextSize));
}

function purchaseExpansion(cost, newSize) {
    if (typeof cost !== 'number' || cost <= 0) return;
    if ((gameState.money || 0) >= cost) {
        gameState.money -= cost;
        while (gameState.plots.length < newSize) {
            gameState.plots.push(null);
        }
        gameState.gardenSize = newSize;
        createPlots();
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, 'Expanded!', 'success');
        renderAll();
    }
}

function renderPets() {
    const ownedGrid = document.getElementById('ownedPetsGrid');
    const shopGrid = document.getElementById('petShopGrid');
    const currentMoney = ensureNumber(gameState.money, 0);
    if (ownedGrid) {
        ownedGrid.innerHTML = '';
        const pets = gameState.pets || [];
        if (pets.length === 0) {
            ownedGrid.innerHTML = '<p style="color:#666;grid-column:1/-1;text-align:center;">No pets yet</p>';
        } else {
            pets.forEach(p => {
                const pd = PET_DATA[p];
                if (pd) {
                    const item = document.createElement('div');
                    item.className = 'shop-item';
                    item.innerHTML = `
                        <span class="item-icon">${pd.icon}</span>
                        <span class="item-name">${pd.name}</span>
                        <span class="item-info">${pd.desc}</span>
                        <span class="pet-owned-badge">✓ Owned</span>
                    `;
                    ownedGrid.appendChild(item);
                }
            });
        }
    }
    if (shopGrid) {
        shopGrid.innerHTML = '';
        Object.entries(PET_DATA).forEach(([key, pd]) => {
            if (!pd) return;
            const owned = (gameState.pets || []).includes(key);
            const cost = ensureNumber(pd.cost, 0);
            const canAfford = currentMoney >= cost;
            const item = document.createElement('div');
            item.className = 'shop-item';
            if (owned) item.classList.add('disabled');
            if (!owned && !canAfford) item.classList.add('cant-afford');
            if (owned) {
                item.innerHTML = `
                    <span class="item-icon">${pd.icon}</span>
                    <span class="item-name">${pd.name}</span>
                    <span class="item-info">${pd.desc}</span>
                    <span class="item-owned">Owned</span>
                `;
            } else {
                const btnText = canAfford ? `Buy - 💰${cost}` : `Need 💰${cost}`;
                item.innerHTML = `
                    <span class="item-icon">${pd.icon}</span>
                    <span class="item-name">${pd.name}</span>
                    <span class="item-info">${pd.desc}</span>
                    <button class="btn-buy ${!canAfford ? 'cant-afford' : ''}">${btnText}</button>
                `;
                item.querySelector('button')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    purchasePet(key);
                });
            }
            shopGrid.appendChild(item);
        });
    }
}

function purchasePet(key) {
    const pd = PET_DATA[key];
    if (!pd) {
        console.error('Invalid pet key:', key);
        return;
    }
    const cost = ensureNumber(pd.cost, 0);
    const currentMoney = ensureNumber(gameState.money, 0);
    if (cost <= 0) {
        console.error('Invalid cost:', cost);
        return;
    }
    if (currentMoney >= cost) {
        gameState.money = currentMoney - cost;
        gameState.pets = gameState.pets || [];
        gameState.pets.push(key);
        console.log('Purchased pet:', key, 'Cost:', cost, 'Remaining:', gameState.money);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `${pd.name}!`, 'success');
        renderAll();
    } else {
        console.log('Cannot afford pet:', key, 'Cost:', cost, 'Have:', currentMoney);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `Need $${cost - currentMoney} more!`, 'money');
    }
}

function checkEventSeasonRollover() {
    const hp = gameState.hungryPlant;
    const now = Date.now();
    if (now - hp.seasonStart >= EVENT_SEASON_DURATION) {
        // Mùa mới: reset điểm/mốc nhưng giữ lại thống kê all-time
        hp.seasonId = (hp.seasonId || 1) + 1;
        hp.seasonStart = now;
        hp.feedPoints = 0;
        hp.milestonesClaimed = [];
        hp.streak = 0;
    }
}

function getEventSeasonTimeLeft() {
    const hp = gameState.hungryPlant;
    const elapsed = Date.now() - hp.seasonStart;
    return Math.max(0, EVENT_SEASON_DURATION - elapsed);
}

function formatCountdown(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

function updateHungryPlant() {
    const hp = gameState.hungryPlant;
    if (!hp) return;

    checkEventSeasonRollover();

    const now = Date.now();
    if (!hp.seed && now >= (hp.cooldownUntil || 0)) {
        const playerLevel = gameState.level || 1;
        // Ưu tiên seed mà người chơi ĐANG SỞ HỮU để feed bớt khó chịu,
        // nếu không có gì trong kho thì mới rơi vào pool theo level (tỉ lệ thấp hơn).
        const unlockedAll = Object.keys(CROP_DATA).filter(k => CROP_DATA[k].unlock <= playerLevel && !CROP_DATA[k].isEvent);
        const ownedUnlocked = unlockedAll.filter(k => getInventoryCount(k) > 0);
        let pool = ownedUnlocked.length > 0 ? ownedUnlocked : unlockedAll;
        if (pool.length === 0) pool = unlockedAll.length > 0 ? unlockedAll : ['wheat'];
        const randomSeed = pool[Math.floor(Math.random() * pool.length)];
        hp.seed = randomSeed;
    }
    renderHungryPlant();
}

function getStreakMultiplier(streak) {
    // Mỗi 3 lần feed liên tiếp tăng 10% chất lượng pack, tối đa +50%
    return 1 + Math.min(0.5, Math.floor(streak / 3) * 0.1);
}

function renderHungryPlant() {
    const hp = gameState.hungryPlant;
    const banner = document.getElementById('hungryPlantBanner');
    const text = document.getElementById('hungryPlantText');
    const btn = document.getElementById('feedPlantBtn');
    const skipBtn = document.getElementById('skipPlantBtn');
    if (!banner || !text || !btn) return;

    if (hp && hp.seed) {
        const seedKey = hp.seed;
        const cData = CROP_DATA[seedKey];
        const count = getInventoryCount(seedKey);

        text.innerHTML = `<strong>👾 Hungry Plant:</strong> "I want 1x ${cData.icon} ${cData.name}!" (Have: ${count})`;

        if (count > 0) {
            btn.className = 'btn-buy btn-feed';
            btn.disabled = false;
            btn.textContent = 'Feed';
        } else {
            btn.className = 'btn-buy btn-feed cant-afford';
            btn.disabled = true;
            btn.textContent = 'Need Seed';
        }
        banner.style.display = 'flex';
        if (skipBtn) skipBtn.style.display = '';
    } else {
        // Plant đang nghỉ - hiện đếm ngược tới khi xuất hiện lại
        const msLeft = Math.max(0, (hp.cooldownUntil || 0) - Date.now());
        const secLeft = Math.ceil(msLeft / 1000);
        text.innerHTML = `<strong>👾 Hungry Plant</strong> đang ngủ... quay lại sau <strong>${secLeft}s</strong>`;
        btn.className = 'btn-buy btn-feed cant-afford';
        btn.disabled = true;
        btn.textContent = 'Resting';
        if (skipBtn) skipBtn.style.display = 'none';
        banner.style.display = 'flex';
    }

    renderEventProgress();
}

function renderEventProgress() {
    const hp = gameState.hungryPlant;
    const wrap = document.getElementById('eventProgressWrap');
    if (!wrap) return;

    const nextMilestone = EVENT_MILESTONES.find(m => !hp.milestonesClaimed.includes(m));
    const prevMilestone = [...EVENT_MILESTONES].reverse().find(m => m < (nextMilestone || Infinity)) || 0;
    const target = nextMilestone || EVENT_MILESTONES[EVENT_MILESTONES.length - 1];
    const span = target - prevMilestone || 1;
    const pct = nextMilestone
        ? Math.min(100, Math.max(0, ((hp.feedPoints - prevMilestone) / span) * 100))
        : 100;

    const timeLeft = getEventSeasonTimeLeft();

    wrap.innerHTML = `
        <div class="event-season-row">
            <span class="event-season-label">🍂 Mùa Event #${hp.seasonId}</span>
            <span class="event-countdown">⏳ ${formatCountdown(timeLeft)}</span>
        </div>
        <div class="event-stats-row">
            <span>🔥 Streak: <strong>${hp.streak}</strong> (Best: ${hp.bestStreak})</span>
            <span>🌟 Điểm mùa: <strong>${hp.feedPoints}</strong></span>
        </div>
        <div class="event-progress-bar">
            <div class="event-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="event-milestones">
            ${EVENT_MILESTONES.map(m => `
                <span class="milestone-dot ${hp.milestonesClaimed.includes(m) ? 'claimed' : (hp.feedPoints >= m ? 'ready' : '')}" title="Mốc ${m} điểm">
                    ${hp.milestonesClaimed.includes(m) ? '🎁' : m}
                </span>
            `).join('')}
        </div>
    `;
}

function checkMilestoneRewards() {
    const hp = gameState.hungryPlant;
    EVENT_MILESTONES.forEach(milestone => {
        if (hp.feedPoints >= milestone && !hp.milestonesClaimed.includes(milestone)) {
            hp.milestonesClaimed.push(milestone);
            grantMilestoneReward(milestone);
        }
    });
}

function grantMilestoneReward(milestone) {
    // Mốc càng cao, thưởng càng lớn: tiền + seed pack bảo đảm
    const moneyReward = milestone * 20;
    gameState.money = (gameState.money || 0) + moneyReward;
    const guaranteedCounts = {};
    const packSize = milestone >= 80 ? 3 : (milestone >= 30 ? 2 : 1);
    for (let i = 0; i < packSize; i++) {
        const key = getRandomEventSeed(2.5); // chất lượng cao hơn cho mốc thưởng
        gameState.inventory[key] = (gameState.inventory[key] || 0) + 1;
        markSeedOwned(key);
        guaranteedCounts[key] = (guaranteedCounts[key] || 0) + 1;
    }
    showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `🏆 Mốc ${milestone}: +💰${moneyReward}!`, 'success');
    showSeedPackModal(guaranteedCounts, `🏆 Mốc ${milestone} điểm!`);
    renderAll();
}

function feedHungryPlant() {
    const hp = gameState.hungryPlant;
    if (!hp || !hp.seed) return;
    const seedKey = hp.seed;

    if (getInventoryCount(seedKey) >= 1) {
        gameState.inventory[seedKey]--;
        if (gameState.inventory[seedKey] <= 0 && gameState.selectedSeed === seedKey) {
            gameState.selectedSeed = null;
        }

        hp.streak = (hp.streak || 0) + 1;
        hp.bestStreak = Math.max(hp.bestStreak || 0, hp.streak);
        hp.totalFed = (hp.totalFed || 0) + 1;
        hp.feedPoints = (hp.feedPoints || 0) + 1;

        const banner = document.getElementById('hungryPlantBanner');
        if (banner) {
            const rect = banner.getBoundingClientRect();
            showFloatingText(rect.left + rect.width / 2, rect.top, `🔥 Streak ${hp.streak}!`, 'xp');
        }

        openSeedPack(getStreakMultiplier(hp.streak));
        checkMilestoneRewards();
        updateQuestProgress('feedPlant', 1);

        hp.seed = null;
        hp.cooldownUntil = Date.now() + HUNGRY_PLANT_COOLDOWN;
        updateHungryPlant();
        renderAll();
    }
}

function skipHungryPlant() {
    const hp = gameState.hungryPlant;
    if (!hp || !hp.seed) return;
    if ((gameState.money || 0) >= 10) {
        gameState.money -= 10;
        hp.seed = null;
        hp.streak = 0; // skip làm mất combo
        hp.cooldownUntil = Date.now() + HUNGRY_PLANT_COOLDOWN;
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, '-💰10 (mất streak)', 'money');
        updateHungryPlant();
        renderAll();
    } else {
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, 'Need $10!', 'money');
    }
}

function openSeedPack(qualityMultiplier = 1) {
    const rewards = [];
    for (let i = 0; i < 5; i++) {
        rewards.push(getRandomEventSeed(qualityMultiplier));
    }

    const counts = {};
    rewards.forEach(key => {
        gameState.inventory[key] = (gameState.inventory[key] || 0) + 1;
        markSeedOwned(key);
        counts[key] = (counts[key] || 0) + 1;
    });

    showSeedPackModal(counts);
}

function getRandomEventSeed(qualityMultiplier = 1) {
    // qualityMultiplier > 1 dịch chuyển tỉ lệ về phía seed hiếm hơn (dùng cho streak cao / mốc thưởng)
    const rand = Math.random();
    const t1 = 0.005 * qualityMultiplier;
    const t2 = 0.045 * qualityMultiplier;
    const t3 = 0.170 * qualityMultiplier;
    const t4 = 0.450 * qualityMultiplier;
    if (rand < t1) return 'eventYggdrasil';
    if (rand < t2) return 'eventEyeTree';
    if (rand < t3) return 'eventAlienPod';
    if (rand < t4) return 'eventBloodRose';
    return 'eventFlytrap';
}

function showSeedPackModal(counts, title = '🎁 Seed Pack!') {
    const modal = document.getElementById('seedPackModal');
    const list = document.getElementById('seedPackList');
    const titleEl = modal?.querySelector('.modal-title');
    if (!modal || !list) return;
    list.innerHTML = '';
    if (titleEl) titleEl.textContent = title;

    Object.entries(counts).forEach(([key, qty]) => {
        const cData = CROP_DATA[key];
        const div = document.createElement('div');
        div.className = 'harvest-item';
        div.innerHTML = `
            <span class="item-name-flex">${cData.icon} ${cData.name}</span>
            <span class="item-value rarity-${cData.rarity}">x${qty}</span>
        `;
        list.appendChild(div);
    });

    modal.classList.add('active');
    showFloatingText(window.innerWidth / 2, window.innerHeight / 2, '🎁 Got Event Seeds!', 'success');
}

// ============== QUEST / BATTLE-PASS SYSTEM ==============

function resetDailyQuestsIfNeeded() {
    const q = gameState.quests;
    if (!q) return;
    const now = Date.now();
    if (now - q.dayStart >= DAY_MS) {
        q.daily = makeDailyQuests();
        q.dayStart = now;
    }
}

function resetWeeklyQuestsIfNeeded() {
    const q = gameState.quests;
    if (!q) return;
    const now = Date.now();
    if (now - q.weekStart >= WEEK_MS) {
        q.weekly = makeWeeklyQuests();
        q.weekStart = now;
        q.levelAtWeekStart = gameState.level || 1;
    }
}

function updateQuestProgress(type, amount) {
    const q = gameState.quests;
    if (!q) return;
    let changed = false;
    [...(q.daily || []), ...(q.weekly || [])].forEach(quest => {
        if (quest.type === type && !quest.claimed && quest.progress < quest.target) {
            quest.progress = Math.min(quest.target, quest.progress + amount);
            changed = true;
        }
    });
    if (changed) renderQuests();
}

function claimQuest(quest) {
    if (quest.claimed || quest.progress < quest.target) return;
    quest.claimed = true;
    gameState.quests.passPoints = (gameState.quests.passPoints || 0) + quest.points;
    showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `+${quest.points} pts!`, 'xp');
    checkQuestPassTiers();
    renderAll();
}

function checkQuestPassTiers() {
    const q = gameState.quests;
    QUEST_PASS_TIERS.forEach((tier, i) => {
        if (q.passPoints >= tier.points && !q.passTiersClaimed.includes(i)) {
            // Tier sẵn sàng nhận, hiển thị nút claim riêng trong renderQuestPass — không tự động cộng thưởng ở đây.
        }
    });
}

function claimPassTier(tierIndex) {
    const q = gameState.quests;
    const tier = QUEST_PASS_TIERS[tierIndex];
    if (!tier || q.passPoints < tier.points || q.passTiersClaimed.includes(tierIndex)) return;
    q.passTiersClaimed.push(tierIndex);
    if (tier.reward.money) {
        gameState.money = (gameState.money || 0) + tier.reward.money;
    }
    if (tier.reward.seeds) {
        Object.entries(tier.reward.seeds).forEach(([key, qty]) => {
            gameState.inventory[key] = (gameState.inventory[key] || 0) + qty;
            markSeedOwned(key);
        });
    }
    showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `🎁 Mốc ${tier.points}pt!`, 'success');
    renderAll();
}

function formatTimeRemaining(ms) {
    if (ms <= 0) return 'Sắp làm mới...';
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    if (h > 0) return `Còn ${h}h ${m}m`;
    return `Còn ${m}m`;
}

function renderQuestList(containerId, quests) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    quests.forEach(quest => {
        const pct = Math.min(100, (quest.progress / quest.target) * 100);
        const isDone = quest.progress >= quest.target;
        const card = document.createElement('div');
        card.className = 'quest-card' + (quest.claimed ? ' claimed' : isDone ? ' ready' : '');
        card.innerHTML = `
            <div class="quest-card-icon">${quest.icon}</div>
            <div class="quest-card-body">
                <div class="quest-card-desc">${quest.desc}</div>
                <div class="quest-card-progress-bar"><div class="quest-card-progress-fill" style="width:${pct}%"></div></div>
                <div class="quest-card-footer">
                    <span class="quest-card-progress-text">${quest.progress}/${quest.target}</span>
                    <span class="quest-card-points">+${quest.points} pts</span>
                </div>
            </div>
            <button class="quest-claim-btn" ${quest.claimed ? 'disabled' : !isDone ? 'disabled' : ''}>${quest.claimed ? '✓ Đã nhận' : isDone ? 'Nhận' : 'Chưa xong'}</button>
        `;
        const btn = card.querySelector('.quest-claim-btn');
        if (!quest.claimed && isDone) {
            btn.addEventListener('click', () => claimQuest(quest));
        }
        container.appendChild(card);
    });
}

function renderQuestPass() {
    const track = document.getElementById('questPassTrack');
    const pointsEl = document.getElementById('questPassPoints');
    if (!track || !pointsEl) return;
    const q = gameState.quests;
    pointsEl.textContent = `${q.passPoints || 0} pts`;
    track.innerHTML = '';
    QUEST_PASS_TIERS.forEach((tier, i) => {
        const unlocked = q.passPoints >= tier.points;
        const claimed = q.passTiersClaimed.includes(i);
        const node = document.createElement('div');
        node.className = 'pass-tier' + (claimed ? ' claimed' : unlocked ? ' unlocked' : '');
        const rewardParts = [];
        if (tier.reward.money) rewardParts.push(`💰${tier.reward.money}`);
        if (tier.reward.seeds) {
            Object.entries(tier.reward.seeds).forEach(([key, qty]) => {
                const cData = CROP_DATA[key];
                if (cData) rewardParts.push(`${cData.icon}x${qty}`);
            });
        }
        node.innerHTML = `
            <span class="pass-tier-points">${tier.points}</span>
            <span class="pass-tier-reward">${rewardParts.join(' ')}</span>
            <button class="pass-tier-btn" ${claimed ? 'disabled' : !unlocked ? 'disabled' : ''}>${claimed ? '✓' : unlocked ? '🎁' : '🔒'}</button>
        `;
        if (unlocked && !claimed) {
            node.querySelector('.pass-tier-btn').addEventListener('click', () => claimPassTier(i));
        }
        track.appendChild(node);
    });
}

function renderQuests() {
    if (!gameState.quests) return;
    resetDailyQuestsIfNeeded();
    resetWeeklyQuestsIfNeeded();

    const dailyResetEl = document.getElementById('dailyResetInfo');
    const weeklyResetEl = document.getElementById('weeklyResetInfo');
    if (dailyResetEl) dailyResetEl.textContent = formatTimeRemaining(DAY_MS - (Date.now() - gameState.quests.dayStart));
    if (weeklyResetEl) weeklyResetEl.textContent = formatTimeRemaining(WEEK_MS - (Date.now() - gameState.quests.weekStart));

    renderQuestList('dailyQuestList', gameState.quests.daily);
    renderQuestList('weeklyQuestList', gameState.quests.weekly);
    renderQuestPass();
}

function setupEventListeners() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panelId = tab.dataset.tab + '-panel';
            document.getElementById(panelId)?.classList.add('active');
        });
    });

    document.querySelectorAll('.shop-subtab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.shop-subtab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.shop-subpanel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('shopsub-' + tab.dataset.shopsub)?.classList.add('active');
        });
    });

    document.getElementById('saveBtn')?.addEventListener('click', saveGame);
    document.getElementById('clearSaveBtn')?.addEventListener('click', () => {
        if (confirm('🗑️ Xóa toàn bộ game và bắt đầu lại?')) {
            localStorage.removeItem('growGardenSave');
            location.reload();
        }
    });
    document.getElementById('clearSeedBtn')?.addEventListener('click', () => {
        gameState.selectedSeed = null;
        renderAll();
    });

    document.getElementById('toggleDeleteModeBtn')?.addEventListener('click', toggleDeleteMode);
    document.getElementById('confirmDeleteSelectedBtn')?.addEventListener('click', openDeleteSelectedModal);
    document.getElementById('deleteAllSeedsBtn')?.addEventListener('click', () => {
        document.getElementById('deleteAllSeedsModal')?.classList.add('active');
    });
    document.getElementById('cancelDeleteAllBtn')?.addEventListener('click', () => {
        document.getElementById('deleteAllSeedsModal')?.classList.remove('active');
    });
    document.getElementById('confirmDeleteAllBtn')?.addEventListener('click', deleteAllSeeds);
    document.getElementById('cancelDeleteSelectedBtn')?.addEventListener('click', () => {
        document.getElementById('deleteSelectedModal')?.classList.remove('active');
    });
    document.getElementById('confirmDeleteSelectedConfirmBtn')?.addEventListener('click', deleteSelectedSeeds);

    document.getElementById('cancelDeleteCropBtn')?.addEventListener('click', () => {
        pendingDeleteCropIndex = null;
        document.getElementById('deleteCropModal').classList.remove('active');
    });
    document.getElementById('confirmDeleteCropBtn')?.addEventListener('click', confirmDeleteCrop);


    document.getElementById('feedPlantBtn')?.addEventListener('click', feedHungryPlant);
    document.getElementById('skipPlantBtn')?.addEventListener('click', skipHungryPlant);
    document.getElementById('collectSeedPackBtn')?.addEventListener('click', () => {
        document.getElementById('seedPackModal')?.classList.remove('active');
    });

    // Đóng modal khi click ra vùng overlay bên ngoài
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                if (overlay.id === 'harvestModal') harvestQueue = [];
            }
        });
    });
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) saveGame();
});

window.addEventListener('beforeunload', () => saveGame());

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}