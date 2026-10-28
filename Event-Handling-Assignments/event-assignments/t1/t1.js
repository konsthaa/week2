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

// Valitaan DOMista tarvittavat elementit
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('dialog form');
const input = document.querySelector('dialog input');

//Funktio, joka renderöi todo-listan uudelleen ruudulle taulukon perusteella
function renderTodoList() {
  //tyhjennetään nykyinen listan ensin, jotta elementit eivät monistu turhaan
  ul.innerHTML = '';

  //käydään läpi todoList-taulukko
  todoList.forEach((item) => {
    //Luodaan li-elementti
    const li = document.createElement('li');

    //Luodaan checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;

    //tehtävän teksti labelin sisään
    const label = document.createElement('label');
    label.innerText = item.task;

    //Poistonappi
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'x'; // tai esim 'Delete'

    //1. tehtävä: Päivitetään tila, kun checkboxia klikataan
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log('Updated todoList after checkbox change:', todoList);
    });

    //2. tehtävä: Poistetaan elementti taulujkosta ja DOM:sta removeChild-metodilla
    deleteBtn.addEventListener('click', () => {
      //Etsitään indeksi ja poistetaan taulukosta (tai filteröidään id:n perusteella)
      const index = todoList.findIndex((t) => t.id === item.id);
      if (index !== -1) {
        todoList.splice(index, 1);
      }

      //Poistetaan DOM-elementti ul-listasta käyttäen removeChildia
      ul.removeChild(li);

      console.log('Updated todoList after deletion:', todoList);
    });

    //Liitetään elementit li-elementtiin ja li ul-elementtiin (mukautuu css-tyyleihin)
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
}

//Suoritetaan renderöinti alsusa, jotta olemassa olevat tuotteet näkyvät sivulla.
renderTodoList();

//3. tehtävä: Add Todo Item -napin toiminta (modaalin avaus)
addBtn.addEventListener('click', () => {
  dialog.showModal(); //HTML5 dialog-elemntin avausmetodi
});

//Lomakkeen lähetys (uuden tehtävän lisäys)
form.addEventListener('submit', (evt) => {
  evt.preventDefault(); //Estetään lomakkeen oletustoiminto (sivun uudelleenlautaus)

  const taskName = input.value.trim();
  if (taskName === '') return;

  //Luodaan uusi objekti
  const newItem = {
    id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
    task: taskName,
    completed: false, // Oletuksena false materiaalin ohjeen mukaan
  };

  // Lisätään taulukkoon
  todoList.push(newItem);

  //Päivitetään näkymä ja tulostetaan konsoliin
  renderTodoList();
  console.log('Updated todoList after adding item:', todoList);

  //Tyhjennetään input ja suljetaan modaali
  input.value = '';
  dialog.close();
});
