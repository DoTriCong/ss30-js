let inputString = prompt("Mời bạn nhập chuỗi muốn kiểm tra"); 
if (inputString.includes(' ')) {
    alert(`Chuỗi "${inputString}" có chứa dấu cách.`);
} else {
    alert(`Chuỗi "${inputString}" không chứa dấu cách.`);
}
