function primes(number) {
    if (!Number.isInteger(number) || number <= 0) {
        return "Dữ liệu không hợp lệ";
    }
    if (number === 1) {
        return "Không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "Không phải là số nguyên tố";
        }
    }
    return "Là số nguyên tố";
}
let userInput = prompt("Nhập một số nguyên dương:");
let number = parseInt(userInput);
console.log(primes(number));
