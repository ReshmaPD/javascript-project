// ===============================================================DECLARATIONS=========================================================================
const data = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : {
      todo: [],
      completed: [],
      favourite: []
    };

const deleteSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`;
const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path
  d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"
/>
</svg>`;

const showToggelInput = document.getElementsByClassName(
  "toggle-input-field"
)[0];
const showToggelStar = document.getElementsByClassName("todo")[0];
const addButtonClick = document.getElementsByClassName("button-add")[0];
const addtask = document.getElementsByClassName("submit-item")[0];
// const checkStrike = document.getElementsByClassName("submit-item")[0];
// ==========================================================================================================================================================
renderTodoList();
//=========================================================FUNCTIONS===========================================================================================
function showInputField() {
  showToggelInput.classList.toggle("hidden-input");
  //   showValue;
}
addButtonClick.addEventListener("click", showInputField, false);

function showValue(event) {
  event.preventDefault();
  const value_title = document.getElementsByClassName("item-title")[0].value;
  const value_note = document.getElementsByClassName("item-note")[0].value;
  console.log(value_title, value_note);
  document.getElementsByClassName("item-title")[0].value = "";
  document.getElementsByClassName("item-note")[0].value = "";
  showToggelInput.classList.toggle("hidden-input");
  if (value_title) {
    addItem(value_title);
  }
}

// addtask.addEventListener("click", function() {
//   let value = document.getElementById("item").value;
//   if (value) {
//     addItem(value);
//   }
// });

// document
//   .getElementsByClassName("item-title")[0]
//   .addEventListener("keydown", function(e) {
//     let value = this.value;
//     if ((e.code === "Enter" || e.code === "NumpadEnter") && value) {
//       addItem(value);
//     }
//   });

function dataObjectUpdated() {
  localStorage.setItem("todoList", JSON.stringify(data));
}

function addItem(value_title) {
  addItemToDOM(value_title);
  data.todo.push(value_title);
  dataObjectUpdated();
}

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (let i = 0; i < data.todo.length; i++) {
    let value = data.todo[i];
    addItemToDOM(value);
  }

  for (let j = 0; j < data.completed.length; j++) {
    let value = data.completed[j];
    addItemToDOM(value, true);
  }
}

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
  dataObjectUpdated();

  parent.removeChild(item);
}

function starItem() {
  showToggelStar.classList.toggle("starred");
}
function checkBoxHandler() {
  showToggelStar.classList.toggle("completed-tasks");
  completeItem();
}

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
  }
  dataObjectUpdated();
}
// Adds a new item to the todo list
function addItemToDOM(text, completed) {
  let list = completed
    ? document.getElementById("completed")
    : document.getElementById("todo");

  let checkBox = document.createElement("input");
  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons-icons");

  let remove = document.createElement("button");
  remove.classList.add("delete");
  remove.innerHTML = deleteSVG;

  //   let note = document.createElement("p");
  //   note.innerText = text1;

  // Add click event for removing the item
  remove.addEventListener("click", removeItem);

  let starIcon = document.createElement("button");
  starIcon.classList.add("favourite");
  starIcon.innerHTML = starSVG;

  // Add click event for completing the item
  // complete.addEventListener("click", completeItem);

  starIcon.addEventListener("click", starItem);
  checkBox.addEventListener("click", checkBoxHandler);

  checkBox.type = "checkbox";

  buttons.appendChild(remove);
  buttons.appendChild(starIcon);
  item.appendChild(buttons);
  item.insertBefore(checkBox, item.childNodes[0]);
  list.insertBefore(item, list.childNodes[0]);
}
// ====================================================EVENT LISTENERS=============================================================
addtask.addEventListener("click", showValue, false);
