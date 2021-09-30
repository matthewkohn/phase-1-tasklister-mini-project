document.addEventListener("DOMContentLoaded", (e) => {
  // definitions
  const tasks = document.querySelector('#tasks');
  const taskForm = document.querySelector('#create-task-form');
  const inputField = document.querySelector('#new-task-description');

  // handle submit
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addListItem(inputField.value);
    taskForm.reset();
  })

  // add list item
  const addListItem = (input) => {
    // create list item and add it to DOM
    const li = document.createElement('li');
    li.textContent = `${input} `;
    tasks.appendChild(li);

    // add delete button and attach to list items
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.className = 'delete';
    li.appendChild(btn);
  }
  
  // delete if list item button is clicked
  document.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
      e.target.parentElement.remove();
    }
  })
});
