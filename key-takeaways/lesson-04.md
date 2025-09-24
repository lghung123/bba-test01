# Javascritpt căn bản (tiếp theo)
Nội dung bài học:
1. Phạm vi của biến
2. Advance condition
3. Advance loops
4. String helper functions
5. Array helper functions

## 1. Phạm vi của biến
JavaScript có ba loại phạm vi:
- Toàn cục (global).
- Function scope (hàm).
- Block scope (khối).

### Toàn cục (global)
- Được khai báo bên ngoài (không thuộc 1 hàm hay 1 khối code nào).
- Có thể gọi ra sử dụng ở bất cứ đâu trong chương trình.
- Ví dụ:
```javascript
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";

function testFunction() {
    console.log(globalVar); // Truy cập được
    console.log(globalLet); // Truy cập được
}
```

### Function scope (hàm)
- Được khai báo bên trong 1 hàm.
- Chỉ có thể sử dụng trong phạm vi hàm tương ứng.
- Ví dụ:
```javascript
function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScoped = "Tương tự";
    console.log(functionScoped); // OK
}

console.log(functionScoped); // Error: functionScoped is not defined
```

### Block scope (khối)
- Được khai báo bên trong 1 khối code.
- Trường hợp khai báo với từ khóa ```var```: Có thể gọi ra sử dụng ở bất cứ đâu trong chương trình.
- Trường hợp khai báo với từ khóa ```let``` hoặc ```const```: Chỉ có thể sử dụng trong phạm vi khối code tương ứng.
- Ví dụ:
```javascript
if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const cũng có block scope";
}

console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```

## 2. Advance condition
### Lệnh break
- Lệnh ```break``` dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
- Ví dụ:
```javascript
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
 console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
Trong ví dụ trên, khi điều kiện ```if``` được thỏa mãn sẽ chạy vào lệnh ```break``` và chương trình sẽ thoát ra khỏi vòng lặp.

### Lệnh continue
- Lệnh ```continue``` dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
- Ví dụ:
```javascript
// Ví dụ thực tế: Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");

for (let score of scores) {
    if (score < 80) {
        continue; // Bỏ qua điểm < 80
    }
    console.log(score);
}
// Output: 85, 92, 95, 88
```
Trong ví dụ trên, khi điều kiện ```if``` được thỏa mãn sẽ chạy vào lệnh ```continue```, chương trình sẽ bỏ qua tất cả dòng phía dưới và bắt đầu 1 vòng lặp mới.

### Câu điều kiện if…else
- Thực thi code khác nhau cho trường hợp true và false:
```javascript
if (<điều_kiện>) {
    code...; // lệnh thực thi nếu điều kiện đúng
} else {
    code...; // lệnh thực thi nếu điều kiện sai
}
```

### Câu điều kiện if…else if
- Kiểm tra nhiều điều kiện theo thứ tự:
```javascript
if (<điều_kiện_1>) {
    code...; // lệnh thực thi nếu điều kiện 1 đúng
} else if (<điều_kiện_2>) {
    code...; // lệnh thực thi nếu điều kiện 2 đúng
...
} else {
    code...; // lệnh thực thi nếu tất cả điều kiện trên đều sai
}
```

### Ternary operator (toán tử điều kiện)
- Cách viết ngắn gọn cho if...else đơn giản:
```javascript
(<điều_kiện_1>) ? <lệnh_nếu_đk_đúng> : <lệnh_nếu_đk_sai>;
```

## 3. Advance loops
### for...in Loop
- Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa. Ví dụ:
```javascript
// Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";

