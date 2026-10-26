// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

// selecting the <ul> element from the DOM
const todoUl = document.querySelector('ul');

// Looping through each item in the todoList array
todoList.forEach((item) => {
  // Creating the necessary dom elements
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

  // Configuring the <input> element and its attributes
  input.type = 'checkbox';
  input.id = `todo-${item.id}`;
  input.checked = item.completed; // this automatically handles checked and unchecked states

  // configuring the <label> element using .htmlFor
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;

  // Assembling the elements in a hierachy
  li.appendChild(input);
  li.appendChild(label);

  // appending the fully assembled <li> to the <ul> containe
  todoUl.appendChild(li);
});
