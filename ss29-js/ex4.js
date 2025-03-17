let taskList = [];
let choice;

function addTask() {
    const taskName = prompt("Nhập tên công việc: ");
    const taskDescription = prompt("Nhập mô tả công việc: ");
    const startTime = prompt("Nhập thời gian bắt đầu (định dạng: yyyy-mm-dd): ");
    const taskStatus = prompt("Nhập trạng thái công việc (hoàn thành/chưa hoàn thành): ");
    const taskId = Math.ceil(Math.random() * 1000000);

    const task = {
        id: taskId,
        name: taskName,
        description: taskDescription,
        startTime: startTime,
        status: taskStatus.toLowerCase()
    };

    taskList.push(task);
    alert("Công việc đã được thêm thành công!");
}

function displayAllTasks() {
    if (taskList.length === 0) {
        alert("Danh sách công việc trống.");
    } else {
        console.table(taskList);
    }
}

function updateTaskStatus() {
    const taskIdToUpdate = +prompt("Nhập ID công việc cần cập nhật trạng thái: ");
    const task = taskList.find(task => task.id === taskIdToUpdate);

    if (task) {
        const newStatus = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành): ").toLowerCase();
        task.status = newStatus;
        alert("Trạng thái công việc đã được cập nhật!");
    } else {
        alert("Không tìm thấy công việc với ID này.");
    }
}

function filterTasksByStatus() {
    const statusFilter = prompt("Nhập trạng thái để lọc (hoàn thành/chưa hoàn thành): ").toLowerCase();
    const filteredTasks = taskList.filter(task => task.status === statusFilter);

    if (filteredTasks.length > 0) {
        console.table(filteredTasks);
    } else {
        alert(`Không tìm thấy công việc có trạng thái "${statusFilter}".`);
    }
}

function sortTasksByStatus() {
    taskList.sort((a, b) => a.status.localeCompare(b.status));
    console.table(taskList);
    alert("Danh sách công việc đã được sắp xếp theo trạng thái.");
}

do {
    choice = +prompt(`Chọn chức năng:
1. Thêm công việc mới
2. Hiển thị tất cả các công việc
3. Cập nhật trạng thái công việc theo ID
4. Lọc công việc theo trạng thái
5. Sắp xếp công việc theo trạng thái
6. Thoát`);

    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            displayAllTasks();
            break;
        case 3:
            updateTaskStatus();
            break;
        case 4:
            filterTasksByStatus();
            break;
        case 5:
            sortTasksByStatus();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 6);
