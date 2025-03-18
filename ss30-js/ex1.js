let products = [
    { id: 1, name: "Mèn mén", category: "Món ăn dân tộc Mông", price: 20000, quantity: 20 },
    { id: 2, name: "Mứt", category: "Món ăn dân tộc Kinh", price: 80000, quantity: 21 },
    { id: 3, name: "Cơm lam", category: "Món ăn dân tộc Mông", price: 40000, quantity: 15 },
    { id: 4, name: "Bánh đậu xanh", category: "Món ăn dân tộc Kinh", price: 60000, quantity: 30 }
];

let cart = [];
function displayProductsByCategory(category) {
    let filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length > 0) {
        console.table(filteredProducts);
    } else {
        console.log("Không có sản phẩm trong danh mục này.");
    }
}

function addToCart(productId, quantity) {
    let product = products.find(product => product.id === productId);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }
    if (product.quantity < quantity) {
        console.log("Số lượng không đủ trong cửa hàng.");
        return;
    }
    product.quantity -= quantity;
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: productId, name: product.name, price: product.price, quantity });
    }
    console.log("Đã thêm sản phẩm vào giỏ hàng.");
}

function sortProductsByPrice(order) {
    if (order === "1") {
        products.sort((a, b) => a.price - b.price);
    } else if (order === "2") {
        products.sort((a, b) => b.price - a.price);
    } else {
        console.log("Thứ tự không hợp lệ.");
    }
    console.table(products);
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền thanh toán: ${total} VND`);
}

function exitProgram() {
    console.log("Cảm ơn bạn đã sử dụng chương trình.");
    process.exit();
}

function menu() {
   console.log(`
Chọn thao tác:
1. Hiển thị sản phẩm theo danh mục
2. Chọn sản phẩm để mua
3. Sắp xếp sản phẩm theo giá
4. Tính tổng tiền trong giỏ hàng
5. Thoát
`);
}

function main() {
    let running = true;
    while (running) {
        menu();
        let choice = prompt("Nhập lựa chọn của bạn: ");
        switch (choice) {
            case "1":
                let category = prompt("Nhập tên danh mục: ");
                displayProductsByCategory(category);
                break;
            case "2":
                let productId = parseInt(prompt("Nhập ID sản phẩm: "));
                let quantity = parseInt(prompt("Nhập số lượng: "));
                addToCart(productId, quantity);
                break;
            case "3":
                let order = prompt("Nhập '1' để tăng dần hoặc '2' để giảm dần: ");
                sortProductsByPrice(order);
                break;
            case "4":
                calculateTotal();
                break;
            case "5":
                exitProgram();
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}

main();
