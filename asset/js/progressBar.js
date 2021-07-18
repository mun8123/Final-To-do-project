const $toDoList = document.querySelectorAll(".todo-list")
const $checkBtn = document.querySelectorAll(".checkbtn")
const $progress = document.querySelectorAll(".progress");
const $bar2 = document.querySelectorAll(".bar2");

let progress = [0, 0, 0];

function newTodos() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    return todos;
}

function calProgress() {
    let todos = newTodos();
    let doneCount = 0;

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < todos[i].length; j++) {
            if(todos[i][j].checked === true) {
                doneCount += 1;
            }
        }

        if(todos[i].length === 0){
            progress[i] = 0;
        } else {
            progress[i] = Math.ceil((doneCount / todos[i].length) * 100);
            doneCount = 0;
        }
    }
}

function paintProgress() {
    calProgress();

    for(let i = 0; i < 3; i++){
        $progress[i].innerText = `${progress[i]}%`;
        $bar2[i].style.width = `${progress[i]}%`;
    }
}

const $toDoForm = document.querySelectorAll(".todo-form")
let newToDos = newTodos();

function handleSubmitEvent() {
    paintProgress();
    newToDos = newTodos();

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < newToDos[i].length; j++) { 
            const checkBox = $toDoList[i].childNodes[j].childNodes[1];
            const deleteBtn = $toDoList[i].childNodes[j].childNodes[3];
            
            deleteBtn.addEventListener("click", paintProgress);
            checkBox.addEventListener("click", paintProgress);
        }
    }
}

for(let i = 0; i < 3; i++) {
    $toDoForm[i].addEventListener("submit", handleSubmitEvent);
}

paintProgress();
