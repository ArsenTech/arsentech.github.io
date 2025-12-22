const gotop = document.querySelector(".goTop"),navbar = document.querySelector(".navbar"),navMenu = document.querySelector(".navbar-menu"),
toggler = document.querySelector(".menu-toggler"),modeToggler = document.querySelector("#icon"),
getMode = localStorage.getItem("arsentech-theme"),subClose = document.querySelector('#sub-close'),
subPopup = document.querySelector('.subscribe'),anchor = document.querySelector(".anchor"),
anchors = anchor.querySelectorAll(".anchor-item"),sections = document.querySelectorAll("section");
if(getMode && getMode === "dark") {document.body.classList.add("dark");modeToggler.querySelector("img").src = "Images/icons/dark.svg";lazyCss("CSS/dark-mode.css")}
window.addEventListener("scroll", ()=>handleScroll(20,100,650));
gotop.addEventListener("click", ()=>window.scrollTo({top: 0, left: 0,behavior: "smooth"}));
toggler.addEventListener("click", toggleActive);modeToggler.addEventListener("click", toggleMode);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
     if(e.matches){
          document.body.classList.add("dark");modeToggler.querySelector("img").src = "Images/icons/dark.svg";
          localStorage.setItem("arsentech-theme", "dark");lazyCss("CSS/dark-mode.css");
     } else {
          document.body.classList.remove("dark");modeToggler.querySelector("img").src = "Images/icons/light.svg";
          localStorage.setItem("arsentech-theme", "light");removeCss();
     }
});
subClose.addEventListener('click',()=>subPopup.classList.add('hide'))
lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap");init();
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
     if(entry.isIntersecting) anchors.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${entry.target.id}`))
}),{root: null, threshold: .6}), mq = window.matchMedia("(max-width: 980px)");
function handleBreakpoint(e) {
     if (e.matches) {
          observer.disconnect();
          window.addEventListener("scroll", handleScrollSpy);
          handleScrollSpy();
     } else {
          window.removeEventListener("scroll", handleScrollSpy);
          sections.forEach(section => observer.observe(section));
     }
}
mq.addEventListener("change", handleBreakpoint);
handleBreakpoint(mq);