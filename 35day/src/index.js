const taskForm = document.querySelector("#taskForm");
const taskInput = taskForm.querySelector("input");
const taskPendingList = document.querySelector(".pendingList");


const PENDING_LIST = "PENDING";
let PENDING = [];

function deleteTask(event) {
    const button = event.target;
    const li = button.parentNode;
    taskPendingList.removeChild(li);
    const cleanTasks = PENDING.filter(function (task) {
        return task.id !== parseInt(li.id);
    });

    PENDING = cleanTasks;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(PENDING_LIST, JSON.stringify(PENDING));
}

function paintTasks(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const newId = PENDING.length + 1;
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteTask);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = newId;
    taskPendingList.appendChild(li);
    const taskObject = {
        text: text,
        id: newId
    };
    PENDING.push(taskObject);
    saveTasks();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTasks(currentValue);
    taskInput.value = "";
}

function loadTasks() {
    const loadedPendingTask = localStorage.getItem(PENDING_LIST);
    if (loadedPendingTask !== null) {
        const parsedPendingTask = JSON.parse(loadedPendingTask);
        parsedPendingTask.forEach(function (task) {
            paintTasks(task.text);
        });
    }
}

function init() {
    loadTasks();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
