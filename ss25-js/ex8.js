function isStrongPassword(password){
    let countCharacterLowerCase = 0;
    let countCharacterUpperCase = 0;
    let countDigit = 0;

    for (const char of password) {
        if('a' <= char && char <= 'z'){
            countCharacterLowerCase++;
        }
        else if('A' <= char && char <= 'Z'){
            countCharacterUpperCase++;
        }
        else if('1' <= char && char <= '9'){
            countDigit++;
        }
    }

    if(password.length >= 8 && countCharacterLowerCase >= 1 && 
        countCharacterUpperCase >= 1 && countDigit >= 1 && 
        countSpecialCharacter >= 1){
            alert('Mật khẩu mạnh')
    }
    else{
        alert('Mật khẩu yếu')
    }
}

let password = prompt('Nhập mật khẩu của bạn:');
isStrongPassword(password);