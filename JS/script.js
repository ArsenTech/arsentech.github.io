const gotop = document.querySelector(".goTop");
const navbar = document.querySelector(".navbar");
const toggler = document.querySelector(".menu-toggler");
const navMenu = document.querySelector(".navbar-menu");
let d = new Date();
function lazyCss(e) {
     const t = document.createElement( "link" );
     t.href = e, t.rel = "stylesheet", t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t);
}
function lazyJS(e){
     const t = document.createElement("script");
     t.src = e, t.defer = true, document.body.appendChild(t);
}
const redirectTo = (link) => document.location=link;
lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap");
lazyCss("CSS/lightbox.min.css");
lazyCss("CSS/dark-mode.css");
lazyJS("JS/lightbox-plus-jquery.min.js");
document.getElementById("yearCount").innerHTML = d.getFullYear();
window.addEventListener("scroll", () => {20 < this.scrollY ? navbar.classList.add("sticky") : navbar.classList.remove("sticky"); window.pageYOffset > 100 ? gotop.classList.add("active") : gotop.classList.remove("active")});
gotop.addEventListener("click", () => window.scrollTo({top: 0, left: 0,behavior: "smooth"}));
toggler.addEventListener("click", () => {toggler.classList.toggle( "active" ); navMenu.classList.toggle( "active" )});