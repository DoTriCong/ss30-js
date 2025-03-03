let character = prompt("Mời bạn nhập vào một kí tự để kiểm tra");
if (character.length > 0 && /^[a-zA-Z]+$/.test(character)) {
    alert(character + " là chữ cái.");
} else {
    alert(character + " không phải chữ cái.");
}
