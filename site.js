const i = document.querySelector("h3");
i.textContent = new Date();
i.style.color = "rgb(171, 129, 75)";
i.style.paddingLeft = "1em";
i.style.fontFamily = "Courier New";

//    T i m e   o f   D a y
const hours = new Date().getHours();

const morning = hours >= 4 && hours < 12;
const afternoon = hours >= 12 && hours < 17;

if (morning) {
  const hi = document.getElementById("welcome");
  hi.textContent = "Good Morning";
} else if (afternoon) {
  const hi = document.getElementById("welcome");
  hi.textContent = "Good Afternoon";
} else {
  const hi = document.getElementById("welcome");
  hi.textContent = "Good Evening";
}

//    I t ' s   a   s e c r e t   t o   e v e r y b o d y
localStorage.setItem(
  "It's a secret to everybody.",
  "Even Google does not know what ur hiding in ur bathroom"
);

//    T o   d o   L i s t

const taskList = document.querySelector(".doThis"); //<li>
const input = document.getElementById("todo-list");
const addButton = document.querySelector(".doButton");

// Get the task array from local storage
const todos = JSON.parse(localStorage.getItem("tasks")) || [];

function renderList() {
  taskList.innerHTML = "";
  // .forEach iterates(goes through)
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    taskList.appendChild(li); // append = add, child of taskList
  });
}

renderList(); // update to do list on webpage

addButton.addEventListener("click", () => {
  const newTask = { text: input.value, completed: false };
  todos.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(todos));
  input.value = "";
  renderList();
});
