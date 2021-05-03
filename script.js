const todoForm = document.querySelector("#newTodoForm");
const todoList = document.querySelector("#todoList");

let toDo = JSON.parse(window.localStorage.getItem("todos")) || [];
for(let i = 0; i < toDo.length; i++){
  let newTodo = document.createElement("li");
  let removeButtom = document.createElement("button");
  removeButtom.innerText = "X";
  newTodo.innerText = toDo[i];
  todoList.appendChild(newTodo);
  newTodo.appendChild(removeButtom);
}

//Form submission
todoForm.addEventListener("submit", function(){
  event.preventDefault();
  console.log("Form submitted!");
  
  //Creates Remove Button
  const removeButtom = document.createElement("button");
  removeButtom.innerText = "X"

  //Creates Task
  const newTodo = document.createElement("li");
  newTodo.innerText = document.querySelector("#task").value;

  //Adds Task to To-do List
  todoList.appendChild(newTodo);
  //Adds Remove Button to Task
  newTodo.appendChild(removeButtom);

  //Saves to Local Storage
  toDo.push(newTodo.innerText);
  window.localStorage.setItem("todos", JSON.stringify(toDo));

  todoForm.reset();
});

todoList.addEventListener("click", function(event){
  //Gets the Target Tag
  const targetTag = event.target.tagName;

  //Marks a task as completed
  if (targetTag === "LI"){
    event.target.style.textDecoration = "line-through";
  }
  //Removes task from list
  else if (targetTag === "BUTTON") {
    event.target.parentNode.remove();
    
  }
})
