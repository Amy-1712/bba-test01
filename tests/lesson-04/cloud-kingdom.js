let playerName = 'Mario';
let currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

const totalCoins = level1 + level2 + level3;
const averageCoins = totalCoins / 3;

console.log("Player Name:",playerName);
console.log("Tổng coin của 3 level là:",totalCoins);
console.log("Giá trị trung bình là:",averageCoins);
console.log("Số coin dư khi chia tổng số coin cho 3 là:",totalCoins % 3);