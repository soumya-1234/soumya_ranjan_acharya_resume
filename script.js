let dayNight=document.querySelector(".dayNight");
let banner= document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typing= new Typed("#text",{
    strings: ["Coder","Full Stack Developer","Problem Solver","Debugger"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})