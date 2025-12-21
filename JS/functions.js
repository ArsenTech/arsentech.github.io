const removeCss = ()=>document.querySelector("link[href='CSS/dark-mode.css']").remove();
const getTextContent = (item,key) => item.querySelector(key).textContent.trim();
function lazyCss(e) {const t = document.createElement( "link" );t.href = e, t.rel = "stylesheet", t.type = "text/css", t.media="screen", document.getElementsByTagName("head")[0].appendChild(t);}
function handleScroll(scrlY, pageY, anchorY){navbar.classList.toggle("sticky",scrlY < window.scrollY);anchor.classList.toggle("sticky",window.scrollY > anchorY);gotop.classList.toggle("active",window.scrollY > pageY);}
function toggleActive(){toggler.classList.toggle("active");navMenu.classList.toggle("active");}
function closeMenu(){toggler.classList.remove("active");navMenu.classList.remove("active");}
function toggleMode(){
     document.body.classList.toggle("dark");
     if(!document.body.classList.contains("dark")){
          modeToggler.querySelector("img").src = "Images/icons/light.svg";
          localStorage.setItem("arsentech-theme", "light");removeCss();
     } else{
          modeToggler.querySelector("img").src = "Images/icons/dark.svg";
          localStorage.setItem("arsentech-theme", "dark");lazyCss("CSS/dark-mode.css");
     }
}
const addSkills=async()=>{
     const res = await fetch("/Data/skills.json")
     const skillData = await res.json();
     skillData.forEach(val=>{
          const el = document.createElement("div");
          el.className = "skill";
          el.innerHTML = `<div class="skill-info"><span>${val.name}</span><span>${val.percentage}%</span></div>
          <div class="skill-bar ${val.class}"></div>`;
          document.querySelector(".skills").append(el);
     })
}
const addServices=async()=>{
     const res = await fetch("/Data/services.json");
     const serviceData = await res.json();
     serviceData.forEach(val=>{
          const el = document.createElement("a");
          el.href = val.link
          el.className = "service";
          el.innerHTML = `<span class="iconify icon" data-icon="${val.icon}" data-inline="false"></span>
          <h3>${val.name}</h3>
          <p>${val.desc}</p>`;
          document.querySelector(".services").append(el);
     })
}
const addWorks = async()=>{
     const res = await fetch("/Data/works.json");
     const worksData = await res.json(), code = document.createElement("script");
     worksData.forEach(val=>{
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
function addPosts(){
     const xhr = new XMLHttpRequest();
     xhr.onreadystatechange = () => {
          if (xhr.readyState == XMLHttpRequest.DONE){
               document.querySelector(".loading-txt").remove();
               const items = [...xhr.responseXML.getElementsByTagName("item")].slice(0,5);
               for(let i=0;i<items.length;i++){
                    const item = items[i];
                    if(!item) continue;
                    const elem = document.createElement("div")
                    elem.className = "blog-post";
                    elem.innerHTML = `<h3><a href="${getTextContent(item,"link")}">${getTextContent(item,"title")}</a></h3>
                    <p>${getTextContent(item,"description")}</p>
                    <div class="details">
                         <p class="info">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                              ${new Date(getTextContent(item,"pubDate")).toDateString()}
                         </p>
                         <a class="more-btn" href="${getTextContent(item,"link")}">
                              Read More
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                         </a>
                    </div>`
                    document.querySelector(".posts").appendChild(elem)
               }
          }
     }
     xhr.open('GET', 'https://arsentech-blog.vercel.app/rss.xml', true);
     xhr.send(null);
}
function isChristmas() {
     const today = new Date();
     const month = today.getMonth() + 1,day = today.getDate();
     return (month === 12 && day >= 1) || (month === 1 && day <= 8);
}
function init(){
     const aboutPfp = document.querySelector(".about-pic");
     const subscribePfp = document.querySelector(".subscribe img");
     const christmasPfp = "Images/profile-pics/pfp-christmas.webp", regularPfp = "Images/profile-pics/pfp.webp"
     aboutPfp.src = isChristmas() ? christmasPfp : regularPfp;
     subscribePfp.src = isChristmas() ? christmasPfp : regularPfp;
     document.body.classList.toggle("christmas",isChristmas());
     addSkills();addServices();addWorks();addPosts();
}
function handleScrollSpy() {
     let currentSectionId = "";
     sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) currentSectionId = section.id;
     });
     anchors.forEach(link =>
          link.classList.toggle("active",link.getAttribute("href") === `#${currentSectionId}`));
}