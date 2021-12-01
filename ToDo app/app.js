//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event){
   //Prevent from refreshing
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //NEW TODO
    const newTodo = document.createElement('li');
  
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Complete Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);
    //delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);
    //APPEND TO TODO LIST
    todoList.appendChild(todoDiv);
    //clear Todo Input value
    todoInput.value="";
}
function deleteCheck(clickEvent){
    const item=clickEvent.target;
    //console.log(item);
   if(item.classList[0]==='delete-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    
    }
    //Check
    if(item.classList[0]=== 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
