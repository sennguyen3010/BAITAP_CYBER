class ToDoList {
  taskList = [];

  addTask = function (newTask) {
    this.taskList.push(newTask);
  };

  checkTask = function (idCheck) {
    this.taskList.find((item) => {
      if (item.id == idCheck) {
        item.completed = true;
      }
    });
  };

  deleteTask = function (idClick) {
    let index = this.taskList.findIndex((item) => item.id == idClick);
    this.taskList.splice(index, 1);
  };

  saveTask = function (key, value) {
    let sStore = JSON.stringify(value);
    localStorage.setItem(key, sStore);
  };

  getTask = function (key) {
    if (localStorage.getItem(key)) {
      let sValue = localStorage.getItem(key);
      this.taskList = JSON.parse(sValue);
    }
  };
}
