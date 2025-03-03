let amount = prompt("Nhập vào số tiền cần chuyển đổi:");
let fromCurrency = prompt("Nhập vào loại tiền tệ (VND hoặc USD):").toUpperCase();
const exchangeRate = 23000;
let result;
if (fromCurrency === "VND") {
    result = amount / exchangeRate;
    alert(`${amount} VND = ${result.toFixed(2)} USD`);
} else if (fromCurrency === "USD") {
    result = amount * exchangeRate;
    alert(`${amount} USD = ${result} VND`);
} else {
    alert("Loại tiền tệ không hợp lệ. Vui lòng nhập lại VND hoặc USD.");
}
