let passWord = "552006";
let inputPassword;
while (true) { 
  inputPassword = prompt("Mời bạn nhập vào mật khẩu:");
if (inputPassword === passWord) {
    document.write("Bạn đã nhập đúng mật khẩu!");
break;
} else {
    alert("Mật khẩu sai, vui lòng thử lại!");
}
}