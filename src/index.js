document.addEventListener("DOMContentLoaded", (e) => {
  // DEFINITIONS
  const tasks = document.querySelector('#tasks');
  const taskForm = document.querySelector('#create-task-form');
  const inputField = document.querySelector('#new-task-description');
  

  // FUNCTIONS
  // add list item
  const addListItem = (input) => {
    if (input.length === 0) {
      alert("Enter a task description to add tasks!");
      return;
    }
    // create list item and add it to DOM
    const li = document.createElement('li');
    li.className = 'list-item';
    li.style.borderColor = importanceColor();
    li.textContent = `${input} `;
    tasks.appendChild(li);

    // add delete button and attach to list items
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.className = 'delete';
    li.appendChild(btn);
  }
  
  // add dropdown functionality
  const importanceColor = () => {
    let color;
    const importance = document.querySelector('#importanceDropdown').value;
    if (importance === 'urgent') {
      color = '#F51C16';
    } else if (importance === 'important') {
      color = '#F5A62F';
    } else if (importance === 'no-rush') {
      color = '#3BF578';
    }
    return color;
  }
  console.log(document.querySelector('#importanceDropdown').value);


  // EVENT HANDLERS
  // handle submit
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addListItem(inputField.value);
      taskForm.reset();
    })

  // delete if list item button is clicked
  document.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
      e.target.parentElement.remove();
    }
  })
});
