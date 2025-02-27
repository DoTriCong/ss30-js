let a = +prompt("Mời bạn nhập vào một số a");
let b = +prompt("Mời bạn nhập vào một số b");
let c = +prompt("Mời bạn nhập vào một số c");
let denta = b**2 - 4 * a * c;
if (isNaN(a,b,c)) {
document.write("Giá trị nhập vào không phải là số hợp lệ.");
}else if(denta > 0){
let root1 = (-b + Math.sqrt(denta)) / (2 * a);
let root2 = (-b - Math.sqrt(denta)) / (2 * a);
document.write( `Phương trình có 2 nghiệm phân biệt: x1 = ${root1} va x2 = ${root2}`);
}else if (denta === 0) {
let root = -b / (2 * a);
document.write( `Phương trình có nghiệm kép: x = ${root}`);
} else {
document.write( 'Phương trình vô nghiệm');
}

