let date1 = +prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2 = +prompt("Nhập ngày thứ hai (YYYY-MM-DD):");
let startDate = new Date(date1);
let endDate = new Date(date2);
let timeDifference = endDate - startDate;
let dayDifference = timeDifference / (1000 * 60 * 60 * 24);
console.log(`Độ lệch là ${Math.abs(dayDifference)} ngày`);
