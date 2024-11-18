const gotop = document.querySelector(".goTop"),
navbar = document.querySelector(".navbar"),navMenu = document.querySelector(".navbar-menu"),
toggler = document.querySelector(".menu-toggler"),modeToggler = document.querySelector("#icon"),
getMode = localStorage.getItem("arsentech-theme"),subClose = document.querySelector('#sub-close'),
subPopup = document.querySelector('.subscribe');
if(getMode && getMode === "dark") {document.body.classList.add("dark");modeToggler.querySelector("img").src = "Files/icons/dark.svg";lazyCss("CSS/dark-mode.css")}
window.addEventListener("scroll", ()=>handleScroll(20,100));
gotop.addEventListener("click", ()=>window.scrollTo({top: 0, left: 0,behavior: "smooth"}));
toggler.addEventListener("click", toggleActive);modeToggler.addEventListener("click", toggleMode);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
     if(e.matches){
          document.body.classList.add("dark");modeToggler.querySelector("img").src = "Files/icons/dark.svg";
          localStorage.setItem("arsentech-theme", "dark");lazyCss("CSS/dark-mode.css");
     } else {
          document.body.classList.remove("dark");modeToggler.querySelector("img").src = "Files/icons/light.svg";
          localStorage.setItem("arsentech-theme", "light");removeCss();
     }
});
subClose.addEventListener('click',()=>subPopup.classList.add('hide'))
lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap");init();