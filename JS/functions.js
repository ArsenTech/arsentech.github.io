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
function addSkills(){
     const skillParent = document.querySelector(".skills");
     skillData.map(val=>{
          const el = document.createElement("div");
          el.classList.add("skill");
          el.innerHTML = `<div class="skill-info"><span>${val.name}</span><span>${val.percentage}%</span></div>
          <div class="skill-bar ${val.class}"></div>`;
          skillParent.append(el);
     })
}
function addServices(){
     const serviceParent = document.querySelector(".services");
     serviceData.map(val=>{
          const el = document.createElement("div");
          el.classList.add("service");
          el.addEventListener("click",()=>redirectTo(val.link));
          el.innerHTML = `<span class="iconify icon" data-icon="${val.icon}" data-inline="false"></span>
          <h3>${val.name}</h3>
          <p>${val.desc}</p>`;
          serviceParent.append(el);
     })
}
function addWorks(){
     const worksParent = document.querySelector(".works");
     const code = document.createElement("script");
     worksData.map(val=>{
          const el = document.createElement("a");
          el.href = val.img;
          el.setAttribute("data-fslightbox","mygallery");
          el.className = "work";
          el.innerHTML = `
          <img src="${val.img}" alt="${val.imgAlt}" loading="lazy">
          <div class="info">
             <h3>${val.name}</h3>
             <div class="cat">${val.category}</div>
             <p class="attr">${val.attr}</p>
          </div>`;
          worksParent.append(el);
     });
     code.src = "JS/fslightbox.js";
     code.defer = true;
     document.body.appendChild(code);
}
function initCards(){addSkills();addServices();addWorks();}