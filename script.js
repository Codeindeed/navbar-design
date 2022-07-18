const menubars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const nav = [nav1, nav2, nav3, nav4, nav5];
function navAnimation(d1, d2) {
  nav.forEach((na, i) => {
    na.classList.replace(`slide-${d1}-${i + 1}`, `slide-${d2}-${i + 1}`);
  });
}
function toggleNav() {
  //toggle: Menu Bars open/closed
  menubars.classList.toggle("change");
  //toggle:Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate in - overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    //Animate out - overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}
//Event listeners
menubars.addEventListener("click", toggleNav);
nav.forEach((na) => {
  na.addEventListener("click", toggleNav);
});