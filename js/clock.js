const clock = document.querySelector("h2#clock");
const today = document.querySelector("h2#day");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    // clock.innerText = `${hours}:${minutes}:${seconds} ${year}-${month}-${day}`;
    clock.innerText = `${hours}:${minutes}`;
    today.innerText = `${year}-${month}-${day}`;

}

getClock();
setInterval(getClock, 1000);

