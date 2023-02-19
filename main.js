const filter = document.querySelector('.filter_bar')
const inputs = document.querySelector('.todo')
const button = document.querySelector('.button')
const taskContainer = document.querySelector('#task-container');

let to_do = [];
let input_value

function click() {
    button.addEventListener('click', () => {
      adding_tasks();
    });
  }
  click();

  function adding_tasks() {
    input_value = inputs.value;
    to_do.push(input_value);


    const newTaskElement = document.createElement('div');
    newTaskElement.textContent = input_value;
    newTaskElement.classList.add('to_do_lists')

    taskContainer.appendChild(newTaskElement);
   
  }

 
