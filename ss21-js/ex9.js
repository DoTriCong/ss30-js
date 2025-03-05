let num = +prompt("Mời bạn nhập vào một số nguyên bất kỳ:");
if (isNaN(num) || !Number.isInteger(num)) {
    document.write("Vui lòng nhập đúng số nguyên.");
} else {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.write(`${num} là số nguyên tố.`);
    } else {
        document.write(`${num} không phải là số nguyên tố.`);
    }
}
