let sumOdd = 0;
for (let i = 0; i < 5; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    
    if (isNaN(num) || !Number.isInteger(num)) {
        document.write("Vui lòng nhập đúng số nguyên.");
        break;
    }
    if (num % 2 !== 0) {
        sumOdd += num;
    }
}
document.write(`Tổng các số lẻ: ${sumOdd}`);