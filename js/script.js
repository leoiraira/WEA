const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");
openNavBtn.addEventListener("click",toggleNav);
closeNavBtn.addEventListener("click",toggleNav);
function toggleNav(){
   document.querySelector(".menu-celular").classList.toggle("open");
}