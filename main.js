const filter = document.querySelector('.filter_bar')
const inputs = document.querySelector('.todo')
const button = document.querySelector('.button')

let to_do = [];


function click () { button.addEventListener('click', ()=> {
    adding_tasks();
})
};



function adding_tasks () {
    let input_value = inputs.value;
    to_do.push(input_value)
    alert(input_value)
}
console.log(adding_tasks());
console.log(to_do);