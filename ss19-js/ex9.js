let result = "javascript" + 5;
console.log(result); // "javascript5"
// Giải thích: Toán tử + khi gặp chuỗi sẽ thực hiện phép nối chuỗi, do đó số 5 sẽ được chuyển thành chuỗi và nối vào chuỗi "javascript".
let result = "javascript" - 1;
console.log(result); // NaN
// Giải thích: Toán tử - không được định nghĩa cho chuỗi. JavaScript cố gắng chuyển đổi "javascript" thành số nhưng không thành công nên kết quả là NaN (Not-a-Number).
let result = "3" + 2;
console.log(result); // "32"
// Giải thích: Toán tử + khi gặp chuỗi sẽ thực hiện phép nối chuỗi, do đó số 2 sẽ được chuyển thành chuỗi và nối vào chuỗi "3".
let result = "5" - 4;
console.log(result); // 1
// Giải thích: Toán tử - yêu cầu các giá trị là số. JavaScript chuyển đổi chuỗi "5" thành số 5 và thực hiện phép trừ, kết quả là 1.s`
let result = isNaN("123");
console.log(result); // false
// Giải thích: Hàm isNaN kiểm tra xem đối số của nó có phải không phải số hay không. Vì "123" có thể chuyển đổi thành số 123, kết quả là false.
let result = isNaN("hello");
console.log(result); // true
// Giải thích: Vì "hello" không thể chuyển đổi thành số, hàm isNaN trả về true.
let result = Number.isNaN("123");
console.log(result); // false
// Giải thích: Hàm Number.isNaN kiểm tra xem đối số của nó có chính xác là NaN hay không. Vì "123" không phải là NaN, kết quả là false.
let result = Number.isNaN(NaN);
console.log(result); // true
// Giải thích: Hàm Number.isNaN kiểm tra xem đối số của nó có chính xác là NaN hay không. Vì đối số là NaN, kết quả là true.
