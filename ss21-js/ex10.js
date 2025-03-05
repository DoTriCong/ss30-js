let n = +prompt("Mời bạn nhập vào một số nguyên dương n:");
if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
    document.write("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let count = 0; 
    let num = 2; 
    let primeNumbers = [];
    while (count < n) {
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
            primeNumbers.push(num);
            count++;
        }
        num++; 
    }
    document.write(`Số nguyên tố đầu tiên: ${primeNumbers.join(", ")}`);
}
