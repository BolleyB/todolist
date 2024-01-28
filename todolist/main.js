const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("dueDate").value;

    if (title && dueDate) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <input type="checkbox">
            <span>${title} - ${dueDate}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(task);
        taskForm.reset();
    }
}

function editTask(button) {
    const task = button.parentNode;
    const span = task.querySelector("span");
    const title = span.innerText.split(" - ")[0];
    const dueDate = span.innerText.split(" - ")[1];
    const description = prompt("Edit Task Description:", title);

    if (description !== null) {
        span.innerText = `${description} - ${dueDate}`;
    }
}

function deleteTask(button) {
    const task = button.parentNode;
    taskList.removeChild(task);
}
