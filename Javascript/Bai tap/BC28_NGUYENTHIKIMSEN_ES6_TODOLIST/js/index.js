let toDoList = new ToDoList();
toDoList.getTask('arrTask');

const renderTask = (arrTask) => {
  let html = '';
  let htmlCompleted = '';

  arrTask.map((task) => {
    return `
      ${
        !task.completed
          ? (html += `
          <li>
            <span>${task.item}</span>
            <div class="buttons">
              <button class="remove" onclick="deleteTask('${task.id}')">
                <i class="far fa-trash-alt"></i>
              </button>
              <button class="complete" onclick="checkTask('${task.id}')">
                <i class="fas fa-check-circle"></i>
                <i class="far fa-check-circle"></i>
              </button>
            </div>
          </li>
          `)
          : (htmlCompleted += `<li>
          <span>${task.item}</span>
          <div class="buttons">
            <button class="remove" onclick="deleteTask('${task.id}')">
              <i class="far fa-trash-alt"></i>
            </button>
            <button class="complete" onclick="checkTask('${task.id}')">
              <i class="fas fa-check-circle"></i>
              <i class="far fa-check-circle"></i>
            </button>
          </div>
        </li>`)
      }
      `;
  });
  document.querySelector('#todo').innerHTML = html;
  document.querySelector('#completed').innerHTML = htmlCompleted;
};

renderTask(toDoList.taskList);

document.querySelector('#addItem').onclick = function () {
  let newTask = document.querySelector('#newTask').value;

  let task = {
    id: Date.now(),
    item: newTask,
    completed: false,
  };
  task.item = newTask;

  toDoList.addTask(task);

  document.querySelector('#newTask').value = '';

  toDoList.saveTask('arrTask', toDoList.taskList);
  renderTask(toDoList.taskList);
};

window.checkTask = (id) => {
  toDoList.checkTask(id);

  toDoList.saveTask('arrTask', toDoList.taskList);

  renderTask(toDoList.taskList);
};

window.deleteTask = (id) => {
  toDoList.deleteTask(id);

  toDoList.saveTask('arrTask', toDoList.taskList);

  renderTask(toDoList.taskList);
};

document.querySelector('#two').onclick = function () {
  let arrSortAToZ = toDoList.taskList.sort(function (a, b) {
    let n1 = a.item.toLowerCase();
    let n2 = b.item.toLowerCase();
    if (n1 < n2) {
      return -1;
    }
    if (n1 > n2) {
      return 1;
    } else return 0;
  });
  renderTask(arrSortAToZ);
};

document.querySelector('#three').onclick = function () {
  let arrSortZToA = toDoList.taskList.sort(function (a, b) {
    let n1 = a.item.toLowerCase();
    let n2 = b.item.toLowerCase();
    if (n1 > n2) {
      return -1;
    }
    if (n1 < n2) {
      return 1;
    } else return 0;
  });
  renderTask(arrSortZToA);
};
