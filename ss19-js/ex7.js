let num1 = +prompt("Nhập vào số thứ nhất:");
let num2 = +prompt("Nhập vào số thứ hai:");
let num3 = +prompt("Nhập vào số thứ ba:");
if (num1 >= num2 && num1 >= num3) {
    alert(`Số lớn nhất trong ba số là ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    alert(`Số lớn nhất trong ba số là ${num2}`);
} else {
    alert(`Số lớn nhất trong ba số là ${num3}`);
}

