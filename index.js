const mainMenu = document.querySelector(".menu__list");
const closeMenu = document.querySelector(".menu__closemenu");
const openMenu = document.querySelector(".menu__openburger");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
document.querySelectorAll('li').forEach(n => n.addEventListener('click', close))
