const school = document.querySelector('#school');
const Sign= document.querySelector('#sign-in');
const pro = document.querySelector("#pro");
const arrow = document.querySelector(".arrow");
const timer1 = document.getElementById("time1");
const timer2 = document.getElementById("time2");
const timer3 = document.getElementById("time3");
const timer4 = document.getElementById("time4");

setTimeout(() => {
    school.classList.remove("hidden");
    setTimeout(()=>{
        pro.classList.remove("hidden");
        Sign.classList.remove("hidden");
        arrow.classList.remove("hidden");
    },1100)
}, 600);

let temps1 = 0;
let temps2 = 0;
let temps3 = 0;
let temps4 = 0;

window.addEventListener("DOMContentLoaded",function(){
    function mitombo1(){
        if(temps1<=20){
            timer1.innerText = temps1;
            temps1++;
        }
    }
    setInterval(mitombo1,62);
    function mitombo2(){
        if(temps2<=120000){
            timer2.innerText = temps2;
            temps2+=5000;
        }
    }
    setInterval(mitombo2,55);
    function mitombo3(){
        if(temps3<=1200){
            timer3.innerText = temps3;
            temps3+=50;
        }
    }
    setInterval(mitombo3,55);
    function mitombo4(){
        if(temps4<=900){
            timer4.innerText = temps4;
            temps4+=45;
        }
    }
    setInterval(mitombo4,62);
})