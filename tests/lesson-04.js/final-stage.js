function findPairsDivisibleBy17() {
    let count = 0; // Tạo biến đếm count

    for (let i = 1; i <= 100; i++) {
        // Sử dụng biến đếm j = i + 1 để tránh bị lặp
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j}) = ${i + j}`);
                count++; // Cứ mỗi lần tìm được cặp số thì tăng biến đém count
            }
        }
    }
    console.log(`\nTổng cộng có ${count} cặp`);
}

findPairsDivisibleBy17();