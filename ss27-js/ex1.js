function menuCalculator() {
    let exit = false;
    do {
      alert("=== Menu Tính Toán ===");
      alert("1. Cộng hai số");
      alert("2. Trừ hai số");
      alert("3. Nhân hai số");
      alert("4. Chia hai số");
      alert("5. Thoát");
      const choice = prompt("Nhập lựa chọn của bạn (1-5):");
      if (choice === "5") {
        alert("Thoát chương trình.");
        exit = true;
      } else {
        const num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        const num2 = parseFloat(prompt("Nhập số thứ hai:"));
  
        switch (choice) {
          case "1":
            alert(`Kết quả: ${num1} + ${num2} = ${num1 + num2}`);
            break;
          case "2":
            alert(`Kết quả: ${num1} - ${num2} = ${num1 - num2}`);
            break;
          case "3":
            alert(`Kết quả: ${num1} * ${num2} = ${num1 * num2}`);
            break;
          case "4":
            if (num2 !== 0) {
              alert(`Kết quả: ${num1} / ${num2} = ${num1 / num2}`);
            } else {
              alert("Lỗi: Không thể chia cho 0.");
            }
            break;
          default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
      }
    } while (!exit);
  }
  menuCalculator();
  