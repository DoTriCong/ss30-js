let banKinh = parseFloat(prompt("nhap ban kinh cua hinh cau (r):"));
let theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3);
let dienTichBeMat = 4 * Math.PI * Math.pow(banKinh, 2);
let chuViLonNhat = 2 * Math.PI * banKinh;
alert(`Thể tích hình cầu: ${theTich}`);
alert(`Dien tich be mat la: ${dienTichBeMat}`);
alert(`Chu vi lớn nhất: ${chuViLonNhat}`);