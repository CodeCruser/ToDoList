const filter = document.querySelector('.filter_bar')
const inputs = document.querySelector('.todo')
const button = document.querySelector('.button')
const taskContainer = document.querySelector('#task-container');

let to_do = [];
let input_value;
let taskButtonElement;
let newTaskElement;


function click() {
    button.addEventListener('click', () => {
      adding_tasks();
    });
  }
  click();

  function adding_tasks() {
    
    input_value = inputs.value;
    
    to_do.push(input_value);

    //create a new div for the new task
    newTaskElement = document.createElement('div');
   
   
    newTaskElement.classList.add('to_do_lists')

     // Create a new <input> element for the checkbox
     const checkboxElement = document.createElement('input');
     checkboxElement.type = 'checkbox';
     checkboxElement.classList.add('check-done');

    // Create a new <span> element for the task text
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = input_value;
   
   
    // Create a container so we can push the button to the right using (justsify content)
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('check-text-conainer')
     
    
    // Create a new <button> element for the task
     taskButtonElement = document.createElement('button');
     taskButtonElement.classList.add('delete-button');
     taskButtonElement.textContent = 'remove';

      // Add the checkbox and task text to the <div> element
      rightContainer.appendChild(checkboxElement);
      rightContainer.appendChild(taskTextElement );
      newTaskElement.appendChild(rightContainer);
      newTaskElement.appendChild(taskButtonElement);
      // Append the <div> element to the task container
      taskContainer.appendChild(newTaskElement);
    


 
    inputs.value = ''; 
   
  }



    
  
