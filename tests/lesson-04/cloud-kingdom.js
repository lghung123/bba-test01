let playerName = 'Mario';
let currentLives = 3;
const lvl1coins = 25;
const lvl2coins = 30;
const lvl3coins = 45;

const totalCoins = lvl1coins + lvl2coins + lvl3coins;
console.log(`Số coin trung bình của 3 level là: ${totalCoins / 3}`);
console.log(`Số coin dư khi chia cho 3 là: ${totalCoins % 3}`);