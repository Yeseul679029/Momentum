const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn")
const toDoListBox = document.querySelector("#todo-box");
const container = document.querySelector(".container-fluid");

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
    toDoListBox.classList.remove(HIDDEN_CLASSNAME);
}

function logOut(){
    if(confirm("오늘의 TODOLIST가 삭제됩니다.")){
        localStorage.removeItem(USER_NAME_KEY);
        localStorage.removeItem("todos");
        location.reload();
    } else{
        return false;
    }
}

// 로드됐을때
function onload(event){
    container.style.height = `${window.innerHeight - 50}px`;
}
//리사이징했을때
function onresize(event){
    console.log(window.innerWidth);
    container.style.height = `${window.innerHeight - 50}px`;
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
window.addEventListener("load",onload);
window.addEventListener("resize",onresize);
