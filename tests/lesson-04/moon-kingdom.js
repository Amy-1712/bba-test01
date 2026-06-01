// Bài 1
function createCharacters() {
    // khai báo mảng các object: characters có các thuộc tính: name, level, health. 
    const characters = [
        { name: 'Mario', level: 10, health: 400 },
        { name: 'Luigi', level: 8, health: 300 },
        { name: 'Peach', level: 15, health: 1200 }
    ];

    // Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp: ○ thuộc tính name: UPPERCASE của name gốc 
    //○ level: x2 của level gốc 
    //○ health: x3 của health gốc 

    const charactersPowerup = characters.map(character =>
    ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3,
    }));

    // Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là “possibleWinners” 
    const possibleWinners = characters.filter(character => character.health > 1000);

    console.log('---charactersPowerup---');
    console.log(charactersPowerup);
    console.log('---charpossibleWinners---');
    console.log(possibleWinners);
}
createCharacters();

// Bài 2
function printLeaderboard() {
    const players = [
        { name: 'Mario', score: 1000 },
        { name: 'Luigi', score: 900 },
        { name: 'Peach', score: 950 },
        { name: 'Yoshi', score: 800 },
        { name: 'Phong', score: 500 }

    ];
    const sortPlayer = players.sort((a, b) => b.score - a.score);
    console.log(sortPlayer);

    const leaderboard = sortPlayer.map((player, index) => {
        const id = index + 1;
        let medal = '';
        if (id === 1) medal = "🥇 ";
        else if (id === 2) medal = "🥈 ";
        else if (id === 3) medal = "🥉 ";
        else medal = "   ";

        console.log(`${medal}name: ${player.name}, score: ${player.score}`);
    });

}
printLeaderboard();