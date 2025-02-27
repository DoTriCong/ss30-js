let number = +prompt("Nhập vào một số bất kỳ:");
if (isNaN(number)) {
  console.log("Giá trị nhập vào không phải là số hợp lệ.");
} else {
  let squareRoot = Math.sqrt(number);
  console.log(`Căn bậc hai của ${number} là ${squareRoot}.`);
}
