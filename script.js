'use strict';

const CROP_DATA = {
    wheat: { name: 'Wheat', icon: '🌾', buyPrice: 3, value: 5, growTime: 30, rarity: 'common', unlock: 1 },
    corn: { name: 'Corn', icon: '🌽', buyPrice: 6, value: 10, growTime: 45, rarity: 'common', unlock: 1 },
    carrot: { name: 'Carrot', icon: '🥕', buyPrice: 12, value: 20, growTime: 60, rarity: 'uncommon', unlock: 2 },
    tomato: { name: 'Tomato', icon: '🍅', buyPrice: 22, value: 35, growTime: 90, rarity: 'uncommon', unlock: 3 },
    potato: { name: 'Potato', icon: '🥔', buyPrice: 45, value: 70, growTime: 120, rarity: 'rare', unlock: 5 },
    strawberry: { name: 'Strawberry', icon: '🍓', buyPrice: 70, value: 110, growTime: 150, rarity: 'rare', unlock: 6 },
    watermelon: { name: 'Watermelon', icon: '🍉', buyPrice: 150, value: 240, growTime: 200, rarity: 'epic', unlock: 8 },
    pumpkin: { name: 'Pumpkin', icon: '🎃', buyPrice: 250, value: 400, growTime: 300, rarity: 'epic', unlock: 10 },
    sunflower: { name: 'Sunflower', icon: '🌻', buyPrice: 600, value: 1000, growTime: 400, rarity: 'legendary', unlock: 12 },
    diamond: { name: 'Diamond Fruit', icon: '💎', buyPrice: 1200, value: 2000, growTime: 600, rarity: 'legendary', unlock: 15 },
    crystalCarrot: { name: 'Crystal Carrot', icon: '💠', buyPrice: 180, value: 280, growTime: 35, rarity: 'epic', unlock: 3, weatherBonus: { night: 1.3, rain: 1.2 } },
    solarCorn: { name: 'Solar Corn', icon: '🌞', buyPrice: 80, value: 120, growTime: 25, rarity: 'rare', unlock: 2, weatherBonus: { sunny: 1.4, thunderstorm: 1.2 } },
    moonBerry: { name: 'Moon Berry', icon: '🌙', buyPrice: 200, value: 320, growTime: 45, rarity: 'epic', unlock: 4, weatherBonus: { night: 1.5 } },
    toxicTomato: { name: 'Toxic Tomato', icon: '☠️', buyPrice: 90, value: 140, growTime: 30, rarity: 'rare', unlock: 2, weatherBonus: { thunderstorm: 1.4 } },
    goldenWheat: { name: 'Golden Wheat', icon: '🌾', buyPrice: 500, value: 850, growTime: 60, rarity: 'legendary', unlock: 6, weatherBonus: { sunny: 1.2, rain: 1.1 } },
    aquaMelon: { name: 'Aqua Melon', icon: '💧', buyPrice: 100, value: 160, growTime: 40, rarity: 'rare', unlock: 3, weatherBonus: { rain: 1.5, thunderstorm: 1.3 } },
    lavaBean: { name: 'Lava Bean', icon: '🔥', buyPrice: 550, value: 950, growTime: 70, rarity: 'legendary', unlock: 7, weatherBonus: { thunderstorm: 1.3, sunny: 1.2 } },
    ghostPumpkin: { name: 'Ghost Pumpkin', icon: '👻', buyPrice: 280, value: 450, growTime: 55, rarity: 'epic', unlock: 5, weatherBonus: { night: 1.4 } },
    electricPepper: { name: 'Electric Pepper', icon: '⚡', buyPrice: 85, value: 130, growTime: 28, rarity: 'rare', unlock: 2, weatherBonus: { thunderstorm: 1.6 } },
    frostApple: { name: 'Frost Apple', icon: '🍎', buyPrice: 220, value: 360, growTime: 50, rarity: 'epic', unlock: 4, weatherBonus: { night: 1.2, rain: 1.1 } },
    rainbowSeed: { name: 'Rainbow Seed', icon: '🌈', buyPrice: 1500, value: 2800, growTime: 90, rarity: 'mythic', unlock: 9, weatherBonus: { sunny: 1.1, rain: 1.1, thunderstorm: 1.1, night: 1.1 } }
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

let gameState = {
    money: 50,
    level: 1,
    xp: 0,
    gardenSize: 9,
    plots: [],
    inventory: { wheat: 5, corn: 3, carrot: 0, tomato: 0, potato: 0, strawberry: 0, watermelon: 0, pumpkin: 0, sunflower: 0, diamond: 0, crystalCarrot: 0, solarCorn: 0, moonBerry: 0, toxicTomato: 0, goldenWheat: 0, aquaMelon: 0, lavaBean: 0, ghostPumpkin: 0, electricPepper: 0, frostApple: 0, rainbowSeed: 0 },
    selectedSeed: null,
    upgrades: {},
    pets: [],
    weather: 'sunny',
    weatherTimer: 0,
    totalHarvested: 0,
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
                gameState = { ...gameState, ...data };
                gameState.plots = gameState.plots || [];
                gameState.upgrades = gameState.upgrades || {};
                gameState.pets = gameState.pets || [];
                gameState.inventory = gameState.inventory || { wheat: 5, corn: 3 };
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
            plot.progress = Math.min(100, plot.progress + (grown / cData.growTime) * 100);
            if (plot.progress >= 100) {
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
        plot.addEventListener('click', () => handlePlotClick(i));
        grid.appendChild(plot);
    }
}

function handlePlotClick(index) {
    const plot = gameState.plots[index];
    if (plot && plot.progress >= 100) {
        harvestPlot(index);
    } else if (gameState.selectedSeed && getInventoryCount(gameState.selectedSeed) > 0) {
        plantSeed(index, gameState.selectedSeed);
    }
    renderGarden();
}

function getInventoryCount(seed) {
    const count = gameState.inventory[seed];
    return typeof count === 'number' ? count : 0;
}

function plantSeed(index, cropKey) {
    const mutation = calculateMutation();
    gameState.plots[index] = {
        crop: cropKey,
        planted: Date.now(),
        progress: 0,
        mutation: mutation
    };
    gameState.inventory[cropKey] = Math.max(0, (gameState.inventory[cropKey] || 1) - 1);
    if (getInventoryCount(cropKey) <= 0) {
        gameState.selectedSeed = null;
    }
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
    gameState.plots[index] = null;
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
        renderGarden();
    }, 1000);
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
            const perSec = (100 / cData.growTime) * gMult * wData.growth * weatherBonus;
            plot.progress = Math.min(100, plot.progress + perSec);
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
    renderUpgrades();
    renderExpansion();
    renderPets();
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
    const growing = document.getElementById('growingStat');
    const ready = document.getElementById('readyStat');
    let growCount = 0;
    let readyCount = 0;

    plots.forEach((plot, i) => {
        const data = gameState.plots[i];
        plot.className = 'garden-plot';
        if (!data) {
            plot.classList.add('empty');
            plot.innerHTML = '';
        } else {
            const cData = CROP_DATA[data.crop];
            const mData = MUTATION_DATA[data.mutation];
            let html = `<span class="plot-crop ${data.mutation !== 'none' ? 'mutation-' + data.mutation : ''}">${cData.icon}</span>`;
            if (data.progress < 100) {
                html += `<div class="plot-progress"><div class="progress-fill" style="width: ${data.progress}%"></div></div>`;
                growCount++;
            } else {
                plot.classList.add('ready');
                readyCount++;
            }
            if (data.mutation !== 'none') {
                html += `<span class="plot-mutation mutation-${data.mutation}">${mData.icon}</span>`;
            }
            plot.innerHTML = html;
        }
    });

    if (growing) growing.textContent = growCount;
    if (ready) ready.textContent = readyCount;
    const harvestedEl = document.getElementById('harvestedStat');
    if (harvestedEl) harvestedEl.textContent = gameState.totalHarvested || 0;
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
        if (unlockLevel > playerLevel) return;
        renderedCount++;
        const owned = getInventoryCount(key);
        const buyPrice = ensureNumber(cData.buyPrice, 0);
        const sellValue = ensureNumber(cData.value, 0);
        const canAfford = currentMoney >= buyPrice;
        const item = document.createElement('div');
        item.className = 'shop-item';
        if (gameState.selectedSeed === key) item.classList.add('selected');
        if (owned > 0) {
            item.innerHTML = `
                <span class="item-icon">${cData.icon}</span>
                <span class="item-name">${cData.name}</span>
                <span class="item-rarity rarity-${cData.rarity}">${cData.rarity}</span>
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
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `-$${price}`, 'money');
        console.log('Purchased seed:', key, 'Price:', price, 'Remaining:', gameState.money);
        renderAll();
    } else {
        console.log('Cannot afford seed:', key, 'Price:', price, 'Have:', currentMoney);
        showFloatingText(window.innerWidth / 2, window.innerHeight / 2, `Need $${price - currentMoney} more!`, 'money');
    }
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    if (!grid) return;
    grid.innerHTML = '';
    let hasItems = false;
    Object.entries(gameState.inventory).forEach(([key, count]) => {
        if (typeof count === 'number' && count > 0) {
            hasItems = true;
            const cData = CROP_DATA[key];
            const item = document.createElement('div');
            item.className = 'shop-item';
            item.innerHTML = `
                <span class="item-icon">${cData.icon}</span>
                <span class="item-name">${cData.name}</span>
                <span class="item-owned">x${count}</span>
            `;
            item.addEventListener('click', () => {
                gameState.selectedSeed = key;
                renderAll();
            });
            grid.appendChild(item);
        }
    });
    if (!hasItems) {
        grid.innerHTML = '<p style="color:#666;grid-column:1/-1;text-align:center;">No items</p>';
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