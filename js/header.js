const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    let indicator = document.querySelector(".indicator");
    if(toggle.classList == "active" && body.classList == "active"){
        indicator.style.left="53px";
        body.style.background="grey"
    }else{
        indicator.style.left ="0px";
        body.style.background="#fff"
    }
}

const menu2 = document.querySelector(".menu2");
const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function(){
    menu2.classList.toggle("responsiv");
}