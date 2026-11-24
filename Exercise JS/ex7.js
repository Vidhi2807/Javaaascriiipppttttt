

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = itemInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  todoList.appendChild(li);

  itemInput.value = "";
});

clearBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});
