let money = +prompt("Moi ban nhap vao mot so ");
if (isNaN(money)) {
    console.log("Giá trị nhập vào không phải là số hợp lệ.");
  } else {
console.log(`dạng tiền tệ VNĐ ${money.toLocaleString()}`);
  }