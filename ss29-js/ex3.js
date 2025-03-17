let menu = {};
let choice;

function addDishToCategory() {
    const categoryName = prompt("Nhập tên danh mục: ");
    const dishName = prompt("Nhập tên món ăn: ");
    const dishPrice = +prompt("Nhập giá món ăn: ");
    const dishDescription = prompt("Nhập mô tả món ăn: ");

    if (!menu[categoryName]) {
        menu[categoryName] = [];
    }

    const newDish = {
        name: dishName,
        price: dishPrice,
        description: dishDescription,
    };

    menu[categoryName].push(newDish);
    alert(`Món ăn "${dishName}" đã được thêm vào danh mục "${categoryName}".`);
}

function deleteDishByName() {
    const dishName = prompt("Nhập tên món ăn cần xóa: ");
    let found = false;

    for (const category in menu) {
        const index = menu[category].findIndex(dish => dish.name.toLowerCase() === dishName.toLowerCase());
        if (index !== -1) {
            menu[category].splice(index, 1);
            alert(`Món ăn "${dishName}" đã bị xóa khỏi danh mục "${category}".`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`Không tìm thấy món ăn "${dishName}" trong menu.`);
    }
}

function updateDishByName() {
    const dishName = prompt("Nhập tên món ăn cần cập nhật: ");
    let found = false;

    for (const category in menu) {
        const dish = menu[category].find(dish => dish.name.toLowerCase() === dishName.toLowerCase());
        if (dish) {
            const updatedName = prompt("Nhập tên mới (hoặc để trống nếu không thay đổi): ");
            const updatedPrice = +prompt("Nhập giá mới (hoặc để trống nếu không thay đổi): ");
            const updatedDescription = prompt("Nhập mô tả mới (hoặc để trống nếu không thay đổi): ");

            if (updatedName) dish.name = updatedName;
            if (updatedPrice) dish.price = updatedPrice;
            if (updatedDescription) dish.description = updatedDescription;

            alert(`Thông tin món ăn "${dishName}" đã được cập nhật.`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`Không tìm thấy món ăn "${dishName}" trong menu.`);
    }
}

function displayMenu() {
    if (Object.keys(menu).length === 0) {
        alert("Menu trống.");
    } else {
        console.log("Menu nhà hàng:");
        for (const category in menu) {
            console.log(`Danh mục: ${category}`);
            menu[category].forEach((dish, index) => {
                console.log(`${index + 1}. Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
            });
        }
    }
}

function searchDishByName() {
    const dishName = prompt("Nhập tên món ăn cần tìm: ");
    let found = false;

    for (const category in menu) {
        const dish = menu[category].find(dish => dish.name.toLowerCase() === dishName.toLowerCase());
        if (dish) {
            console.log(`Tìm thấy món ăn "${dishName}" trong danh mục "${category}":`, dish);
            found = true;
        }
    }

    if (!found) {
        alert(`Không tìm thấy món ăn "${dishName}" trong menu.`);
    }
}

do {
    choice = +prompt(`Chọn chức năng:
1. Thêm món ăn vào danh mục
2. Xóa món ăn theo tên
3. Cập nhật thông tin món ăn
4. Hiển thị toàn bộ menu
5. Tìm kiếm món ăn theo tên
6. Thoát`);

    switch (choice) {
        case 1:
            addDishToCategory();
            break;
        case 2:
            deleteDishByName();
            break;
        case 3:
            updateDishByName();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDishByName();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 6);
