let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

function renderTodoLists() {
  let ul = document.getElementById("todos");
  let todosTemplate = Handlebars.compile(document.getElementById('todoItemTemplate').innerHTML);
  ul.innerHTML = todosTemplate({todo_items});
}

function showModal() {
  let confirmModal = document.getElementById('confirm');
  confirmModal.style.display = 'block';
  // let ul = document.getElementById("todos");
  // ul.style.opacity = '0.3';
}

function hideModal() {
  let confirmModal = document.getElementById('confirm');
  confirmModal.style.display = 'none';
  // let ul = document.getElementById("todos");
  // ul.style.opacity = '1';
}

function handleButtons() {
  let deleteBtns = Array.from(document.querySelectorAll('a'));
  let dataId;

  deleteBtns.forEach(dBtn => {
    dBtn.addEventListener("click", event => {
      event.preventDefault();

      dataId = String(dBtn.getAttribute('data-id'));
      showModal();
    });
  });

  let yesBtn = document.getElementById("yes");
  yesBtn.addEventListener("click", event => {
    let div = document.querySelector(`div[data-todoItem='${dataId}']`);
    
    if (div) {
      div.remove(); 
    }
    hideModal();
  });

  let noBtn = document.getElementById("no");
  noBtn.addEventListener("click", event => {
    dataId = null;
    hideModal();
  });
}

document.addEventListener("DOMContentLoaded", event => {
  renderTodoLists();
  handleButtons();
});