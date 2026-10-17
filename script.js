const screens=[...document.querySelectorAll(".screen")];
function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.next)));
let digits="";
const dots=document.getElementById("dots"), msg=document.getElementById("lock-message");
function updateDots(){dots.textContent=[0,1,2,3].map(i=>i<digits.length?"●":"○").join(" ");}
document.querySelectorAll("[data-digit]").forEach(b=>b.addEventListener("click",()=>{if(digits.length<4){digits+=b.dataset.digit;updateDots();}}));
document.querySelector("[data-clear]").addEventListener("click",()=>{digits=digits.slice(0,-1);updateDots();msg.textContent="A tiny secret, just for you.";});
document.querySelector("[data-enter]").addEventListener("click",()=>{if(digits==="0609"){show("s2");digits="";updateDots();msg.textContent="A tiny secret, just for you.";}else{msg.textContent="Not quite! Hint: Our special date 💗";digits="";updateDots();}});
document.getElementById("replay").addEventListener("click",()=>{show("s0");});
