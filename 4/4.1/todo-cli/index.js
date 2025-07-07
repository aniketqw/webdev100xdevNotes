#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, 'todos.json');
function loadTodos() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}
function saveTodos(todos) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2));
}
function makeId() {
  return Math.random().toString(36).substr(2, 6);
}

program
  .command('add <title>')
  .description('Add a new todo')
  .action(title => {
    const todos = loadTodos();
    const newTodo = { id: makeId(), title, done: false };
    todos.push(newTodo);
    saveTodos(todos);
    console.log(`Added [${newTodo.id}]:`, title);
  });

program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (!todos.length) return console.log('No todos yet.');
    todos.forEach(t => {
      console.log(
        `[${t.done ? 'x' : ' '}] (${t.id}) ${t.title}`
      );
    });
  });

program
  .command('remove <id>')
  .description('Remove a todo by its ID')
  .action(id => {
    let todos = loadTodos();
    const before = todos.length;
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    console.log(`Removed ${before - todos.length} item(s).`);
  });

program
  .command('toggle <id>')
  .description('Toggle a todo’s done status by ID')
  .action(id => {
    const todos = loadTodos().map(t => {
      if (t.id === id) t.done = !t.done;
      return t;
    });
    saveTodos(todos);
    console.log(`Toggled ${id}.`);
  });

program.parse(process.argv);
