function lazyCss(e){let t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t)}lazyCss("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap"),lazyCss("CSS/lightbox.min.css"),document.getElementById("yearCount").innerHTML=(new Date).getFullYear(),$(document).ready((function(){$(window).scroll((function(){20<this.scrollY?($(".navbar").addClass("sticky"),$(".goTop").fadeIn()):($(".navbar").removeClass("sticky"),$(".goTop").fadeOut())})),$(".goTop").click((function(){$("html, body").animate({scrollTop:0},300)})),$(".menu-toggler").click((function(){$(this).toggleClass("active"),$(".navbar-menu").toggleClass("active")}))}));
