let num = +prompt("Mời bạn nhập một số nguyên:");
if (isNaN(num) || !Number.isInteger(num)) {
    document.write("Vui lòng nhập một số nguyên hợp lệ.");
} else {
    document.write(`Các ước của ${num} là: `);
    for (let i = 1; i <= Math.abs(num); i++) {
        if (num % i === 0) {
            document.write(i + " ");
        }
    }
}