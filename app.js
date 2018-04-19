function onReady() {
  let id = 0;

  toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });


    newToDoText.value = '';

    renderTheUI();
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    toDoList = document.getElementById('toDoList');
    id = 0;

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      //made these variables since their value has to change as the list changes
      newLi = document.createElement('li');
      checkbox = document.createElement('input');
      deleteButton = document.createElement('input');
      //added id to each part of a new list item so that the li's id is defined for the filter function
      newLi.setAttribute("id", "listNumber" + id);
      checkbox.setAttribute("id", "checkbox" + id);
      deleteButton.setAttribute("id", "deleteButton" + id);
      newLi.setAttribute("counterID", id);

      checkbox.type = "checkbox";
      deleteButton.type = "button";

      deleteButton.value = 'Delete';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      toDo.id = id
      id++;
      deleteButton.addEventListener('click', function() {
        event.preventDefault();

        localID = this.parentElement.getAttribute("counterID");

        toDos = toDos.filter(item => item.id != localID);
        renderTheUI();

      });

    });

  }
}

window.onload = function() {
  onReady();
};


// function onReady() {
//   let id = 0;
//   const toDos = [];
//   const addToDoForm = document.getElementById('addToDoForm');
//
//   function createNewToDo() {
//     const newToDoText = document.getElementById('newToDoText');
//     if (!newToDoText.value) {
//       return;
//     }
//
//     toDos.push({
//       title: newToDoText.value,
//       complete: false,
//       id: id
//     });
//
//     id++;
//
//     newToDoText.value = '';
//
//     renderTheUI();
//   }
//   addToDoForm.addEventListener('submit', event => {
//     event.preventDefault();
//     createNewToDo();
//   });
//
//   function renderTheUI() {
//     const toDoList = document.getElementById('toDoList');
//
//     toDoList.textContent = '';
//
//     toDos.forEach(function(toDo) {
//       const newLi = document.createElement('li');
//       const checkbox = document.createElement('input');
//       const deleteButton = document.createElement('input'); //needs to have an id to count, right now it doesn't
//       checkbox.type = "checkbox";
//       deleteButton.type = "submit";
//
//       deleteButton.value = 'Delete';
//
//       newLi.textContent = toDo.title;
//
//       toDoList.appendChild(newLi);
//       newLi.appendChild(checkbox);
//       newLi.appendChild(deleteButton);
//
//       newLi.className += " headline";
//     });
//
//     deleteButton.addEventListener('submit', event => {
//       event.preventDefault();
//
//       function seeId() {
//         return toDos.id === id;
//       }
//
//       function deleteLi() {
//         toDos = toDos.filter(seeId);
//       }
//       renderTheUI();
//
//     });
//   }
// }
//
// window.onload = function() {
//   onReady();
// };
