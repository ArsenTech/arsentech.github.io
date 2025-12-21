const skillData = [
     {name:"HTML",class:"html",percentage:90},
     {name:"CSS, Sass (SCSS)",class:"css",percentage:90},
     {name:"Javascript",class:"js",percentage:90},
     {name:"React JS",class:"react",percentage:90},
     {name:"Next JS",class:"nextjs",percentage:90},
     {name:"Angular",class:"angular",percentage:75}
]
const serviceData = [
     {name:"Tutorials",desc:"This is Mostly important for All Windows, iOS, And Linux Users (Check in YouTube)",icon:"ant-design:laptop-outlined",link:"https://www.youtube.com/playlist?list=PLsOMVP9OgGeosVdpYLlVuNTa-iiOSvGHS"},
     {name:"Coding with ArsenTech",desc:"Coding Tutorials to become a Skilled Programmer",icon:"bx:bx-code-alt",link:"https://www.youtube.com/@Coding_With_ArsenTech"},
     {name:"Games",desc:"Games Made on Scratch by ArsenTech. (These Are Basic / Arcade Games)",icon:"ion:game-controller",link:"https://scratch.mit.edu/users/ArsenTech/"},
     {name:"Windows Experiments",desc:"Windows Test Videos Made By ArsenTech (Educational Purposes Only)",icon:"ion:hammer",link:"https://www.youtube.com/playlist?list=PLsOMVP9OgGerNCzsOFk1jnIlbXrv6nWrX"},
     {name:"Downloads",desc:"Download Windows Versions, Softwares and Some Files from My Collection",icon:"fa:download",link:"https://arsentech.github.io/downloads/"},
     {name:"Malware Testing",desc:"Malware Testing Content and Antivirus Test Videos",icon:"fa-solid:bug",link:"https://youtube.com/playlist?list=PLsOMVP9OgGeoAFJZdOofZQS3R0g5G57ot"}
];
const worksData = [
     {img:"Files/Work/code.webp",name:"Programming",category:"Development, Programming",attr:"Photo by luis  from Pexels",imgAlt:"coding"},
     {img:"Files/Work/wintuto.webp",name:"Tutorials",category:"Windows, Linux",attr:"Photo by Max DeRoin from Pexels",imgAlt:"keyboard"},
     {img:"Files/Work/lintuto.webp",name:"Windows Experiments",category:"Windows 10, Windows 7",attr:"Photo by Negative Space from Pexels",imgAlt:"computer"},
     {img:"Files/Work/downloads.webp",name:"Downloads",category:"Software, Wallpaper",attr:"Photo by Miguel Á. Padriñán from Pexels",imgAlt:"downloads"},
     {img:"Files/Work/virustest.webp",name:"Malware Testing",category:"Virus Test, Malware Test",attr:"Photo by Markus Spiske from Pexels",imgAlt:"matrix"},
     {img:"Files/Work/ios.webp",name:"ArsenTech Shorts",category:"Quick Tutorials, Tips and Tricks",attr:"Photo by Tracy Le Blanc from Pexels",imgAlt:"phone"},
]
const removeCss = ()=>document.querySelector("link[href='CSS/dark-mode.css']").remove();
function lazyCss(e) {const t = document.createElement( "link" );t.href = e, t.rel = "stylesheet", t.type = "text/css", t.media="screen", document.getElementsByTagName("head")[0].appendChild(t);}
function handleScroll(scrlY, pageY, anchorY){navbar.classList.toggle("sticky",scrlY < window.scrollY);anchor.classList.toggle("sticky",window.scrollY > anchorY);gotop.classList.toggle("active",window.scrollY > pageY);}
function toggleActive(){toggler.classList.toggle("active");navMenu.classList.toggle("active");}
function closeMenu(){toggler.classList.remove("active");navMenu.classList.remove("active");}
function toggleMode(){
     document.body.classList.toggle("dark");
     if(!document.body.classList.contains("dark")){
          modeToggler.querySelector("img").src = "Files/icons/light.svg";
          localStorage.setItem("arsentech-theme", "light");removeCss();
     } else{
          modeToggler.querySelector("img").src = "Files/icons/dark.svg";
          localStorage.setItem("arsentech-theme", "dark");lazyCss("CSS/dark-mode.css");
     }
}
const addSkills=()=>skillData.map(val=>{
     const el = document.createElement("div");
     el.className = "skill";
     el.innerHTML = `<div class="skill-info"><span>${val.name}</span><span>${val.percentage}%</span></div>
     <div class="skill-bar ${val.class}"></div>`;
     document.querySelector(".skills").append(el);
})
const addServices=()=>serviceData.map(val=>{
     const el = document.createElement("a");
     el.href = val.link
     el.className = "service";
     el.innerHTML = `<span class="iconify icon" data-icon="${val.icon}" data-inline="false"></span>
     <h3>${val.name}</h3>
     <p>${val.desc}</p>`;
     document.querySelector(".services").append(el);
})
function addWorks(){
     const code = document.createElement("script");
     worksData.map(val=>{
          const el = document.createElement("a");
          el.href = val.img;
          el.setAttribute("data-fslightbox","mygallery");
          el.className = "work";
          el.innerHTML = `<img src="${val.img}" alt="${val.imgAlt}" loading="lazy" width="392" height="266">
          <div class="info">
             <h3>${val.name}</h3>
             <div class="cat">${val.category}</div>
             <p class="attr">${val.attr}</p>
          </div>`;
          document.querySelector(".works").append(el);
     });
     code.src = "JS/fslightbox.js";
     code.defer = true;
     document.body.appendChild(code);
}
function isChristmas() {
     const today = new Date();
     const month = today.getMonth() + 1,day = today.getDate();
     return (month === 12 && day >= 1) || (month === 1 && day <= 8);
}
function init(){
     const aboutPfp = document.querySelector(".about-pic");
     const subscribePfp = document.querySelector(".subscribe img");
     const christmasPfp = "Files/profile-pics/pfp-christmas.webp", regularPfp = "Files/profile-pics/pfp.webp"
     aboutPfp.src = isChristmas() ? christmasPfp : regularPfp;
     subscribePfp.src = isChristmas() ? christmasPfp : regularPfp;
     document.body.classList.toggle("christmas",isChristmas());
     addSkills();addServices();addWorks();
}