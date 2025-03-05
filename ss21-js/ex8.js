document.write("Các số Armstrong có 3 chữ số là: <br>");
for (let num = 100; num <= 999; num++) {
    let a = Math.floor(num / 100);        
    let b = Math.floor((num % 100) / 10); 
    let c = num % 10;                    
    if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) === num) {
        document.write(num + "<br>");
    }
}