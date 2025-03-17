let productList = [];
let choice;

function addProduct() {
    const productName = prompt("Nhập tên sản phẩm: ");
    const productPrice = +prompt("Nhập giá sản phẩm: ");
    const productCategory = prompt("Nhập danh mục sản phẩm: ");
    const productQuantity = +prompt("Nhập số lượng sản phẩm: ");
    const productId = Math.ceil(Math.random() * 1000000);

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        category: productCategory,
        quantity: productQuantity
    };

    productList.push(product);
    alert("Sản phẩm đã được thêm thành công!");
}

function displayAllProducts() {
    if (productList.length === 0) {
        alert("Danh sách sản phẩm trống.");
    } else {
        console.table(productList);
    }
}

function viewProductDetails() {
    const productId = +prompt("Nhập ID sản phẩm cần xem chi tiết: ");
    const product = productList.find(product => product.id === productId);

    if (product) {
        console.table(product);
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function updateProductById() {
    const productId = +prompt("Nhập ID sản phẩm cần cập nhật: ");
    const product = productList.find(product => product.id === productId);

    if (product) {
        const updatedName = prompt("Nhập tên mới (hoặc để trống nếu không thay đổi): ");
        const updatedPrice = +prompt("Nhập giá mới (hoặc để trống nếu không thay đổi): ");
        const updatedCategory = prompt("Nhập danh mục mới (hoặc để trống nếu không thay đổi): ");
        const updatedQuantity = +prompt("Nhập số lượng mới (hoặc để trống nếu không thay đổi): ");
        if (updatedName) product.name = updatedName;
        if (updatedPrice) product.price = updatedPrice;
        if (updatedCategory) product.category = updatedCategory;
        if (updatedQuantity) product.quantity = updatedQuantity;
        alert("Thông tin sản phẩm đã được cập nhật!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function deleteProductById() {
    const productId = +prompt("Nhập ID sản phẩm cần xóa: ");
    const productIndex = productList.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        productList.splice(productIndex, 1);
        alert("Sản phẩm đã bị xóa!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này.");
    }
}

function filterProductsByPriceRange() {
    const minPrice = +prompt("Nhập giá tối thiểu: ");
    const maxPrice = +prompt("Nhập giá tối đa: ");
    const filteredProducts = productList.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (filteredProducts.length > 0) {
        console.table(filteredProducts);
    } else {
        alert("Không tìm thấy sản phẩm trong khoảng giá này.");
    }
}

do {
    choice = +prompt(`Chọn chức năng:
1. Thêm sản phẩm
2. Hiển thị tất cả sản phẩm
3. Hiển thị chi tiết sản phẩm theo ID
4. Cập nhật thông tin sản phẩm theo ID
5. Xóa sản phẩm theo ID
6. Lọc sản phẩm theo khoảng giá
7. Thoát`);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayAllProducts();
            break;
        case 3:
            viewProductDetails();
            break;
        case 4:
            updateProductById();
            break;
        case 5:
            deleteProductById();
            break;
        case 6:
            filterProductsByPriceRange();
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 7);
