const taskForm = document.querySelector("#taskForm");
const taskInput = taskForm.querySelector("input");
const taskPendingList = document.querySelector(".pendingList");
const taskFinishedList = document.querySelector(".finishedList");


const PENDING_LIST = "PENDING";
let PENDING = [];

const FINISHED_LIST = "FINISHED";
let FINISHED = [];


function saveTasks() {
    localStorage.setItem(PENDING_LIST, JSON.stringify(PENDING));
    localStorage.setItem(FINISHED_LIST, JSON.stringify(FINISHED));
}

function deletePendingTask(event) {
    event.preventDefault();
    const button = event.target;
    const li = button.parentNode;
    taskPendingList.removeChild(li);
    const cleanToPendingTasks = PENDING.filter(function (task) {
        return task.id !== parseInt(li.id);
    });
    PENDING = cleanToPendingTasks;
    saveTasks();
}

function deleteFinishedTask(event) {
    event.preventDefault();
    const button = event.target;
    const li = button.parentNode;
    taskFinishedList.removeChild(li);
    const cleanToFinishedTasks = FINISHED.filter(function (task) {
        return task.id !== parseInt(li.id);
    });
    FINISHED = cleanToFinishedTasks;
    saveTasks();
}


function paintPendingTasks(text, id) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const conveyButton = document.createElement("button");
    if (id === undefined || id === null) {
        id = PENDING.length + 1;
    }
    const newId = id;
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deletePendingTask);
    conveyButton.innerText = "↓";
    conveyButton.addEventListener("click", conveyFinished);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(conveyButton);
    li.id = newId;
    taskPendingList.appendChild(li);
    const taskObject = {
        text: text,
        id: parseInt(newId)
    };
    PENDING.push(taskObject);
    saveTasks();
}

function paintFinishedTasks(text, id) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const conveyButton = document.createElement("button");
    const newId = id;
    span.innerText = text;
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteFinishedTask);
    conveyButton.innerText = "↑";
    conveyButton.addEventListener("click", conveyPending);
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(conveyButton);
    li.id = newId;
    taskFinishedList.appendChild(li);
    const taskObject = {
        text: text,
        id: parseInt(newId)
    };
    FINISHED.push(taskObject);
    saveTasks();
}

function loadTasks() {
    const loadedPendingTask = localStorage.getItem(PENDING_LIST);
    const loadedFinishedTask = localStorage.getItem(FINISHED_LIST);
    if (loadedPendingTask !== null) {
        const parsedPendingTask = JSON.parse(loadedPendingTask);
        parsedPendingTask.forEach(function (task) {
            paintPendingTasks(task.text, task.id);
        });
    }
    if (loadedFinishedTask !== null) {
        const parsedFinishedTask = JSON.parse(loadedFinishedTask);
        parsedFinishedTask.forEach(function (task) {
            paintFinishedTasks(task.text, task.id);
        });
    }
    saveTasks();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintPendingTasks(currentValue);
    taskInput.value = "";
}

function init() {
    loadTasks();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
