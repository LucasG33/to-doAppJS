const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const clear = document.querySelector(".clear");

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement('li');
    const todo = document.createElement('span');
    todo.textContent = text;

    li.appendChild(todo);
    li.appendChild(DeleteBtnAdd());
    ul.appendChild(li);

    input.value = "";
    clear.style.display = "none";
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('completed');
  }
});

function DeleteBtnAdd() {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "del";
  deleteButton.className = "btn-delete";

  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();

    const todo = e.target.parentElement;
    ul.removeChild(todo);

    const itemsLeft = document.querySelectorAll('li');

    if (itemsLeft.length === 0) {
      clear.style.display = "block";
    }
  });

  return deleteButton;
}