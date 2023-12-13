const app = require('./todo');


test('Add a task', () => {
    let tasks = [];
    app.addTask(tasks, 'Buy groceries');
    expect(tasks).toEqual(['Buy groceries']);
});

test('Complete a task', () => {
    let tasks = [];
    tasks.push('Buy groceries', 'Walk the dog');
    app.completeTask(tasks, 'Buy groceries');
    expect(tasks).toEqual(['Walk the dog']);
});

test('Delete a task', () => {
    let tasks = [];
    tasks.push('Buy groceries', 'Walk the dog');
    app.deleteTask(tasks, 'Walk the dog');
    expect(tasks).toEqual(['Buy groceries']);
});

test('List tasks', () => {
    let tasks = [];
    tasks.push('Buy groceries', 'Walk the dog');
    const taskList = app.listTasks(tasks);
    expect(taskList).toEqual(['Buy groceries', 'Walk the dog']);
});
