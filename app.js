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
      id: id.value
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

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

//this is the part I am stuggling with, I have a feeling it has to do with id and .value
    deleteButton.addEventListener('submit', event => {
      event.preventDefault();
      toDos.filter(toDo.id === toDos.id);
      renderTheUI();
    });
  }
}



window.onload = function() {
  onReady();
};
