function studentManagement() {
    let students = [];
    let exit = false;
  
    do {
      console.log("=== Menu Quản Lý Sinh Viên ===");
      console.log("1. Nhập danh sách sinh viên");
      console.log("2. Hiển thị danh sách sinh viên");
      console.log("3. Tìm sinh viên theo tên");
      console.log("4. Xóa sinh viên khỏi danh sách");
      console.log("5. Thoát");
  
      const choice = prompt("Nhập lựa chọn của bạn (1-5):");
  
      switch (choice) {
        case "1": {
          const count = parseInt(prompt("Nhập số lượng sinh viên:"));
          for (let i = 0; i < count; i++) {
            const name = prompt(`Nhập tên đầy đủ của sinh viên ${i + 1}:`);
            students.push(name);
          }
          console.log("Danh sách sinh viên đã được nhập.");
          break;
        }
        case "2": {
          if (students.length > 0) {
            console.log("Danh sách sinh viên:");
            students.forEach((student, index) => {
              console.log(`${index + 1}. ${student}`);
            });
          } else {
            console.log("Danh sách sinh viên trống.");
          }
          break;
        }
        case "3": {
          const searchName = prompt("Nhập tên sinh viên cần tìm:");
          const foundStudent = students.find((student) => student === searchName);
          if (foundStudent) {
            console.log(`Sinh viên tìm thấy: ${foundStudent}`);
          } else {
            console.log("Sinh viên không có trong danh sách.");
          }
          break;
        }
        case "4": {
          const deleteName = prompt("Nhập tên sinh viên cần xóa:");
          const index = students.indexOf(deleteName);
          if (index !== -1) {
            students.splice(index, 1);
            console.log(`Đã xóa sinh viên: ${deleteName}`);
          } else {
            console.log("Sinh viên không có trong danh sách.");
          }
          break;
        }
        case "5":
          console.log("Thoát chương trình.");
          exit = true;
          break;
        default:
          console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
      }
    } while (!exit);
  }
  
  studentManagement();
  