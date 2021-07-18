const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#main-form");
const greeting = document.querySelector("#greeting");
const usernameOut = document.querySelector("#saved-username");
const signOutBtn = document.querySelector("#sign-out-btn");

const HIDDEN_CLASSNAME = "hidden";
const TRANSITION_CLASSNAME = "transition";
const TRANSFORM_UP_CLASSNAME = "transform-up";
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;

    if (username === "") {
        alert("Is it correct? Do it again 😂")
    } else if(username.length > 4) {
        alert("You've got too long name 🤪")
        loginInput.value = "";
    } else {
            localStorage.setItem(USERNAME_KEY, username);
            signOutBtn.style.visibility = "visible";

            loginForm.classList.add(HIDDEN_CLASSNAME);
            loginForm.classList.add(TRANSITION_CLASSNAME);
            loginForm.classList.add(TRANSFORM_UP_CLASSNAME);

            todoForm.classList.add(TRANSITION_CLASSNAME);
            todoForm.style.margin = "0 auto";

            signOutBtn.style.marginLeft = "0";
            loginInput.value = "";

            usernameOut.innerText = localStorage.getItem(USERNAME_KEY);
    }
}

loginForm.addEventListener("submit", onLoginSubmit)


function handleSignOut() {
    localStorage.setItem(USERNAME_KEY, "");
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(TRANSFORM_UP_CLASSNAME);
    
    todoForm.style.margin = "1000px auto 0";
    
    signOutBtn.style.marginLeft = "-100px";
}

signOutBtn.addEventListener("click", handleSignOut);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername) { //if(savedToDos !== null)
    usernameOut.innerText = savedUsername;
 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(TRANSITION_CLASSNAME);

    todoForm.style.margin = "0 auto";
    signOutBtn.style.marginLeft = "0";

 }