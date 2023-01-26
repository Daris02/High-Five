const school = document.querySelector('#school');
const Sign= document.querySelector('#sign-in');
const pro = document.querySelector("#pro");
const arrow = document.querySelector(".arrow");
setTimeout(() => {
    school.classList.remove("hidden");
    setTimeout(()=>{
        pro.classList.remove("hidden");
        Sign.classList.remove("hidden");
        arrow.classList.remove("hidden");
    },1100)
}, 600);
