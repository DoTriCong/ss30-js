let soTienGui = +prompt("Nhập số tiền gửi:");
let soThangGui = +prompt("Nhập số tháng gửi:");
let laiSuatNam = 4.3 / 100;
if ( soTienGui <= 0 || soThangGui <= 0) {
    alert("vui long nhap so tien hop le.");
} else {
    let laiSuatThang = laiSuatNam / 12;
    let tienLai = soTienGui * laiSuatThang * soThangGui;
    alert(`so tien lai sau ${soThangGui} thang la: ${tienLai} VND`);
}