for (let index in colors) {
 console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```
### for...in Loop
- Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa.
- Ví dụ với object:
```javascript
const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: Hanoi
```

- Ví dụ với array:
```javascript
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";

for (let index in colors) {
    console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```

### for...of Loop
- Dùng để duyệt qua các qua các phần tử của một mảng.
- Ví dụ:
```javascript
const colors = ["red", "green", "blue"];

for (let i of colors) {
    console.log(i);
}
// Output:
// red
// green
// blue
```

## 4. String helper functions
- ```trim()```: cắt khoảng trắng hai đầu.
    - ```trimLeft()```: cắt bên trái.
    - ```trimRight()```: cắt bên phải.
- ```toLowerCase()```: chuyển chuỗi thành chữ thường
- ```toUpperCase()```: chuyển chuỗi thành chữ hoa.
- ```includes(<substr>)```: kiểm tra chuỗi bao gồm chuỗi con ```<substr>```.
- ```replace(<chuỗi cần thay>, <chuỗi mới>)```: thay thế 1 chuỗi con bằng 1 chuỗi khác.
- ```split(<tách_bởi_gì>)```: tách chuỗi thành 1 mảng bởi 1 kí tự chỉ định.
- ```substring(<điểm_bắt_đầu>, <điểm_kết_thúc>)```: lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc.
- ```indexOf(<chuỗi kí tự>)```: tìm vị trí của chuỗi con.

## 5. Array helper functions
- ```map```: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài.
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - mảng gốc không thay đổi
```

- ```filter```: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc.
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - mảng gốc không đổi
```

- ```find```: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy.
```javascript
const numbers = [1, 5, 3, 8, 2, 10, 7];

// Tìm số chẵn đầu tiên
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8 (không phải 2 hay 10)

// Tìm số lớn hơn 6
const greaterThanSix = numbers.find(num => num > 6);
console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy)

// Không tìm thấy
const negative = numbers.find(num => num < 0);
console.log(negative); // undefined
```

- ```reduce```: Duyệt qua mảng và tích lũy các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback.
```javascript
const numbers = [1, 2, 3, 4, 5];

// Cách hoạt động từng bước
const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);

// accumulator: 0, current: 1 -> return 1
// accumulator: 1, current: 2 -> return 3
// accumulator: 3, current: 3 -> return 6
// accumulator: 6, current: 4 -> return 10
// accumulator: 10, current: 5 -> return 15

console.log(sum); // 15
```

- ```some```: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false.
```javascript
const numbers = [1, 3, 5, 7, 8, 9];
// Kiểm tra có số chẵn không?

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có số 8)

// Kiểm tra có số > 10 không?
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log(hasGreaterThan10); // false

// Dừng ngay khi tìm thấy
const hasEvenWithLog = numbers.some(num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
});

// Checking: 1
// Checking: 3
// Checking: 5
// Checking: 7
// Checking: 8
// => Dừng, không kiểm tra 9
```

- ```sort```: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc.
```javascript
// Sort chuỗi
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange']

// sort number
const numbers2 = [10, 5, 40, 25, 1000, 1];
numbers2.sort((a, b) => a - b); // tăng dần
console.log(numbers2); // [1, 5, 10, 25, 40, 1000]
```

- ```every```: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
```javascript
const numbers = [2, 4, 6, 8, 10];

// Kiểm tra tất cả là số chẵn?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Dừng ngay khi gặp false
const checkWithLog = numbers.every(num => {
    console.log(`Checking: ${num}`);
    return num < 5;
});
// Checking: 2
// Checking: 4
// Checking: 6
// => Dừng tại 6, không kiểm tra 8, 10
console.log(checkWithLog); // false
```

- ```push```: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới.
```javascript
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Push nhiều phần tử cùng lúc
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']
```

- ```pop```: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.
```javascript
const fruits = ['apple', 'banana', 'orange', 'grape'];
const lastFruit = fruits.pop();

console.log(lastFruit); // 'grape' - phần tử bị xóa
console.log(fruits); // ['apple', 'banana', 'orange'] - mảng đã thay đổi

// Pop từ mảng rỗng
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```

- ```shift```: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài.
```javascript
const fruits = ['apple', 'banana', 'orange', 'grape'];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'apple' - phần tử bị xóa
console.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

// Shift từ mảng rỗng
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []
```

- unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.
```javascript
const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Unshift nhiều phần tử cùng lúc
fruits.unshift('grape', 'mango');
console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']
```