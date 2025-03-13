function menuGeometryCalculator() {
    let exit = false;
    do {
      alert("=== Menu Tính Toán Hình Học ===");
      alert("1. Tính diện tích hình tròn");
      alert("2. Tính chu vi hình tròn");
      alert("3. Tính diện tích hình chữ nhật");
      alert("4. Tính chu vi hình chữ nhật");
      alert("5. Thoát");
  
      const choice = prompt("Nhập lựa chọn của bạn (1-5):");
      switch (choice) {
        case "1": {
          const radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
          if (radius > 0) {
            const area = Math.PI * radius * radius;
            alert(`Diện tích hình tròn là: ${area.toFixed(2)}`);
          } else {
            alert("Bán kính phải lớn hơn 0.");
          }
          break;
        }
        case "2": {
          const radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
          if (radius > 0) {
            const circumference = 2 * Math.PI * radius;
            alert(`Chu vi hình tròn là: ${circumference.toFixed(2)}`);
          } else {
            alert("Bán kính phải lớn hơn 0.");
          }
          break;
        }
        case "3": {
          const length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
          const width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
          if (length > 0 && width > 0) {
            const area = length * width;
            alert(`Diện tích hình chữ nhật là: ${area}`);
          } else {
            alert("Chiều dài và chiều rộng phải lớn hơn 0.");
          }
          break;
        }
        case "4": {
          const length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
          const width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
          if (length > 0 && width > 0) {
            const perimeter = 2 * (length + width);
            alert(`Chu vi hình chữ nhật là: ${perimeter}`);
          } else {
            alert("Chiều dài và chiều rộng phải lớn hơn 0.");
          }
          break;
        }
        case "5":
          alert("Thoát chương trình.");
          exit = true;
          break;
        default:
          alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
      }
    } while (!exit);
  }
  
  menuGeometryCalculator();
  