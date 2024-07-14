script.js
Updates to keyboard shortcuts … On Thursday, August 1, 2024, Drive keyboard shortcuts will be updated to give you first-letters navigation.Learn more
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let todoItems = [];
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task) {
    todoItems.push({ text: task, completed: false });
    taskInput.value = "";
    updateTodoList();
  }
});

// new add
function updateTodoList() {
  todoList.innerHTML = "";
  todoItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.text;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    listItem.appendChild(checkbox);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoItems.splice(index, 1);
      updateTodoList();
    });
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
  });
}
updateTodoList();