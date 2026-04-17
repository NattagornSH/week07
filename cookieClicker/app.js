const state = {
  cookies: 0,

  // === คุกกี้ตัวที่ 1 ===
  clickPower: 1,
  autoPower: 0,
  clickUpgradeCost: 10,
  autoUpgradeCost: 25,

  // === คุกกี้ตัวที่ 2 ===
  hasCookieBuddy: false,
  cookieBuddyCost: 50,
  clickPower2: 1,
  autoPower2: 0,
  clickUpgradeCost2: 10,
  autoUpgradeCost2: 25,

  // === คุกกี้ตัวที่ 3 ===
  hasCookieBuddy3: false,
  cookieBuddyCost3: 100,
  clickPower3: 1,
  autoPower3: 0,
  clickUpgradeCost3: 10,
  autoUpgradeCost3: 25,
};

// --- ดึง element ตัวที่ 1 ---
const cookieCount = document.getElementById("cookie-count");
const clickPowerEl = document.getElementById("click-power");
const autoPowerEl = document.getElementById("auto-power");
const cookieButton = document.getElementById("cookie-button");
const buyClickButton = document.getElementById("buy-click");
const buyAutoButton = document.getElementById("buy-auto");

// --- ดึง element ตัวที่ 2 ---
const cookieButton2 = document.getElementById("cookie-button-2");
const buyClickButton2 = document.getElementById("buy-click-2");
const buyAutoButton2 = document.getElementById("buy-auto-2");
const buyCookieBuddyButton = document.getElementById("buy-cookie-buddy");
const buddyUpgradesSection = document.getElementById("buddy-upgrades-section");

// --- ดึง element ตัวที่ 3 ---
const cookieButton3 = document.getElementById("cookie-button-3");
const buyClickButton3 = document.getElementById("buy-click-3");
const buyAutoButton3 = document.getElementById("buy-auto-3");
const buyCookieBuddy3Button = document.getElementById("buy-cookie-buddy-3");
const buddy3UpgradesSection = document.getElementById(
  "buddy-upgrades-section-3",
);

function render() {
  // ผลรวม autoPower ทุกตัว
  const totalAuto =
    state.autoPower +
    (state.hasCookieBuddy ? state.autoPower2 : 0) +
    (state.hasCookieBuddy3 ? state.autoPower3 : 0);

  cookieCount.textContent = `Cookies: ${state.cookies}`;
  clickPowerEl.textContent = `Click power: ${state.clickPower}`;
  autoPowerEl.textContent = `Auto cookies: ${totalAuto} / sec`; // ← ผลรวมทุกตัว

  // --- ปุ่ม upgrade ตัวที่ 1 ---
  buyClickButton.textContent = `Buy click upgrade (${state.clickUpgradeCost})`;
  buyAutoButton.textContent = `Buy auto clicker (${state.autoUpgradeCost})`;
  buyClickButton.disabled = state.cookies < state.clickUpgradeCost;
  buyAutoButton.disabled = state.cookies < state.autoUpgradeCost;

  // --- ปุ่มซื้อ Cookie Buddy 2 ---
  if (state.hasCookieBuddy) {
    buyCookieBuddyButton.textContent = `Cookie Buddy 2 ✓ Unlocked!`;
    buyCookieBuddyButton.disabled = true;
  } else {
    buyCookieBuddyButton.textContent = `Buy Cookie Buddy 2 (${state.cookieBuddyCost})`;
    buyCookieBuddyButton.disabled = state.cookies < state.cookieBuddyCost;
  }

  // --- แสดง/ซ่อน upgrade ตัวที่ 2 ---
  if (state.hasCookieBuddy) {
    cookieButton2.classList.remove("hidden");
    buddyUpgradesSection.classList.remove("hidden");
    buyClickButton2.textContent = `[Cookie 2] Click upgrade (${state.clickUpgradeCost2})`;
    buyAutoButton2.textContent = `[Cookie 2] Auto clicker (${state.autoUpgradeCost2})`;
    buyClickButton2.disabled = state.cookies < state.clickUpgradeCost2;
    buyAutoButton2.disabled = state.cookies < state.autoUpgradeCost2;
  } else {
    cookieButton2.classList.add("hidden");
    buddyUpgradesSection.classList.add("hidden");
  }

  // --- ปุ่มซื้อ Cookie Buddy 3 ---
  if (state.hasCookieBuddy3) {
    buyCookieBuddy3Button.textContent = `Cookie Buddy 3 ✓ Unlocked!`;
    buyCookieBuddy3Button.disabled = true;
  } else {
    buyCookieBuddy3Button.textContent = `Buy Cookie Buddy 3 (${state.cookieBuddyCost3})`;
    buyCookieBuddy3Button.disabled = state.cookies < state.cookieBuddyCost3;
  }

  // --- แสดง/ซ่อน upgrade ตัวที่ 3 ---
  if (state.hasCookieBuddy3) {
    cookieButton3.classList.remove("hidden");
    buddy3UpgradesSection.classList.remove("hidden");
    buyClickButton3.textContent = `[Cookie 3] Click upgrade (${state.clickUpgradeCost3})`;
    buyAutoButton3.textContent = `[Cookie 3] Auto clicker (${state.autoUpgradeCost3})`;
    buyClickButton3.disabled = state.cookies < state.clickUpgradeCost3;
    buyAutoButton3.disabled = state.cookies < state.autoUpgradeCost3;
  } else {
    cookieButton3.classList.add("hidden");
    buddy3UpgradesSection.classList.add("hidden");
  }
}

