const taskForm = document.querySelector("#taskForm");
const taskInput = taskForm.querySelector("input");
const taskPendingList = document.querySelector(".pendingList");
const taskFinishedList = document.querySelector(".finishedList");


const PENDING_LIST = "PENDING";
let PENDING = [];

const FINISHED_LIST = "FINISHED";
let FINISHED = [];

function conveyFinished(event){
    event.preventDefault();
    const button = event.target;
    button.innerText = "↑";
    const li = button.parentNode;
    const taskObject = {
        text : li.firstChild.innerText,
        id: parseInt(li.id)
    }
    taskPendingList.removeChild(li);
    taskFinishedList.appendChild(li);
    FINISHED.push(taskObject);
    console.log(FINISHED);
    saveTasks();
}

function deleteTask(event) {
    event.preventDefault();
    const button = event.target;
    const li = button.parentNode;
    taskPendingList.removeChild(li);
    const cleanTasks = PENDING.filter(function (task) {
        return task.id === parseInt(li.id);
    });

    PENDING = cleanTasks;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(PENDING_LIST, JSON.stringify(PENDING));
    localStorage.setItem(FINISHED_LIST, JSON.stringify(FINISHED));
}

function paintPendingTasks(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const conveyButton = document.createElement("button");
    const newId = PENDING.length + 1;
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteTask);
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

function paintFinishedTasks(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const conveyButton = document.createElement("button");
    const newId = FINISHED.length + 1;
    span.innerText = text;
    deleteButton.innerText = "X";
    conveyButton.innerText = "↑";
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(conveyButton);
    li.id = newId;
    taskFinishedList.appendChild(li);
    saveTasks();
}

function loadTasks() {
    const loadedPendingTask = localStorage.getItem(PENDING_LIST);
    const loadedFinishedTask = localStorage.getItem(FINISHED_LIST);
    if (loadedPendingTask !== null) {
        const parsedPendingTask = JSON.parse(loadedPendingTask);
        parsedPendingTask.forEach(function (task) {
            paintPendingTasks(task.text);
        });
    }
    if (loadedFinishedTask !== null) {
        const parsedFinishedTask = JSON.parse(loadedFinishedTask);
        parsedFinishedTask.forEach(function (task) {
            paintFinishedTasks(task.text);
        });
    }
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
