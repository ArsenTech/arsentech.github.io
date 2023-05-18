const skillData = [{name:"HTML",class:"html",percentage:90},
     {name:"CSS",class:"css",percentage:90},
     {name:"Javascript",class:"js",percentage:90},
     {name:"React JS",class:"react",percentage:90},
     {name:"SASS (SCSS)",class:"scss",percentage:90},
     {name:"Angular",class:"angular",percentage:75}
]
const serviceData = [
     {name:"Tutorials",desc:"This is Mostly important for All Windows, iOS, And Linux Users (Check in YouTube)",icon:"ant-design:laptop-outlined",link:"https://www.youtube.com/playlist?list=PLsOMVP9OgGeosVdpYLlVuNTa-iiOSvGHS"},
     {name:"Coding with ArsenTech",desc:"Coding Tutorials with HTML, CSS, JS, SCSS, Bootstrap, React.JS",icon:"akar-icons:youtube-fill",link:"https://www.youtube.com/channel/UCl52C6cFR1McvN1fAdsxdkA"},
     {name:"Games",desc:"Games Made on Scratch by ArsenTech. (These Are Basic / Arcade Games)",icon:"ion:game-controller",link:"https://scratch.mit.edu/users/ArsenTech/"},
     {name:"Coding",desc:"Check My Github Repositories for Web Development",icon:"bx:bx-code-alt",link:"https://github.com/ArsenTech?tab=repositories"},
     {name:"Downloads",desc:"Download Windows Versions, Softwares and Some Files from My Collection",icon:"fa:download",link:"https://downloads-arsentech-2005.web.app/"},
     {name:"Malware Testing",desc:"Malware Testing Content and Antivirus VS Malware Videos",icon:"fa-solid:bug",link:"https://youtube.com/playlist?list=PLsOMVP9OgGeoAFJZdOofZQS3R0g5G57ot"}
];
const worksData = [
     {img:"Files/Work/code.webp",name:"Programming",category:"Development, Programming",attr:"Photo by Pixabay from Pexels",imgAlt:"coding"},
     {img:"Files/Work/wintuto.webp",name:"Tutorials",category:"Windows, Linux",attr:"Photo by Max DeRoin from Pexels",imgAlt:"keyboard"},
     {img:"Files/Work/lintuto.webp",name:"Windows Experiments",category:"Windows 10, Windows 7",attr:"Photo by Negative Space from Pexels",imgAlt:"computer"},
     {img:"Files/Work/downloads.webp",name:"Downloads",category:"Free Downloads :-)",attr:"Photo by Miguel Á. Padriñán from Pexels",imgAlt:"downloads"},
     {img:"Files/Work/virustest.webp",name:"Malware Testing",category:"Virus Test, Malware Test",attr:"Photo by Markus Spiske from Pexels",imgAlt:"matrix"},
     {img:"Files/Work/ios.webp",name:"ArsenTech Shorts",category:"Quick Tutorials, Tips and Tricks",attr:"Photo by Tracy Le Blanc from Pexels",imgAlt:"phone"},
]
const removeCss = ()=>document.querySelector("link[href='CSS/dark-mode.css']").remove();
const redirectTo = (link) => document.location=link;
function lazyCss(e) {const t = document.createElement( "link" );t.href = e, t.rel = "stylesheet", t.type = "text/css", t.media="screen", document.getElementsByTagName("head")[0].appendChild(t);}
function handleScroll(scrlY, pageY){scrlY < this.scrollY ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");window.pageYOffset > pageY ? gotop.classList.add("active") : gotop.classList.remove("active");}
function toggleActive(){toggler.classList.toggle("active"); navMenu.classList.toggle("active");}
function closeMenu(){toggler.classList.remove("active"); navMenu.classList.remove("active");}
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
     el.classList.add("skill");
     el.innerHTML = `<div class="skill-info"><span>${val.name}</span><span>${val.percentage}%</span></div>
     <div class="skill-bar ${val.class}"></div>`;
     document.querySelector(".skills").append(el);
})
const addServices=()=>serviceData.map(val=>{
     const el = document.createElement("div");
     el.classList.add("service");
     el.addEventListener("click",()=>redirectTo(val.link));
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
          el.innerHTML = `<img src="${val.img}" alt="${val.imgAlt}" loading="lazy">
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
function initCards(){addSkills();addServices();addWorks();}