const listName = [{
  name: 'List here ',
  duedate: 'Duedate'
}];
renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  listName.forEach(function(todoObject, index){
    const {name, duedate} = todoObject;
    const html = `
      <div>${name} </div>
       <div>${duedate}</div>
        <button onclick = "
         listName.splice(${index}, 1);
         renderTodoList();
        " class = "delete-button"> Delete</button>  
    ` ;
    todoListHTML += html;
  });
  /*
  for(let i = 0; i < listName.length; i++){
    const todoObject = listName[i];
    //const name = todoObject.name;
    //const duedate =todoObject.duedate;
    const {name, duedate} = todoObject;
    const html = `
      <div>${name} </div>
       <div>${duedate}</div>
        <button onclick = "
         listName.splice(${i}, 1);
         renderTodoList();
        " class = "delete-button"> Delete</button>  
    ` ;
    todoListHTML += html;
  }
  */
//console.log(todoListHTML);
document.querySelector('.js-add-todo-list')
 .innerHTML = todoListHTML
}
function TodoList(){
  const todoListElement = document.querySelector('.js-input-todo-list')
   const name= todoListElement.value;

   const duedateElement = document.querySelector('.js-input-duedate')
   const duedate = duedateElement.value;
   listName.push({
      name,
      duedate});
   //console.log(listName)
   todoListElement.value = '';
   renderTodoList();
}