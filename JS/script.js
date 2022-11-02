const gotop = document.querySelector(".goTop"),
     navbar = document.querySelector(".navbar"),
     toggler = document.querySelector(".menu-toggler"),
     navMenu = document.querySelector(".navbar-menu");
function lazyCss(e) {
     const t = document.createElement( "link" );
     t.href = e, t.rel = "stylesheet", t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t)
}
lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap")
lazyCss("CSS/lightbox.min.css")
document.getElementById("yearCount").innerHTML = (new Date).getFullYear()
window.addEventListener("scroll", () => {20 < this.scrollY ? navbar.classList.add("sticky") : navbar.classList.remove("sticky"); window.pageYOffset > 100 ? gotop.classList.add("active") : gotop.classList.remove("active")})
gotop.addEventListener("click", () => window.scrollTo({top: 0, left: 0,behavior: "smooth"}))
toggler.addEventListener("click", () => {toggler.classList.toggle( "active" ); navMenu.classList.toggle( "active" )});
