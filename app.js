var employees=[
    {
        img:"images/photosnap.svg",
        p:["NEW!","FEATURED","1d ago","Full Time","Lagos only"],
        h4:"Photosnap",
        h3:"Senior Frontend Developer",
        skills:["Frontend","Senior","HTML","CSS","JavaScript"],
        classList:"employee Frontend Senior HTML CSS JavaScript featured"
    },
    {
        img:"images/manage.svg",
        p:["NEW","FEATURED","1d ago","Part Time","Ogun state only"],
        h4:"Manage",
        h3:"Fullstack Developer",
        skills:["","Fullstack","Midweight","Python","React"],
        classList:"employee Fullstack Midweight Python React featured"
    },
    {
        img:"images/account.svg",
        p:["NEw","","2d ago","Part Time","USA only"],
        h4:"Account",
        h3:"Junior Frontend Developer",
        skills:["Frontend","Junior","JavaScript","React","Sass"],
        classList:"employee Frontend Junior JavaScript React Sass"
    },
    {
        img:"images/myhome.svg",
        p:["","","5d ago","contract","Lagos only"],
        h4:"MyHome",
        h3:"Junior Frontend Developer",
        skills:["","Frontend","Junior", "CSS", "JavaScript"],
        classList:"employee Frontend Junior CSS JavaScript"
    },
    {
        img:"images/loop-studios.svg",
        p:["","","1w ago","Full Time","Worldwide"],
        h4:"Loop Studios",
        h3:"Software Engineer",
        skills:["Fullstack","Midweight","JavaScript","Ruby","Sass"],
        classList:"employee Fullstack Midweight JavaScript Ruby Sass"
    },
    {
        img:"images/shortly.svg",
        p:["","","2w ago","Full Time","Worldwide"],
        h4:"Shortly",
        h3:"Junior Developer",
        skills:["","Backend","Junior","Ruby","RoR"],
        classList:"employee Backend Junior Ruby RoR"
    },
    {
        img:"images/faceit.svg",
        p:["","","2w ago","Full Time","UK only"],
        h4:"FaceIt",
        h3:"Junior Backend Developer",
        skills:["Frontend","Junior","HTML","JavaScript","Sass"],
        classList:"employee Frontend Junior HTML JavaScript Sass"
    },
    {
        img:"images/insure.svg",
        p:["","","2w ago","Full Time","USA only"],
        h4:"Insure",
        h3:"Junior Frontend Developer",
        skills:["Frontend","Junior","JavaScript","Vue","Sass"],
        classList:"employee Frontend Junior JavaScript Vue Sass"
    },
    {
        img:"images/eyecam-co.svg",
        p:["","","3w ago","Full Time","Worldwide"],
        h4:"Eyecam.co",
        h3:"Full Stack Engineer",
        skills:["Fullstack","Midweight","JavaScript","Python","Django"],
        classList:"employee Fullstack Midweight JavaScript Python Django"
    },
    {
        img:"images/the-air-filter-company.svg",
        p:["","","1mo ago","Part Time","Worldwide"],
        h4:"The Air Filter Company",
        h3:"Front-end Dev",
        skills:["Frontend","Junior","JavaScript","React","Sass"],
        classList:"employee Frontend Junior JavaScript React Sass"
    }
]

var b="";
employees.forEach(e=>{
    b+=`<div class= "${e.classList}">
            <div class="details">
                <div><img src=${e.img} alt=""></div>
                <div class="D">
                    <div class="d1">
                    <h4>${e.h4}</h4>
                    <p class="green">${e.p[0]}</p>
                    <p class="black">${e.p[1]}</p>
                    </div>
                    <div><h3>${e.h3}</h3></div>
                    <div class="place">
                    <p>${e.p[2]}</p><h2>.</h2>
                    <p>${e.p[3]}</p><h2>.</h2>
                    <p>${e.p[4]}</p>
                    </div>
                </div>
            </div>
            <div class="skills">
               <button>${e.skills[0]}</button>
               <button>${e.skills[1]}</button>
               <button>${e.skills[2]}</button>
               <button>${e.skills[3]}</button>
               <button>${e.skills[4]}</button>
            </div>
        </div>`;
}); 

