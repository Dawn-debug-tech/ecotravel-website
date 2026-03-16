// Animated Counters

const counters=document.querySelectorAll(".stat");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const inc=target/200;

if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,10);
}else{
counter.innerText=target;
}

};

update();

});


// FAQ Toggle

document.querySelectorAll(".faq-item").forEach(item=>{
item.addEventListener("click",()=>{
const ans=item.querySelector(".faq-answer");

if(ans.style.display==="block"){
ans.style.display="none";
}else{
ans.style.display="block";
}
});
});