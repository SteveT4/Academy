function addTask(tasks, task) {
    tasks.push(task);
  }
  
  function completeTask(tasks, task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }
  
  function deleteTask(tasks, task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }
  
  function listTasks(tasks) {
    return tasks;
  }
  
  module.exports = {
    addTask,
    completeTask,
    deleteTask,
    listTasks,
  };
  