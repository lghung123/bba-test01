/* Bài 1: Tạo hàm createCharacters:
● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
    ○ thuộc tính name: UPPERCASE của name gốc
    ○ level: x2 của level gốc
    ○ health: x3 của health gốc
● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners”*/

function createCharacters() {
    const characters = [{name: 'Mario', level: 2, health: 300},
                        {name: 'Luigi', level: 3, health: 600},
                        {name: 'Peach', level: 1, health: 450},
                        {name: 'Yoshi', level: 4, health: 677},
                        {name: 'Phong', level: 5, health: 333}];

    // Tạo biến charactersPowerUp
    charactersPowerUp = characters.map(characters => ({
        name: characters.name.toUpperCase(),
        level: characters.level * 2,
        health: characters.health * 3
    }));
    console.log('Danh sách các nhân vật sau khi nâng cấp');
    for (let i = 0; i < charactersPowerUp.length; i++) {
        console.log(`Tên: ${charactersPowerUp[i].name}; Cấp: ${charactersPowerUp[i].level}; Máu: ${charactersPowerUp[i].health}`);
    }

    // Tạo biến possibleWinners
    possibleWinners = charactersPowerUp.filter(charactersPowerUp => charactersPowerUp.health > 1000);
    console.log('\nDanh sách các nhân vật có thể thắng màn');
    for (let i = 0; i < possibleWinners.length; i++) {
        console.log(`Tên: ${possibleWinners[i].name}; Cấp: ${possibleWinners[i].level}; Máu: ${possibleWinners[i].health}`);
    }
}

createCharacters();

/* Bài 2: Tạo hàm printLeaderboard:
● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
1000}, ...]
● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
trước*/
players = [{name: 'Mario', score: 1_000},
           {name: 'Luigi', score: 5_000},
           {name: 'Peach', score: 2_000},
           {name: 'Yoshi', score: 300},
           {name: 'Hung', score: 990}];

// Cách 1: Dùng hàm sort()
function printLeaderboard(players) {
    // Dùng hàm sort sắp xếp lại mảng theo chiều giảm dần
    players.sort((a, b) => b.score - a.score); 

    // In ra danh sách
    for (let i = 0; i < players.length; i++) {
        let medalIcon = '  '; // Mặc định để trống
        if (i === 0) {
            medalIcon = '🥇'; // Nếu player xếp hạng 1 thì in ra kèm huy chương ở đầu
        } else if (i === 1) { 
            medalIcon = '🥈'; // Tương tự cho player hạng 2
        } else if (i === 2) { 
            medalIcon ='🥉'; // Tương tự cho player hạng 3
        }
        console.log(`${medalIcon} ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
    }
}

printLeaderboard(players);

// Cách 2: Dùng thuật toán để sắp xếp lại mảng
function sortLeaderboard(players) {
    let temp = {};

    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            // So sánh phần tử thứ i trong mảng với phần tử kế tiếp
            if (players[i].score < players[j].score) { 
                // Nếu phần tử phía sau lớn hơn thì gán lại vị trí lên phía trước
                temp = players[i];                
                players[i] = players[j];
                players[j] = temp;
            }
        }
    }
    return players;
}

function printLeaderboard(players) {
    const sortedplayers = sortLeaderboard(players); // Tạo 1 biến để chứa mảng sau khi đã sắp xếp
    // In ra danh sách
    for (let i = 0; i < sortedplayers.length; i++) {
        let medalIcon = '  '; // Mặc định để trống
        if (i === 0) {
            medalIcon = '🥇'; // Nếu player xếp hạng 1 thì in ra kèm huy chương ở đầu
        } else if (i === 1) { 
            medalIcon = '🥈'; // Tương tự cho player hạng 2
        } else if (i === 2) { 
            medalIcon ='🥉'; // Tương tự cho player hạng 3
        }
        console.log(`${medalIcon} ${i + 1}. ${sortedplayers[i].name} - ${sortedplayers[i].score} pts`);
    }
}

printLeaderboard(players);