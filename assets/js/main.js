// 1 - Dung const khi bien it khi cap nhap, let & var dung khi bien thay doi nhieu
// 2 - newArr.length/cong thuc lay do dai cua mang 


// Bai Tap 2: If/Else - Bai1
function bai_1(num) {
    // if (num >= 85) {
    //     console.log("A");
    // } else if (70 < num && num < 85) {
    //     console.log("B");
    // } else if (40 <= num && num < 70) {
    //     console.log("C");
    // } else {
    //     console.log("D");
    // }
    let result = num >= 85 ? console.log('A') :
    70 < num && num < 85 ? console.log('B') :
    40 < num && num < 70 ? console.log('C') :
    console.log('D');
    return result;
};

// Bai Tap 2: If/Else - Bai2
function bai_2(a,b) {
    if (a > b) {
        alert(a);
    } else {
        alert(b)
    }
};

// Bai Tap 2: If/Else - Bai3
function bai_3(randomNumber) {
    if (randomNumber >= 0) {
        console.log('Day la so duong');
    } else {
        console.log('Day la so am');
    }
};

// Bai Tap 2: If/Else - Bai4
function bai_4(randomNumber) {
    if (randomNumber % 2 == 0) {
        console.log('Day la so chan');
    } else {
        console.log('Day la so le');
    }
};

// Bai Tap 2: If/Else - Bai5
function bai_5(randomNumber) {
    if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
        console.log('So chia het cho 3 va 5');
    } else {
        console.log('So khong chia het cho 3 va 5');
    }
};

// Bai Tap 2: If/Else - Bai6
function bai_6(a,b,c) {
    let sum_Ab = a + b;
    if (c == sum_Ab) {
        console.log('C bang ket qua A + B');
    } else {
        console.log('C khong bang ket qua A + B');
    }
};


