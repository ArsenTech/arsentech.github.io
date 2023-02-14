const gotop = document.querySelector(".goTop"),
navbar = document.querySelector(".navbar"),
navMenu = document.querySelector(".navbar-menu"),
toggler = document.querySelector(".menu-toggler"),
modeToggler = document.querySelector("#icon"),
getMode = localStorage.getItem("arsentech-theme");
let d = new Date();
lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap");
lazyCss("CSS/dark-mode.css");lazyJS("JS/fslightbox.js");
if(getMode && getMode === "dark") {document.body.classList.add("dark");modeToggler.querySelector("img").src = "Files/icons/dark.svg";}
function lazyCss(e) {const t = document.createElement( "link" );t.href = e, t.rel = "stylesheet", t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t);}
function lazyJS(e){const t = document.createElement("script");t.src = e, t.defer = true, document.body.appendChild(t);}
function handleScroll(scrlY, pageY){scrlY < this.scrollY ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");window.pageYOffset > pageY ? gotop.classList.add("active") : gotop.classList.remove("active");}
function toggleActive(){toggler.classList.toggle("active"); navMenu.classList.toggle("active");}
function toggleMode(){
     document.body.classList.toggle("dark");
     !document.body.classList.contains("dark") ? (modeToggler.querySelector("img").src = "Files/icons/light.svg",localStorage.setItem("arsentech-theme", "light")):(modeToggler.querySelector("img").src = "Files/icons/dark.svg",localStorage.setItem("arsentech-theme", "dark"))
}
function closeMenu(){toggler.classList.remove("active"); navMenu.classList.remove("active");}
const redirectTo = (link) => document.location=link;
document.getElementById("yearCount").innerHTML = d.getFullYear();
window.addEventListener("scroll", ()=>handleScroll(20,100));
gotop.addEventListener("click", ()=>window.scrollTo({top: 0, left: 0,behavior: "smooth"}));
toggler.addEventListener("click", toggleActive);
modeToggler.addEventListener("click", toggleMode);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
     if(e.matches){
          document.body.classList.add("dark");
          modeToggler.querySelector("img").src = "Files/icons/dark.svg";
          localStorage.setItem("arsentech-theme", "dark");
     } else {
          document.body.classList.remove("dark");
          modeToggler.querySelector("img").src = "Files/icons/light.svg";
          localStorage.setItem("arsentech-theme", "light");
     }
});