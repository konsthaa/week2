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
const todoUl = document.querySelector('ul');

// Loops through each item in the todolist array
todoList.forEach((item) => {
  //add 'checked' if item.completed is true.
  const isChecked = item.completed ? 'checked' : '';

  //creating the HTML string using template literals
  const itemHTML = `
    <li>
      <input type="checkbox" id="todo-${item.id}" ${isChecked}>
      <label for="todo-${item.id}">${item.task}</label>
    </li>
  `;

  //lets inject them into the DOM
  todoUl.insertAdjacentHTML('beforeend', itemHTML);
});