// --- Event Listeners ตัวที่ 1 ---
cookieButton.addEventListener("click", () => {
  state.cookies += state.clickPower;
  render();
});

buyClickButton.addEventListener("click", () => {
  if (state.cookies < state.clickUpgradeCost) return;
  state.cookies -= state.clickUpgradeCost;
  state.clickPower += 1;
  state.clickUpgradeCost += 10;
  render();
});

buyAutoButton.addEventListener("click", () => {
  if (state.cookies < state.autoUpgradeCost) return;
  state.cookies -= state.autoUpgradeCost;
  state.autoPower += 1;
  state.autoUpgradeCost += 20;
  render();
});

// --- ซื้อ Cookie Buddy 2 ---
buyCookieBuddyButton.addEventListener("click", () => {
  if (state.cookies < state.cookieBuddyCost) return;
  state.cookies -= state.cookieBuddyCost;
  state.hasCookieBuddy = true;
  render();
});

// --- Event Listeners ตัวที่ 2 ---
cookieButton2.addEventListener("click", () => {
  state.cookies += state.clickPower2;
  render();
});

buyClickButton2.addEventListener("click", () => {
  if (state.cookies < state.clickUpgradeCost2) return;
  state.cookies -= state.clickUpgradeCost2;
  state.clickPower2 += 1;
  state.clickUpgradeCost2 += 10;
  render();
});

buyAutoButton2.addEventListener("click", () => {
  if (state.cookies < state.autoUpgradeCost2) return;
  state.cookies -= state.autoUpgradeCost2;
  state.autoPower2 += 1;
  state.autoUpgradeCost2 += 20;
  render();
});

// --- ซื้อ Cookie Buddy 3 ---
buyCookieBuddy3Button.addEventListener("click", () => {
  if (state.cookies < state.cookieBuddyCost3) return;
  state.cookies -= state.cookieBuddyCost3;
  state.hasCookieBuddy3 = true;
  render();
});

// --- Event Listeners ตัวที่ 3 ---
cookieButton3.addEventListener("click", () => {
  state.cookies += state.clickPower3;
  render();
});

buyClickButton3.addEventListener("click", () => {
  if (state.cookies < state.clickUpgradeCost3) return;
  state.cookies -= state.clickUpgradeCost3;
  state.clickPower3 += 1;
  state.clickUpgradeCost3 += 10;
  render();
});

buyAutoButton3.addEventListener("click", () => {
  if (state.cookies < state.autoUpgradeCost3) return;
  state.cookies -= state.autoUpgradeCost3;
  state.autoPower3 += 1;
  state.autoUpgradeCost3 += 20;
  render();
});

// --- Auto clicker: รวม autoPower ทุกตัว ทุก 1 วินาที ---
window.setInterval(() => {
  state.cookies += state.autoPower;
  if (state.hasCookieBuddy) state.cookies += state.autoPower2;
  if (state.hasCookieBuddy3) state.cookies += state.autoPower3;
  render();
}, 1000);

render();
