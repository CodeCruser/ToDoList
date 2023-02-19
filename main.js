const filter = document.querySelector('.filter_bar')
const filter_box = document.querySelector('.check-bar')
const inputs = document.querySelector('.todo')
const button = document.querySelector('.button')
const taskContainer = document.querySelector('#task-container');

let to_do = [];
let doneTasks = [];
let taskButtonElement;
let newTaskElement;
let counter =0;

function click() {
    button.addEventListener('click', () => {
     
        adding_tasks();

    });
  }
  click();

  function adding_tasks() {
    
    input_value = inputs.value;

    if (input_value === '') {
      inputs.placeholder ='ENTER A VALID TASK'
      inputs.style.color = "red"; 
      inputs.style.cssText = `::placeholder { color: ${input.style.color} }`; 
      return;
    }
    
    to_do.push(input_value);

    //create a new div for the new task
    newTaskElement = document.createElement('div');
    //give it an id from the counter
    newTaskElement.id = counter;
    
   
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
      counter ++;
      
      const currentTaskElement = newTaskElement;

      // Add an event listener to the delete button that removes the parent element (the div)
      taskButtonElement.addEventListener('click', () => {
        currentTaskElement.remove();
      });
      

      //add event listner to the checkbox
      checkboxElement.addEventListener('change', (event) => {
       
        if (event.target.checked) {
          // add the div to the done tasks array and change css style
          if (!doneTasks.includes(currentTaskElement.id))
          {doneTasks.push(currentTaskElement.id)}
          
          taskTextElement.style.textDecoration = 'line-through';

        } else {
          taskTextElement.style.textDecoration = 'none';
          //remove task from done tasks array 
          const index = doneTasks.indexOf(currentTaskElement.id);
          if (index !== -1) {
            doneTasks.splice(index, 1);
          }
        }
      });

      //add event lister to the filter check box
      filter_box.addEventListener('change', handleCheckboxChange)
     

      inputs.value = ''; 
      console.log(doneTasks)
      
   
  }

  function handleCheckboxChange(event) {
    if (event.target.checked) {
      // Checkbox is checked, hide elements with the specified IDs
      doneTasks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = 'none';
        }
      });
    } else {
      // Checkbox is unchecked, show elements with the specified IDs
      doneTasks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = '';
        }
      });
    }
  }

 
