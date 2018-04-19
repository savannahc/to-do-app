function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';

    renderTheUI();
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');
      checkbox.type = "checkbox";
      deleteButton.type = "submit";

      deleteButton.value = 'Delete';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

    deleteButton.addEventListener('submit', event => {
      event.preventDefault();

      function seeId() {
        return toDos.id === id;
      }

      function deleteLi() {
        toDos = toDos.filter(seeId);
      }
      renderTheUI();

    });
  }
}

window.onload = function() {
  onReady();
};
