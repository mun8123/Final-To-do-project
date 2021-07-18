const $todoForm = document.querySelectorAll(".todo-form")
const todoInput = document.querySelectorAll(".todo-input");
const $todoList = document.querySelectorAll(".todo-list");

const TODOS_KEY = "todos";
let toDos = [[],[],[]];

const todayForm = $todoForm[0];
const weeklyForm = $todoForm[1];
const monthlyForm = $todoForm[2];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    for(let i = 0; i < 3; i++) {
        for(let j= 0; j < toDos[i].length; j++) {
            if(toDos[i][j].id === parseInt(li.id)) {
                toDos[i] = toDos[i].filter((todo) => todo.id !== parseInt(li.id));
            }
        }
    }
    saveToDos();
}

function saveInputCheckedState(event) {
    const li = event.target.parentElement;

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < toDos[i].length; j++) {
            if(li.id == toDos[i][j].id) {
                toDos[i][j].checked = event.target.checked;
            }
        }
    }
   saveToDos();
}

function handleCheckedState() {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < $todoList[i].childNodes.length; j++) {
            checkbox = $todoList[i].childNodes[j].childNodes[1];
            checkbox.addEventListener("click", saveInputCheckedState);
        }
    }
}

function paintToDo(event, newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.className = "todo-style";

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const inputId = `${li.id}_input`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = inputId;
    input.className = "checkbtn";

    const label = document.createElement("label");
    label.htmlFor = inputId;

    const button = document.createElement("button");
    button.className = "deletebtn";
    button.innerText = "✕";

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);

    const todoList = event.target.nextElementSibling;
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo); 

    handleCheckedState()
}

function paintToDoNoEvent(previousToDos, i) {
    const li = document.createElement("li");
    li.id = previousToDos.id;
    li.className = "todo-style";

    const span = document.createElement("span");
    span.innerText = previousToDos.text;

    const inputId = `${li.id}_input`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = inputId;
    input.className = "checkbtn";
    input.background = "url('/asset/images/checked-box.png') no-repeat 0 0px;"

    const label = document.createElement("label");
    label.htmlFor = inputId;

    const button = document.createElement("button");
    button.className = "deletebtn";
    button.innerText = "✕";

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);

    $todoList[i].appendChild(li);
    button.addEventListener("click", deleteTodo); 

    handleCheckedState()
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const inputTarget = event.target.firstElementChild.value;
    const newtodo = inputTarget;
    event.target.firstElementChild.value = "";

    const newtodoObj = {
        text : newtodo,
        id : Date.now(),
        checked : false,
    };

    for(let i = 0; i < 3; i++) {
        if(event.target === $todoForm[i]) {
            toDos[i].push(newtodoObj);
        }
    }
    
    paintToDo(event, newtodoObj);
    saveToDos();
}

todayForm.addEventListener("submit", handleTodoSubmit);
weeklyForm.addEventListener("submit", handleTodoSubmit);
monthlyForm.addEventListener("submit", handleTodoSubmit);

function getCheckedState(i, j) {
    if(toDos[i][j].checked === true) {
        const checkbox = $todoList[i].childNodes[j].childNodes[1];
        checkbox.checked = toDos[i][j].checked;
    }
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { //if(savedToDos !== null)
    const parsedToDos = JSON.parse(savedToDos);
    for(let i = 0; i < 3; i++) {
        const printToDos = parsedToDos[i];
        toDos[i] = parsedToDos[i];
        for(let j = 0; j < printToDos.length; j++) {
            paintToDoNoEvent(printToDos[j], i);
            getCheckedState(i, j);
        }
    }   
}