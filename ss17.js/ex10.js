let num = +prompt("nhap mot so bat ky");
let sqrt = Math.sqrt(num);
if ( Number.isInteger(sqrt) == true ){
    alert(`${num} la so chinh phuong`);
}else{
    alert(`${num} khong phai la so chinh phuong`);
}
