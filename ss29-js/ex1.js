let contactList = [];
let choice;

function addContact() {
    const contactName = prompt("Nhập tên của liên hệ: ");
    const contactEmail = prompt("Nhập email của liên hệ: ");
    const contactPhone = prompt("Nhập số điện thoại của liên hệ: ");
    const contactId = Math.ceil(Math.random() * 1000000);

    const contact = {
        id: contactId,
        name: contactName,
        email: contactEmail,
        phone: contactPhone
    };

    contactList.push(contact);
    alert("Liên hệ đã được thêm thành công!");
}

function displayContactList() {
    if (contactList.length === 0) {
        alert("Danh bạ trống.");
    } else {
        console.table(contactList);
    }
}

function searchContactByPhone() {
    const phoneNumber = prompt("Nhập số điện thoại cần tìm: ");
    const foundContact = contactList.find(contact => contact.phone === phoneNumber);

    if (foundContact) {
        console.table(foundContact);
    } else {
        alert("Không tìm thấy liên hệ với số điện thoại này.");
    }
}

function updateContactById() {
    const contactIdToUpdate = +prompt("Nhập ID của liên hệ cần cập nhật: ");
    const contactToUpdate = contactList.find(contact => contact.id === contactIdToUpdate);
    if (contactToUpdate) {
        const updatedName = prompt("Nhập tên mới (hoặc để trống nếu không cập nhật): ");
        const updatedEmail = prompt("Nhập email mới (hoặc để trống nếu không cập nhật): ");
        const updatedPhone = prompt("Nhập số điện thoại mới (hoặc để trống nếu không cập nhật): ");
        if (updatedName) contactToUpdate.name = updatedName;
        if (updatedEmail) contactToUpdate.email = updatedEmail;
        if (updatedPhone) contactToUpdate.phone = updatedPhone;
        alert("Thông tin liên hệ đã được cập nhật!");
    } else {
        alert("Không tìm thấy liên hệ với ID này.");
    }
}
function deleteContactById() {
    const contactIdToDelete = +prompt("Nhập ID của liên hệ cần xóa: ");
    const contactIndex = contactList.findIndex(contact => contact.id === contactIdToDelete);

    if (contactIndex !== -1) {
        contactList.splice(contactIndex, 1);
        alert("Liên hệ đã bị xóa!");
    } else {
        alert("Không tìm thấy liên hệ với ID này.");
    }
}

do {
    choice = +prompt(`Chọn chức năng:
1. Thêm liên hệ mới
2. Hiển thị danh bạ
3. Tìm kiếm liên hệ theo số điện thoại
4. Cập nhật thông tin liên hệ
5. Xóa liên hệ
6. Thoát`);

    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            displayContactList();
            break;
        case 3:
            searchContactByPhone();
            break;
        case 4:
            updateContactById();
            break;
        case 5:
            deleteContactById();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 6);
