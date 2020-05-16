'use strict';

const toDoTasksElm = document.querySelector(".todo__tasks")

const tasks = []

const updateTasks = () => {
  toDoTasksElm.innerHTML = ""
  for (let i = 0; i < tasks.length; i += 1) {
    toDoTasksElm.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
};

const buttonElm = document.querySelector(".btn-add");
buttonElm.addEventListener("click", () => {
  const inputElm = document.querySelector("#new-task")
  tasks.push(inputElm.value);
  inputElm.value = "";
  updateTasks();
})

