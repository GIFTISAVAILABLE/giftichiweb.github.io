let con = document.getElementById("con-con");
let submitButton = document.getElementById("thankss");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function popUp(event){
    event.preventDefault();
 con.classList.add("closeSubmit");
 submitButton.classList.add("openSubmit");
 
 return false;
}

// let contactMe = document.getElementById("contactContacter");
// let submitButton = document.getElementById("thankYou");
// let contactHead = document.getElementById("contactHead");
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

// function popUP(){

//     contactHead.classList.add("closeSubmit");
//     contactMe.classList.add("closeSubmit");
//     submitButton.classList.add("openSubmit");

//     return true;
// }