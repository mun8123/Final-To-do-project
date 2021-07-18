const $todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.className = "todo-style";

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.className = "checkbtn";
    button.innerText = "✕";

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo); 
}

function handleTodoSubmit(e) {
        e.preventDefault();
        const newtodo = todoInput.value;
        todoInput.value = "";

        const newtodoObj = {
            text : newtodo,
            id : Date.now(),
        };
        
        toDos.push(newtodoObj);
        paintToDo(newtodoObj);
        saveToDos();
    }
    
$todoForm.addEventListener("submit", handleTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { //if(savedToDos !== null)
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}