document.querySelector(".container").innerHTML=b;

var i=0;
var a=[];
window.addEventListener("DOMContentLoaded",function(){
    var d=document.querySelector("#filter ");
    const close=document.querySelectorAll("#filter img");
    close.forEach(c=>{
        c.style.display="none";
    })
    d.style.display="none";
});
var pa=document.querySelectorAll(".details p");
pa.forEach(para=>{
    if(para.innerText==""){
    para.style.display="none";
}
})
const c=document.querySelector(".container");
const span=document.querySelectorAll("span");
var d=document.querySelector("#filter");
var img=document.querySelectorAll("#filter img");
var p=document.querySelectorAll("#filter p");
var clear=document.querySelector("#clear p");
const emp=document.querySelectorAll(".employee")
const btns=document.querySelectorAll("button");



btns.forEach(btn=>{
    if(btn.innerText==""){
        btn.style.display="none";
    }
    btn.addEventListener("click",function(){
        clear.style.display="block";
        add(btn,i);

            i++;
        });
})

function add(bt,j){
    d.style.display="flex";
    if(!a.includes(bt.innerText)){
        a.push(bt.innerText);
        p[j].style.display="block";
        img[j].style.display="block";
        p[j].innerText=bt.innerText;
        btns.forEach(bt=>{
            for(let m=0;m<a.length;m++){
                if(bt.innerText==a[m]){
                    bt.style.backgroundColor="hsl(180, 57%, 27%, 0.7)";
                    bt.style.color="white";
                }
            }
        })
        Filter();
    }
    else{

        RevevrseFilter();
    }

}
const details=document.querySelectorAll(".details")
function Filter(){
    emp.forEach(em=>{
            em.style.display="none";       
        })

        emp.forEach(em=>{
            var k=0;
            for(let j=0;j<a.length;j++){
                if(em.classList.contains(a[j])){
                    k++;
                }
            }
            if(k>i){
                if(em.clientWidth<=400){
                    em.style.display="block";
                }
                if(em.clientWidth>400){
                    em.style.display="flex";
                }
            }
        })
}

img.forEach(im=>{
    im.addEventListener("click",function(){
        let r=im.parentElement.firstElementChild.innerText;
        let j;
        btns.forEach(bt=>{
                if(bt.innerText===r){
                    bt.style.backgroundColor="hsl(180, 38%, 89%)";
                    bt.style.color="hsl(180, 57%, 27%, 0.7)";
                }
        })
        if(a.includes(r)){
            let R=a.indexOf(r);
            p[R].style.display="none";
            img[R].style.display="none";
            p[R].innerText="";
            for(R;R<a.length;R++){
                a[R]=a[R+1];
            }
            a.pop();
        }
        if(a.length==0){
            d.style.display="none";
        }
        //filtering
        RevevrseFilter();
        i--;
    });

})

function RevevrseFilter(){
    emp.forEach(em=>{
            em.style.display="none";       
        })

        emp.forEach(em=>{
            var k=0;
            for(let j=0;j<a.length;j++){
                if(em.classList.contains(a[j])){
                    k++;
                }
            }
            if(k==a.length){
                em.style.display="flex";
            }
        })
}
clear.addEventListener("click",function(){
    for(let j=0;j<a.length;j++){
        p[j].style.display="none";
        img[j].style.display="none";
        p[j].innerText="";
    }
    while(a.length){
        a.pop();
    }
    d.style.display="none";
    emp.forEach(em=>{
        em.style.display="flex";
    })
    btns.forEach(bt=>{
        bt.style.backgroundColor="hsl(180, 38%, 89%)";
        bt.style.color="hsl(180, 57%, 27%, 0.7)";})
        i=0;       
    });
