document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(newTaskDescription.value);
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.textContent = "x";
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}
