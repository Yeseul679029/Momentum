const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn")

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";

function onsubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME_KEY,username);

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function logOut(){
    confirm("오늘의 할일을 다 잃습니다 그래도 하시겠습니까?");
    localStorage.removeItem(USER_NAME_KEY);
    location.reload();
}

const savedUsername = localStorage.getItem(USER_NAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onsubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}

logoutBtn.addEventListener("click", logOut);