let books = [
    { id: 1, name: "Book A", price: 100, quantity: 10, category: "Fiction" },
    { id: 2, name: "Book B", price: 150, quantity: 5, category: "Science" },
    { id: 3, name: "Book C", price: 200, quantity: 8, category: "Fiction" },
    { id: 4, name: "Book D", price: 120, quantity: 3, category: "History" }
];

let cart = [];

function showBooksByCategory(category) {
    let filteredBooks = books.filter(book => book.category === category);
    console.log("Books in category", category, filteredBooks);
}

function addBook(id, name, price, quantity, category) {
    books.push({ id, name, price, quantity, category });
    console.log("Book added successfully!");
}

function searchBook(query) {
    let result = books.filter(book => book.name.includes(query) || book.id === query);
    console.log("Search results:", result);
}

function buyBook(id, quantity) {
    let book = books.find(b => b.id === id);
    if (book && book.quantity >= quantity) {
        book.quantity -= quantity;
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
        console.log("Book added to cart!");
    } else {
        console.log("Not enough stock!");
    }
}

function sortBooksByPrice(order) {
    let sortedBooks = [...books].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    console.log("Sorted books:", sortedBooks);
}

function getTotalCart() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}, Tổng tiền: ${totalPrice}`);
}

function getTotalStock() {
    let totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log("Total books in stock:", totalStock);
}

function mainMenu() {
    let choice;
    do {
        choice = parseInt(prompt(`Chọn chức năng:
1. Hiển thị sách theo thể loại
2. Thêm sách mới
3. Tìm kiếm sách
4. Mua sách
5. Sắp xếp sách theo giá
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Xem tổng số lượng sách trong kho
8. Thoát`));
        
        switch (choice) {
            case 1:
                let category = prompt("Nhập thể loại: ");
                showBooksByCategory(category);
                break;
            case 2:
                let id = parseInt(prompt("Nhập ID sách: "));
                let name = prompt("Nhập tên sách: ");
                let price = parseFloat(prompt("Nhập giá sách: "));
                let quantity = parseInt(prompt("Nhập số lượng: "));
                let cat = prompt("Nhập thể loại: ");
                addBook(id, name, price, quantity, cat);
                break;
            case 3:
                let query = prompt("Nhập tên hoặc ID sách cần tìm: ");
                searchBook(isNaN(query) ? query : parseInt(query));
                break;
            case 4:
                let bookId = parseInt(prompt("Nhập ID sách muốn mua: "));
                let qty = parseInt(prompt("Nhập số lượng: "));
                buyBook(bookId, qty);
                break;
            case 5:
                let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để giảm dần: ");
                sortBooksByPrice(order);
                break;
            case 6:
                getTotalCart();
                break;
            case 7:
                getTotalStock();
                break;
            case 8:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 8);
}

mainMenu();
