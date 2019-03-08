const showToggelInput = document.getElementsByClassName(
  "toggle-input-field"
)[0];
const addButtonClick = document.getElementsByClassName("button-add")[0];

function showInputField() {
  showToggelInput.classList.toggle("hidden-input");
}
addButtonClick.addEventListener("click", showInputField, false);
